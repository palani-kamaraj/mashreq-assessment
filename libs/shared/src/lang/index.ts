import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ILanguageOptions } from '@types';

/* eslint-disable */
const en_common = require('./locales/en.json');
const ar_common = require('./locales/ar.json');
const ta_common = require('./locales/ta.json');

i18next.use(initReactI18next)

export const i18nOptions = {
  resources: {
    [ILanguageOptions.EN]: {
      translation: en_common,
    },
    [ILanguageOptions.AR]: {
      translation: ar_common,
    },
    [ILanguageOptions.TA]: {
      translation: ta_common,
    },
  },
  fallbackLng: ILanguageOptions.EN,
  ns: ['translation'],
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'translation',
};

export const i18nConfig = i18next;