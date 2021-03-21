import { StylePropsWithMessageType, ToastPosition } from './ToastProvider';
import type { StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';
export declare type DefaultConfigType = {
    duration: number;
    maxMessages: number;
    position: ToastPosition;
    containerToastStyle: StyleProp<ViewStyle>;
    containerMessageStyle: StylePropsWithMessageType<ViewStyle>;
    textMessageStyle: StylePropsWithMessageType<TextStyle>;
    textMessageProps: TextProps;
};
declare const defaultConfig: DefaultConfigType;
export default defaultConfig;
