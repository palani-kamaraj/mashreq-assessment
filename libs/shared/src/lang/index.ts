import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const en_common = require('./locales/en.json');
const ar_common = require('./locales/ar.json');

i18next.use(initReactI18next)

export const i18nOptions = {
  resources: {
    en: {
      translation: en_common,
    },
    ar: {
      translation: ar_common,
    },
  },
  // lng: I18nManager.isRTL ? 'ar' : 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
  ns: ['translation'],
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'translation',
};

export const i18nConfig = i18next;