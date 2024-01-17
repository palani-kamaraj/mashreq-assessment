import { createTheme } from '@mui/material';
import { useStore, themeColor, getFontName } from '@shared';

export const useGetWebTheme = () => {
  const userCountry = useStore((state) => state.user?.country);
  const fontFamilyName = getFontName();
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

  return webTheme;
};
