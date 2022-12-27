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
import { Colors, darkColors, lightColors } from './colors';
import {
  ReplaceTheme,
  UpdateTheme,
  ThemeOptions,
  CreateThemeOptions,
  createTheme,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  ThemeProps,
  useTheme,
  useThemeMode,
} from './ThemeProvider';
import withTheme from './withTheme';
import { makeStyles } from './makeStyles';
import { styled } from './styled';
import type { FullTheme, ThemeMode, ThemeSpacing, Theme } from './theme';
import type { ComponentTheme } from './theme.component';

export {
  styled,
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
  ThemeProps,
  ThemeSpacing,
  CreateThemeOptions,
};
