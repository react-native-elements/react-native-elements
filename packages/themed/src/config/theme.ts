import { defaultSpacing, ThemeSpacing } from '@rneui/base/dist/helpers';
import { Colors } from './colors';
export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type ThemeMode = 'light' | 'dark';

export { ThemeSpacing, defaultSpacing };

export interface Theme {
  colors: Colors;
  mode: ThemeMode;
  spacing: ThemeSpacing;
}

export interface FullTheme extends Theme {}
