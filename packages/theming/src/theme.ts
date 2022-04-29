export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type ThemeMode = 'light' | 'dark';

export interface Theme {}

export interface ComponentTheme {}

export interface Colors {}

export interface FullTheme extends ComponentTheme, Theme {
  mode: ThemeMode;
  colors: Readonly<Colors>;
}
