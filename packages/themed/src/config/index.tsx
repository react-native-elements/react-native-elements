import BackgroundImage from './BackgroundImage';
import { Colors, lightColors, darkColors as colorsDark } from './colors';
import fonts from './fonts';
import {
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  ThemeProviderProps,
  UpdateTheme,
  ReplaceTheme,
} from './ThemeProvider';
import withTheme from './withTheme';
import { makeStyles, useTheme } from './makeStyles';
import { Theme, ComponentTheme, FullTheme, ThemeMode } from './theme';

export {
  BackgroundImage,
  lightColors as colors,
  colorsDark,
  fonts,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  useTheme,
  makeStyles,
};

export type {
  Theme,
  ComponentTheme,
  FullTheme,
  UpdateTheme,
  ReplaceTheme,
  ThemeProviderProps as ThemeProps,
  Colors,
  ThemeMode,
};
