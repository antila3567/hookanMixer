import React, { useContext, useMemo } from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const window = Dimensions.get('window');

export type Theme = 'dark' | 'light';

interface IThemeContext {
  onChangeTheme: (theme: Theme) => any;
  theme: Theme;

  primary: string;
  primaryLight: string;

  defaultBackground: string;
  backgroundTransparent: string;
  background: string;
  backgroundLight: string;
  backgroundDark: string;
  backgroundBlack: string;
  maskGame: string;
  firstLockCircle: string;
  secondLockCircle: string;

  border: string;

  text: string;
  lightText: string;
  reverseText: string;
  grayText: string;

  errorColor: string;

  violet: string[];
  violet2: string[];
  blue: string[];
  cream: string[];
  cream2: string[];
  violetOpacity: string[];
  speaker: string[];
}

const ThemeContext = React.createContext({} as IThemeContext);

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

const colorWithOpacity = (color: string, opacity: number) => {
  const { r, b, g } = hexToRgb(color)!;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};



const primaryLight = colorWithOpacity('#FFFFFF', 0.9);

export const cwo = {
  primaryLight
}

const isTablet = Math.min(window.height, window.width) > 800;

const width = 375;

const f = (z: number) => {
  const x = (16 / 9) * width;

  return (100 * z) / Math.sqrt(x ** 2 + width ** 2);
};

const sizes: any = {};
const widths: any = {};

for (let i = 1; i <= 200; i++) {
  sizes[i] = responsiveFontSize(f(i) * (isTablet ? 0.7 : 1));
  widths[i] = responsiveFontSize(f(i));
}

const responseFont = (num: number) => {
  return Dimensions.get('screen').height / num
}

export { useTheme, sizes, widths, colorWithOpacity, responseFont };