import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';

import type { Dispatch, FC, SetStateAction } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import Toast from './Toast';

export enum ToastTypes {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export enum ToastPosition {
  bottom = 'bottom',
  top = 'top',
}

export type StylePropsWithMessageType<T> = StyleProp<T> &
  {
    [key in ToastTypes]?: StyleProp<T>;
  };

type defaultConfigType = {
  duration: number;
  maxMessages: number;
  position: ToastPosition;
  containerMessageStyle: StylePropsWithMessageType<ViewStyle>;
  textMessageStyle: StylePropsWithMessageType<TextStyle>;
};

const defaultConfig: defaultConfigType = {
  duration: 2000,
  maxMessages: 5,
  position: ToastPosition.top,
  containerMessageStyle: {
    info: {},
    error: {},
    warning: {},
    success: {},
  },
  textMessageStyle: {
    info: {},
    error: {},
    warning: {},
    success: {},
  },
};

export type MessageState = {
  id: string;
  text: string;
  type: ToastTypes;
};

export type ToastProviderProps = {
  duration?: number;
  maxMessages?: number;
  position?: keyof typeof ToastPosition;
  containerToastStyle?: StyleProp<ViewStyle>;
  containerMessageStyle?: StylePropsWithMessageType<ViewStyle>;
  textMessageStyle?: StylePropsWithMessageType<TextStyle>;
};

type ToastContextType = {
  messages: MessageState[];
  setMessage: Dispatch<SetStateAction<MessageState[]>>;
  duration: number;
  maxMessages: number;
  position: keyof typeof ToastPosition;
  containerToastStyle: StyleProp<ViewStyle>;
  containerMessageStyle: StylePropsWithMessageType<ViewStyle>;
  textMessageStyle: StylePropsWithMessageType<TextStyle>;
};

export const ToastContext = createContext<ToastContextType>({
  messages: [],
  setMessage: () => [],
  duration: defaultConfig.duration,
  maxMessages: defaultConfig.maxMessages,
  position: defaultConfig.position,
  containerToastStyle: {},
  containerMessageStyle: defaultConfig.containerMessageStyle,
  textMessageStyle: {},
});

const ToastProvider: FC<ToastProviderProps> = ({
  children,
  duration,
  maxMessages,
  position,
  containerToastStyle,
  containerMessageStyle,
  textMessageStyle,
}) => {
  const {
    duration: defaultDuration,
    maxMessages: defaultMaxMessages,
    position: defaultPosition,
    containerMessageStyle: defaultContainerMessageStyle,
    textMessageStyle: defaultTextMessageStyle,
  } = defaultConfig;

  const [messages, setMessage] = useState<MessageState[]>([]);

  return (
    <ToastContext.Provider
      value={{
        messages,
        setMessage,
        duration: duration ?? defaultDuration,
        maxMessages: maxMessages ?? defaultMaxMessages,
        position: ToastPosition[position ?? defaultPosition] ?? defaultPosition,
        containerToastStyle,
        containerMessageStyle: StyleSheet.flatten([
          defaultContainerMessageStyle,
          containerMessageStyle as object,
        ]),
        textMessageStyle: StyleSheet.flatten([
          defaultTextMessageStyle,
          textMessageStyle as object,
        ]),
      }}
    >
      <Toast messages={messages} setMessage={setMessage} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
