import { PressableProps, ColorValue } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType, { registerCustomIconType } from './getIconType';
import normalizeText from './normalizeText';
import { Colors, lightColors, darkColors } from './colors';
import { InlinePressableProps } from './InlinePressableProps';
import React from 'react';
declare const ScreenWidth: number;
declare const ScreenHeight: number;
declare const isIOS: boolean;
declare const getBehaviorType: string;
export declare type StringOmit<K extends string> = K | Omit<string, K>;
export declare type RneFunctionComponent<T> = React.FunctionComponent<T & {
    theme?: Theme;
    children?: React.ReactNode | undefined;
}>;
export interface ThemeSpacing {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
export declare const defaultSpacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export declare const defaultTheme: Theme;
export declare type Theme = {
    colors: Colors;
    spacing: ThemeSpacing;
};
export declare const androidRipple: (rippleColor?: string | ColorValue) => PressableProps['android_ripple'];
export declare const patchWebProps: <T extends Record<any, any>>({ updateTheme, replaceTheme, onClear, ...rest }: T) => Omit<T, "updateTheme" | "replaceTheme" | "onClear">;
export type { Colors, InlinePressableProps };
export { renderNode, getIconType, normalizeText, ScreenWidth, ScreenHeight, isIOS, lightColors, darkColors, color, getBehaviorType, registerCustomIconType, };
export { default as BackgroundImage } from './BackgroundImage';
export { default as fonts } from './fonts';
export { makeStyles } from './makeStyles';
