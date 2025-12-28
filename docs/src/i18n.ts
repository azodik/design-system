import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import es from "./locales/es.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n;
