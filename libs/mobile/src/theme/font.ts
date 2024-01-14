import { Platform } from 'react-native';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const BOLD = ['display', 'headline'];
const REGULAR = ['title'];

export const addCustomFonts = (fontName: string) => Object.fromEntries(
  Object.entries(DefaultTheme.fonts).map(([variantName, variantProps]) => {
    const fontFamilyName = BOLD.find((f) =>
      variantName.toLowerCase().includes(f)
    )
      ? `${fontName}-${fontName === 'Roboto' ? 'Bold' : 'SemiBold'}`
      : REGULAR.find((f) => variantName.toLowerCase().includes(f))
      ? `${fontName}-Regular`
      : `${fontName}-Medium`;
    return [
      variantName,
      {
        ...variantProps,
        fontFamily: Platform.select({
          default: fontFamilyName,
        }),
      },
    ];
  })
);