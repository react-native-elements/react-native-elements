import type {
  ReplaceTheme,
  UpdateTheme,
  ThemeOptions,
  CreateThemeOptions,
} from './ThemeProvider';
import {
  createTheme,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  useTheme,
  useThemeMode,
} from './ThemeProvider';
import withTheme from './withTheme';
import { makeStyles } from './makeStyles';
import type {
  Theme,
  FullTheme,
  ThemeMode,
  ComponentTheme,
  Colors,
} from './theme';

export {
  makeStyles,
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
  useTheme,
  useThemeMode,
  withTheme,
  createTheme,
};

export type {
  Colors,
  FullTheme,
  ReplaceTheme,
  Theme,
  UpdateTheme,
  ComponentTheme,
  ThemeMode,
  ThemeOptions,
  CreateThemeOptions,
};
