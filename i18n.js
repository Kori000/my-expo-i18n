import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/translation.json';
import zh from './public/locales/zh/translation.json';
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: en
    },
    zh: {
      translation: zh
    }
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
