import { useTranslation } from 'react-i18next';
import { ILanguageOptions } from '@types';
import { addCustomFonts, appTheme, themeColor } from '../theme';
import { useStore } from '@shared';

export const useGetAppTheme = () => {
  const { i18n } = useTranslation();
  const userCountry = useStore((state) => state.user?.country);
  
  const colors = userCountry ? themeColor[userCountry] : themeColor.ae;
  const updatedAppTheme = {
    ...appTheme,
    colors: {
      ...appTheme.colors,
      ...colors
    },
  };

  const fontNames = {
    [ILanguageOptions.EN]: 'Roboto',
    [ILanguageOptions.AR]: 'NotoKufiArabic',
    [ILanguageOptions.TA]: 'NotoSansTamil',
  };
  const addFonts = addCustomFonts(
    fontNames[i18n.language as keyof typeof fontNames]
  );

  return { ...updatedAppTheme, font: addFonts };
};
