import { i18nConfig, i18nOptions } from '@shared';
import 'intl-pluralrules'; // this is important to handle Android "i18next::pluralResolver:" error

i18nConfig.init({
  ...i18nOptions
});

export default i18nConfig;