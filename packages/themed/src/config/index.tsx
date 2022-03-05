import {
  androidRipple,
  BackgroundImage,
  color,
  Colors,
  darkColors,
  fonts,
  getIconType,
  InlinePressableProps,
  isIOS,
  lightColors,
  normalizeText,
  patchWebProps,
  renderNode,
  ScreenHeight,
  ScreenWidth,
  registerCustomIconType,
} from '@react-native-elements/base/dist/helpers';
import {
  ReplaceTheme,
  ThemeConsumer,
  ThemeContext,
  ThemeProps,
  ThemeProvider,
  UpdateTheme,
  createTheme,
} from './ThemeProvider';
import withTheme from './withTheme';
import { makeStyles, useTheme } from './makeStyles';
import { Theme, FullTheme } from './theme';

export {
  androidRipple,
  BackgroundImage,
  color,
  darkColors,
  fonts,
  getIconType,
  isIOS,
  lightColors,
  makeStyles,
  normalizeText,
  patchWebProps,
  renderNode,
  ScreenHeight,
  ScreenWidth,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  useTheme,
  withTheme,
  createTheme,
  registerCustomIconType,
};

export type {
  Colors,
  FullTheme,
  InlinePressableProps,
  ReplaceTheme,
  Theme,
  ThemeProps,
  UpdateTheme,
};

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & Partial<ThemeProps<T>>
>;
