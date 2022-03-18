import { Platform, Dimensions, PressableProps, ColorValue } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType, { registerCustomIconType } from './getIconType';
import normalizeText from './normalizeText';
import { Colors, lightColors, darkColors } from './colors';
import { InlinePressableProps } from './InlinePressableProps';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & {
    theme?: {
      colors: Colors;
    };
  }
>;

export const defaultTheme = {
  colors: lightColors,
};

export type Theme = {
  colors: Colors;
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
  registerCustomIconType,
};

export { default as BackgroundImage } from './BackgroundImage';
export { default as fonts } from './fonts';
