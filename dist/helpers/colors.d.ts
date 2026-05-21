interface PlatformColors {
    primary: string;
    secondary: string;
    grey: string;
    searchBg: string;
    success: string;
    error: string;
    warning: string;
}
export interface Colors {
    readonly primary: string;
    readonly secondary: string;
    readonly background: string;
    readonly white: string;
    readonly black: string;
    readonly grey0: string;
    readonly grey1: string;
    readonly grey2: string;
    readonly grey3: string;
    readonly grey4: string;
    readonly grey5: string;
    readonly greyOutline: string;
    readonly searchBg: string;
    readonly success: string;
    readonly warning: string;
    readonly error: string;
    readonly disabled: string;
    readonly divider: string;
    readonly platform: {
        ios: PlatformColors;
        android: PlatformColors;
        web: PlatformColors;
        default: PlatformColors;
    };
}
export declare const lightColors: Colors;
export declare const darkColors: Colors;
export {};
