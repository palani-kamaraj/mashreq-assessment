import { useTranslation } from 'react-i18next';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { ILanguageOptions } from '@types';
import { themeColor, useStore } from '@shared';
import { addCustomFonts } from '../theme';

export const useGetAppTheme = () => {
  const { i18n } = useTranslation();
  const userCountry = useStore((state) => state.user?.country);
  const colors = userCountry ? themeColor[userCountry] : themeColor.ae;
  const appTheme = { ...DefaultTheme };
  const updatedAppTheme = {
    ...appTheme,
    colors: {
      ...appTheme.colors,
      primary: colors,
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
