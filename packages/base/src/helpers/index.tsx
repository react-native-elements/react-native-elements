import { Platform, Dimensions, PressableProps, ColorValue } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType, { registerCustomIconType } from './getIconType';
import normalizeText from './normalizeText';
import { Colors, lightColors, darkColors } from './colors';
import { InlinePressableProps } from './InlinePressableProps';
import React from 'react';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';
const getBehaviorType = Platform.OS === 'ios' ? 'padding' : 'height';

export type StringOmit<K extends string> = K | Omit<string, K>;

type ThemeProps<T> = T & {
  theme: Theme;
};

export type RneFunctionComponent<T> = React.FunctionComponent<
  React.PropsWithChildren<ThemeProps<T>>
>;

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const defaultSpacing = { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 };

export const defaultTheme: Theme = {
  colors: lightColors,
  spacing: defaultSpacing,
  mode: 'light',
};

export type Theme = {
  colors: Colors;
  spacing: ThemeSpacing;
  mode: 'light' | 'dark';
};

export const androidRipple = (
  rippleColor?: string | ColorValue
): PressableProps['android_ripple'] => {
  return {
    borderless: false,
    color: rippleColor,
    radius: -5,
  };
};

export const patchWebProps = <T extends Record<any, any>>({
  updateTheme,
  replaceTheme,
  onClear,
  ...rest
}: T) => {
  return rest;
};

export type { Colors, InlinePressableProps };

export {
  renderNode,
  getIconType,
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  lightColors,
  darkColors,
  color,
  getBehaviorType,
  registerCustomIconType,
};

export { default as BackgroundImage } from './BackgroundImage';
export { default as fonts } from './fonts';

export { makeStyles } from './makeStyles';
