import { createTheme } from '@mui/material';
import { useStore, themeColor, getFontName } from '@shared';
import { useCallback } from 'react';

export const useGetWebTheme = () => {
  const currentLang = useStore((state) => state.lang);
  const userCountry = useStore((state) => state.user?.country);
  const fontFamilyName = getFontName(true);
  
  const colors = userCountry ? themeColor[userCountry] : themeColor.ae;
  const themeConfig = {
    palette: {
      primary: {
        main: colors,
      },
    },
  };

  const webTheme = createTheme({
    ...themeConfig,
    typography: {
      fontFamily: `${fontFamilyName}, sans-serif`,
    },
  });

  const newTheme = useCallback(() => webTheme, [currentLang]);

  return newTheme;
};
