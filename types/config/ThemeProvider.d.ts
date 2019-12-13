export const ThemeContext: React.Context<{
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
declare class ThemeProvider extends React.Component<any, any, any> {
    constructor(props: any);
    defaultTheme: {
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
    state: {
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
    };
    updateTheme: (updates: any) => void;
    replaceTheme: (theme: any) => void;
    getTheme: () => {
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
    render(): JSX.Element;
}
declare namespace ThemeProvider {
    export namespace propTypes {
        export const theme: PropTypes.Requireable<object>;
        export const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    }
    export namespace defaultProps {
        const theme_1: {};
        export { theme_1 as theme };
    }
}
export default ThemeProvider;
export const ThemeConsumer: React.ComponentType<React.ConsumerProps<{
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
import React from "react";
import PropTypes from "prop-types";
