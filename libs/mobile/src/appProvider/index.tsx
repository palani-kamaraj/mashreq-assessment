import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { PaperProvider } from 'react-native-paper';
import i18nConfig from '../config/i18n.config';
import { useGetAppTheme } from '../hooks';

export const AppProvider = ({ children }: { children: React.JSX.Element }) => {
  const theme = useGetAppTheme();
  return (
    <I18nextProvider i18n={i18nConfig}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </I18nextProvider>
  );
};
