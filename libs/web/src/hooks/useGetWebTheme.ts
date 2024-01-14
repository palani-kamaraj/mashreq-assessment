import { createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ILanguageOptions } from '@types';
import { themeConfig } from '../theme';

export const useGetWebTheme = () => {
  const { i18n } = useTranslation();

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
