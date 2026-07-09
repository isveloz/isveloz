import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslations from './locales/es.json';
import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';
import arTranslations from './locales/ar.json';

const resources = {
  es: { translation: esTranslations },
  en: { translation: enTranslations },
  zh: { translation: zhTranslations },
  ar: { translation: arTranslations }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
