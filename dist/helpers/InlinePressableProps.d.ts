import { PressableProps, GestureResponderEvent } from 'react-native';
export interface InlinePressableProps {
    onPress?: (event: GestureResponderEvent) => void;
    onPressIn?: (event: GestureResponderEvent) => void;
    onPressOut?: (event: GestureResponderEvent) => void;
    onLongPress?: (event: GestureResponderEvent) => void;
    pressableProps?: Omit<PressableProps, 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'>;
}
