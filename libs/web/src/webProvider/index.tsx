import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import i18nConfig from '../config/i18n.config';
import { useGetWebTheme } from '../hooks/useGetWebTheme';
import '../config/font-config';


export const WebProvider = ({ children }: { children: React.JSX.Element }) => {
  const webTheme = useGetWebTheme();
  return (
    <I18nextProvider i18n={i18nConfig}>
      <ThemeProvider theme={webTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
};
