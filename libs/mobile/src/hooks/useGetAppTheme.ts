import { useTranslation } from 'react-i18next';
import { ILanguageOptions } from '@types';
import { addCustomFonts, appTheme } from '../theme';

export const useGetAppTheme = () => {
  const { i18n } = useTranslation();
  const fontNames = {
    [ILanguageOptions.EN]: 'Roboto',
    [ILanguageOptions.AR]: 'NotoKufiArabic',
    [ILanguageOptions.TA]: 'NotoSansTamil',
  };
  const addFonts = addCustomFonts(
    fontNames[i18n.language as keyof typeof fontNames]
  );

  return { ...appTheme, font: addFonts };
};
