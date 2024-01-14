import i18next from "i18next";
import { initReactI18next } from "react-i18next";

/* eslint-disable */
const en_common = require('./locales/en.json');
const ar_common = require('./locales/ar.json');
const ta_common = require('./locales/ta.json');

i18next.use(initReactI18next)

export const i18nOptions = {
  resources: {
    en: {
      translation: en_common,
    },
    ar: {
      translation: ar_common,
    },
    ta: {
      translation: ta_common,
    },
  },
  fallbackLng: 'en',
  ns: ['translation'],
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'translation',
};

export const i18nConfig = i18next;