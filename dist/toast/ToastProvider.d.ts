import React from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';
import type { StyleProp, TextStyle, ViewStyle, TextProps } from 'react-native';
import type { DefaultConfigType } from './config';
export declare enum ToastTypes {
    info = "info",
    success = "success",
    warning = "warning",
    error = "error"
}
export declare enum ToastPosition {
    bottom = "bottom",
    top = "top"
}
export declare type StylePropsWithMessageType<T> = StyleProp<T> & {
    [key in ToastTypes]?: StyleProp<T>;
};
export declare type MessageState = {
    id: string;
    text: string;
    type: ToastTypes;
};
export declare type ToastProviderProps = {
    duration?: number;
    maxMessages?: number;
    position?: keyof typeof ToastPosition;
    containerToastStyle?: StyleProp<ViewStyle>;
    containerMessageStyle?: StylePropsWithMessageType<ViewStyle>;
    textMessageStyle?: StylePropsWithMessageType<TextStyle>;
    textMessageProps?: TextProps;
};
declare type ToastContextType = {
    messages: MessageState[];
    setMessage: Dispatch<SetStateAction<MessageState[]>>;
} & DefaultConfigType;
export declare const ToastContext: React.Context<ToastContextType>;
declare const ToastProvider: FC<ToastProviderProps>;
export default ToastProvider;
