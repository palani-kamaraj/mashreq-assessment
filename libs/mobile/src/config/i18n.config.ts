import { i18nConfig, i18nOptions } from '@shared';
import { I18nManager } from 'react-native';
import 'intl-pluralrules'; // this is important to handle Android "i18next::pluralResolver:" error

i18nConfig.init({
  ...i18nOptions,
  lng: I18nManager.isRTL ? 'ar' : 'en',
});

export default i18nConfig;