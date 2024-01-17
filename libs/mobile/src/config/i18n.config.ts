import { i18nConfig as i18nMConfig, i18nOptions } from '@shared';
import { mStoreState } from '../hooks';
import { IThemeOptions } from '@types';
import 'intl-pluralrules'; // this is important to handle Android "i18next::pluralResolver:" error

i18nMConfig.init({
  ...i18nOptions,
  lng: mStoreState?.lang ??  IThemeOptions.AE
});

export default i18nMConfig;