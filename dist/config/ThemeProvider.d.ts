import React from 'react';
import { Colors } from './colors';
import { ThemeMode, RecursivePartial, Theme } from './theme';
import { ComponentTheme } from './theme.component';
export type { RecursivePartial };
declare type ComponentFunctionProps<Components = ComponentTheme> = {
    [Key in keyof Components]?: Components[Key] | ((props: Components[Key], theme: Theme & {
        colors: Colors;
    }) => Components[Key]);
};
export interface CreateThemeOptions extends RecursivePartial<Theme> {
    lightColors?: RecursivePartial<Colors>;
    darkColors?: RecursivePartial<Colors>;
    components?: ComponentFunctionProps;
}
export interface ThemeOptions extends Theme {
    colors: Colors;
    components?: ComponentFunctionProps;
}
export declare type UpdateTheme = (myNewTheme: CreateThemeOptions | ((myTheme: CreateThemeOptions) => CreateThemeOptions)) => void;
export declare type ReplaceTheme = (updates: CreateThemeOptions | ((myTheme: CreateThemeOptions) => CreateThemeOptions)) => void;
export declare type ThemeProps<T = {}> = {
    theme: ThemeOptions & T;
    updateTheme: UpdateTheme;
    replaceTheme: ReplaceTheme;
};
export declare type ThemeProviderContext<T = {}> = ThemeProps<ThemeOptions & T>;
export declare const ThemeContext: React.Context<ThemeProviderContext<{}>>;
export declare const createTheme: (theme?: CreateThemeOptions) => CreateThemeOptions;
export declare const ThemeProvider: React.FC<{
    theme?: CreateThemeOptions;
    children?: React.ReactNode;
}>;
export declare const ThemeConsumer: React.Consumer<ThemeProviderContext<{}>>;
interface UseTheme {
    replaceTheme: ReplaceTheme;
    updateTheme: UpdateTheme;
    theme: {
        colors: Colors;
    } & Theme;
}
export declare const useTheme: () => UseTheme;
export declare const useThemeMode: () => {
    mode: ThemeMode;
    setMode: (colorMode: ThemeMode) => void;
};
