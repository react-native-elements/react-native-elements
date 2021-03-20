import React from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
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
declare type StylePropsWithMessageType = StyleProp<ViewStyle> & {
    [key in ToastTypes]?: StyleProp<ViewStyle>;
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
    containerMessageStyle?: StylePropsWithMessageType;
    messageTextStyle?: StyleProp<TextStyle>;
};
declare type ToastContextType = {
    messages: MessageState[];
    setMessage: Dispatch<SetStateAction<MessageState[]>>;
    duration: number;
    maxMessages: number;
    position: keyof typeof ToastPosition;
    containerToastStyle: StyleProp<ViewStyle>;
    containerMessageStyle: StylePropsWithMessageType;
    messageTextStyle: StyleProp<TextStyle>;
};
export declare const ToastContext: React.Context<ToastContextType>;
declare const ToastProvider: FC<ToastProviderProps>;
export default ToastProvider;
