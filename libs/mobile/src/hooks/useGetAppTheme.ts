import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { getFontName, themeColor } from '@shared';
import { addCustomFonts } from '../theme';
import { useMStore } from './useMStore';

export const useGetAppTheme = () => {
  const userCountry = useMStore((state) => state.user?.country);
  const colors = userCountry ? themeColor[userCountry] : themeColor.ae;
  const appTheme = { ...DefaultTheme };
  const updatedAppTheme = {
    ...appTheme,
    colors: {
      ...appTheme.colors,
      primary: colors,
    },
  };

  const addFonts = addCustomFonts(getFontName());

  return { ...updatedAppTheme, fonts: addFonts };
};
