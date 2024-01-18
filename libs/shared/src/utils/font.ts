import { ILanguageOptions } from '@types';
import i18n from 'i18next';

export const getFontName = (isWeb?: boolean) => {
  const fontNames = {
    [ILanguageOptions.EN]: 'Roboto',
    [ILanguageOptions.AR]: 'NotoKufiArabic',
    [ILanguageOptions.TA]: 'NotoSansTamil',
    [ILanguageOptions.HI]: 'NotoSansDevanagari',
  };
  const webFontNames = {
    [ILanguageOptions.EN]: 'Roboto',
    [ILanguageOptions.AR]: 'Noto Kufi Arabic Variable',
    [ILanguageOptions.TA]: 'Noto Sans Tamil Variable',
    [ILanguageOptions.HI]: 'Noto Sans Devanagari Variable',
  };
  const currentLang = i18n.language as keyof typeof fontNames;
  return isWeb ? webFontNames[currentLang] : fontNames[currentLang];
};
