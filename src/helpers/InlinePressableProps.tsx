import { PressableProps, GestureResponderEvent } from 'react-native';

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
