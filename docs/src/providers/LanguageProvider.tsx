import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import {
  FlagUSAIcon,
  FlagIndiaIcon,
  FlagFranceIcon,
  FlagGermanyIcon,
  FlagSpainIcon,
} from "@azodik/icons";

export interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  availableLanguages: Array<{
    code: string;
    name: string;
    flag: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  }>;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const AVAILABLE_LANGUAGES: Array<{
  code: string;
  name: string;
  flag: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
}> = [
  { code: "en", name: "English", flag: FlagUSAIcon },
  { code: "hi", name: "हिन्दी", flag: FlagIndiaIcon },
  { code: "fr", name: "Français", flag: FlagFranceIcon },
  { code: "de", name: "Deutsch", flag: FlagGermanyIcon },
  { code: "es", name: "Español", flag: FlagSpainIcon },
];

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved && AVAILABLE_LANGUAGES.some((lang) => lang.code === saved)) {
        return saved;
      }
    }
    return i18n.language || "en";
  });

  const availableLanguages = useMemo(() => AVAILABLE_LANGUAGES, []);

  const changeLanguage = useCallback(
    async (language: string) => {
      try {
        await i18n.changeLanguage(language);
        setCurrentLanguage(language);
        localStorage.setItem("language", language);
      } catch {
        // Silently handle language change errors - fallback to previous language
        // In production, you might want to log this to an error tracking service
        // Error is intentionally not logged to avoid console noise in production
      }
    },
    [i18n],
  );

  // Initialize language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (
      savedLanguage &&
      availableLanguages.some((lang) => lang.code === savedLanguage) &&
      savedLanguage !== currentLanguage
    ) {
      // Use setTimeout to defer state update outside of effect
      setTimeout(() => {
        void changeLanguage(savedLanguage);
      }, 0);
    }
  }, [changeLanguage, availableLanguages, currentLanguage]);

  // Sync with i18n language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      if (lng !== currentLanguage) {
        // Use setTimeout to defer state update outside of effect
        setTimeout(() => {
          setCurrentLanguage(lng);
        }, 0);
      }
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, currentLanguage]);

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    availableLanguages,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
