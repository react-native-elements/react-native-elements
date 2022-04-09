import {
  androidRipple,
  BackgroundImage,
  color,
  fonts,
  getIconType,
  InlinePressableProps,
  isIOS,
  normalizeText,
  patchWebProps,
  renderNode,
  ScreenHeight,
  ScreenWidth,
  registerCustomIconType,
} from '@rneui/base/dist/helpers';
import { type Colors, darkColors, lightColors } from './colors';
import {
  type ReplaceTheme,
  type UpdateTheme,
  type ThemeOptions,
  type CreateThemeOptions,
  createTheme,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} from './ThemeProvider';
import withTheme from './withTheme';
import { makeStyles, useTheme, useThemeMode } from './makeStyles';
import type { Theme, FullTheme, ThemeMode } from './theme';
import type { ComponentTheme } from './theme.component';

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
  useThemeMode,
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
  UpdateTheme,
  ComponentTheme,
  ThemeMode,
  ThemeOptions,
  CreateThemeOptions,
};
