import { i18nConfig, i18nOptions, storeState } from '@shared';
import { IThemeOptions } from '@types';

i18nConfig.init({
  ...i18nOptions,
  lng: storeState?.lang ?? IThemeOptions.AE
});

export default i18nConfig;