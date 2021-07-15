/// <reference types="react" />
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import { ThemeProps } from '../config';
declare const ScreenWidth: number;
declare const ScreenHeight: number;
declare const isIOS: boolean;
export declare type RneFunctionComponent<T> = React.FunctionComponent<T & Partial<ThemeProps<T>>>;
export declare const patchWebProps: <T extends Record<any, any>>({ updateTheme, replaceTheme, onClear, ...rest }: T) => Pick<T, Exclude<keyof T, "updateTheme" | "replaceTheme" | "onClear">>;
export { renderNode, getIconType, normalizeText, ScreenWidth, ScreenHeight, isIOS, color, };
