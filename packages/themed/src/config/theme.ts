import { Colors } from './colors';
import { ComponentTheme } from './theme.component';

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type ThemeMode = 'light' | 'dark';

export interface Theme {}

export interface FullTheme extends ComponentTheme, Theme {
  mode: ThemeMode;
  colors: Colors;
}
