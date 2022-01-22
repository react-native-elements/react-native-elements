import BackgroundImage from './BackgroundImage';
import { Colors, colors, darkColors as colorsDark } from './colors';
import fonts from './fonts';
import {
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  ThemeProps,
  UpdateTheme,
  ReplaceTheme,
} from './ThemeProvider';
import withTheme from './withTheme';
import { makeStyles, useTheme } from './makeStyles';
import { Theme, FullTheme } from './theme';

export {
  BackgroundImage,
  colors,
  colorsDark,
  fonts,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  useTheme,
  makeStyles,
};

export type { Theme, FullTheme, UpdateTheme, ReplaceTheme, ThemeProps, Colors };
