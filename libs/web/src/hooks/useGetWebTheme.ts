import { createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ILanguageOptions } from '@types';
import { useStore, themeColor } from '@shared';

export const useGetWebTheme = () => {
  const { i18n } = useTranslation();
  const userCountry = useStore((state) => state.user?.country);

  const colors = userCountry ? themeColor[userCountry] : themeColor.ae;
  const themeConfig = {
    palette: {
      primary: {
        main: colors,
      },
    },
  };

  const fontNames = {
    [ILanguageOptions.EN]: 'Roboto',
    [ILanguageOptions.AR]: 'Noto Kufi Arabic Variable',
    [ILanguageOptions.TA]: 'Noto Sans Tamil Variable',
  };
  const fontFamilyName = fontNames[i18n.language as keyof typeof fontNames];

  const webTheme = createTheme({
    ...themeConfig,
    typography: {
      fontFamily: `${fontFamilyName}, sans-serif`,
    },
  });

  return webTheme;
};
