import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import en from '../../apps/playground/public/locales/en.json';
import hi from '../../apps/playground/public/locales/hi.json';
import fr from '../../apps/playground/public/locales/fr.json';
import de from '../../apps/playground/public/locales/de.json';
import es from '../../apps/playground/public/locales/es.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
