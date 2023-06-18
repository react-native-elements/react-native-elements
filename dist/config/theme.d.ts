import { Colors } from './colors';
import { ComponentTheme } from './theme.component';
import { ThemeSpacing, defaultSpacing } from '@rneui/base/dist/helpers';
export declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export declare type ThemeMode = 'light' | 'dark';
export { ThemeSpacing, defaultSpacing };
export interface Theme {
    mode: ThemeMode;
    spacing: ThemeSpacing;
}
export interface FullTheme extends ComponentTheme, Theme {
    colors: Colors;
}
