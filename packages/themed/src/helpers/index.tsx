import { Platform, Dimensions, PressableProps, ColorValue } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import { ThemeProps } from '../config';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & Partial<ThemeProps<T>>
>;

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

export {
  renderNode,
  getIconType,
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  color,
};

type Inline<T, K extends keyof T> = Partial<
  {
    pressableProps: Omit<T, K>;
  } & Pick<T, K>
>;

export type InlinePressableProps = Inline<
  PressableProps,
  'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'
>;
