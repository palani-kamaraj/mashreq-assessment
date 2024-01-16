import { IThemeOptions } from '@types';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const themeColor = {
  [IThemeOptions.AE]: { primary: '#ff5e00' },
  [IThemeOptions.IN]: { primary: '#9c27b0'},
  [IThemeOptions.LK]: { primary: '#1976d2' },
  [IThemeOptions.PK]: {primary: '#2e7d32'},
};

export const appTheme = {
  ...DefaultTheme
};
