import React from 'react';
import { FullTheme, Theme } from './theme';
declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export interface ThemeProps<T> {
    theme: Theme<T>;
    updateTheme: (updates: RecursivePartial<FullTheme>) => void;
    replaceTheme: (updates: RecursivePartial<FullTheme>) => void;
}
export declare const ThemeContext: React.Context<ThemeProps<{}>>;
export declare type ThemeProviderProps = {
    useDark?: boolean;
};
declare type ThemeProviderState = {
    theme: Theme;
    useDark: boolean;
};
export default class ThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState> {
    static defaultProps: {
        theme: {};
        useDark: boolean;
    };
    defaultTheme: Partial<FullTheme>;
    constructor(props: any);
    static getDerivedStateFromProps(props: any, state: any): {
        theme: {
            colors: import("./colors").Colors;
        };
        useDark: any;
    };
    updateTheme: (updates: RecursivePartial<FullTheme>) => void;
    replaceTheme: (theme: RecursivePartial<FullTheme>) => void;
    getTheme: () => Partial<FullTheme>;
    render(): JSX.Element;
}
export declare const ThemeConsumer: React.Consumer<ThemeProps<{}>>;
export {};
