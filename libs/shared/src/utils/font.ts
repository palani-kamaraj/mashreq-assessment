import { ILanguageOptions } from '@types';
import i18n from 'i18next';

export const getFontName = () => {
  const fontNames = {
    [ILanguageOptions.EN]: 'Roboto',
    [ILanguageOptions.AR]: 'NotoKufiArabic',
    [ILanguageOptions.TA]: 'NotoSansTamil',
  };
  return fontNames[i18n.language as keyof typeof fontNames];
};
