import { useTranslation } from 'react-i18next';
import { addCustomFonts, appTheme } from '../theme';

export const useGetAppTheme = () => {
  const { i18n } = useTranslation();
  const fontNames = {
    en: 'Roboto',
    ar: 'NotoKufiArabic',
    ta: 'NotoSansTamil',
  };
  const addFonts = addCustomFonts(
    fontNames[i18n.language as keyof typeof fontNames]
  );

  return { ...appTheme, font: addFonts };
};
