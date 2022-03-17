import {
  Platform,
  Dimensions,
  PressableProps,
  ColorValue,
  GestureResponderEvent,
} from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import { colors, Colors } from './index-config';

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
  colors,
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

export interface InlinePressableProps {
  /**
   * Called when a single tap gesture is detected.
   * @type GestureResponderEventHandler
   */
  onPress?: (event: GestureResponderEvent) => void;

  /**
   * Called when a touch is engaged before `onPress`.
   * @type GestureResponderEventHandler
   */
  onPressIn?: (event: GestureResponderEvent) => void;

  /**
   * Called when a touch is released before `onPress`.
   * @type GestureResponderEventHandler
   */
  onPressOut?: (event: GestureResponderEvent) => void;

  /**
   * Called when a long-tap gesture is detected.
   * @type GestureResponderEventHandler
   */
  onLongPress?: (event: GestureResponderEvent) => void;

  /**
   * @default None
   * @type PressableProps except click handlers
   */
  pressableProps?: Omit<
    PressableProps,
    'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'
  >;
}

export {
  renderNode,
  getIconType,
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  colors,
  color,
};
