import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/providers/LanguageProvider";

export function useLanguageTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageTranslation must be used within a LanguageProvider");
  }

  const { t, i18n } = useTranslation();

  return { ...context, t, i18n }; // Return language state + translation functions
}
