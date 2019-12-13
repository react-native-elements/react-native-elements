import React from 'react';
export declare const ThemeContext: React.Context<{
    theme: {
        colors: {
            primary: string;
            secondary: string;
            grey0: string;
            grey1: string;
            grey2: string;
            grey3: string;
            grey4: string;
            grey5: string;
            greyOutline: string;
            searchBg: string;
            success: string;
            error: string;
            warning: string;
            disabled: string;
            divider: string;
            platform: {
                ios: {
                    primary: string;
                    secondary: string;
                    success: string;
                    error: string;
                    warning: string;
                };
                android: {
                    primary: string;
                    secondary: string;
                    success: string;
                    error: string;
                    warning: string;
                };
            };
        };
    };
}>;
declare type ThemeProviderProps = {
    theme?: object;
};
declare type ThemeProviderState = {
    theme: any;
};
export default class ThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState> {
    static defaultProps: {
        theme: {};
    };
    defaultTheme: object;
    constructor(props: any);
    updateTheme: (updates: any) => void;
    replaceTheme: (theme: any) => void;
    getTheme: () => any;
    render(): JSX.Element;
}
export declare const ThemeConsumer: React.ComponentType<React.ConsumerProps<{
    theme: {
        colors: {
            primary: string;
            secondary: string;
            grey0: string;
            grey1: string;
            grey2: string;
            grey3: string;
            grey4: string;
            grey5: string;
            greyOutline: string;
            searchBg: string;
            success: string;
            error: string;
            warning: string;
            disabled: string;
            divider: string;
            platform: {
                ios: {
                    primary: string;
                    secondary: string;
                    success: string;
                    error: string;
                    warning: string;
                };
                android: {
                    primary: string;
                    secondary: string;
                    success: string;
                    error: string;
                    warning: string;
                };
            };
        };
    };
}>>;
export {};
