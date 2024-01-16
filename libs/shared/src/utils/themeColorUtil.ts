import { IThemeOptions } from '@types';

export const colorCode = {
  theme1: '#ff5e00',
  theme2: '#9c27b0',
  theme3: '#1976d2',
  theme4: '#2e7d32',
};

export const themeColor = {
  [IThemeOptions.AE]: colorCode.theme1,
  [IThemeOptions.IN]: colorCode.theme2,
  [IThemeOptions.LK]: colorCode.theme3,
  [IThemeOptions.PK]: colorCode.theme4,
};
