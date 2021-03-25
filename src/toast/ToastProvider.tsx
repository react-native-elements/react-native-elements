import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';

import type { Dispatch, SetStateAction } from 'react';
import type { StyleProp, TextStyle, ViewStyle, TextProps } from 'react-native';
import type { DefaultConfigType } from './config';
import type { RneFunctionComponent } from '../helpers';

import defaultConfig from './config';
import Toast from './Toast';
import { withTheme } from '../config';

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
  textMessageProps?: TextProps;
};

type ToastContextType = {
  messages: MessageState[];
  setMessage: Dispatch<SetStateAction<MessageState[]>>;
} & DefaultConfigType;

export const ToastContext = createContext<ToastContextType>({
  messages: [],
  setMessage: () => [],
  duration: defaultConfig.duration,
  maxMessages: defaultConfig.maxMessages,
  position: defaultConfig.position,
  containerToastStyle: defaultConfig.containerToastStyle,
  containerMessageStyle: defaultConfig.containerMessageStyle,
  textMessageStyle: defaultConfig.textMessageStyle,
  textMessageProps: defaultConfig.textMessageProps,
});

const ToastProvider: RneFunctionComponent<ToastProviderProps> = ({
  children,
  duration,
  maxMessages,
  position,
  containerToastStyle,
  containerMessageStyle,
  textMessageStyle,
  textMessageProps,
}) => {
  const {
    duration: defaultDuration,
    maxMessages: defaultMaxMessages,
    position: defaultPosition,
    containerToastStyle: defaultContainerToastStyle,
    containerMessageStyle: defaultContainerMessageStyle,
    textMessageStyle: defaultTextMessageStyle,
    textMessageProps: defaultTextMessageProps,
  } = defaultConfig;

  const [messages, setMessage] = useState<MessageState[]>([]);

  return (
    <ToastContext.Provider
      key={'toast-context-test'}
      value={{
        messages,
        setMessage,
        duration: duration ?? defaultDuration,
        maxMessages: maxMessages ?? defaultMaxMessages,
        position: ToastPosition[position ?? defaultPosition] ?? defaultPosition,
        containerToastStyle: StyleSheet.flatten([
          defaultContainerToastStyle,
          containerToastStyle,
        ]),
        containerMessageStyle: StyleSheet.flatten([
          defaultContainerMessageStyle,
          containerMessageStyle as object,
        ]),
        textMessageStyle: StyleSheet.flatten([
          defaultTextMessageStyle,
          textMessageStyle as object,
        ]),
        textMessageProps: {
          ...defaultTextMessageProps,
          ...textMessageProps,
        },
      }}
    >
      <Toast messages={messages} setMessage={setMessage} />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider };

export default withTheme<ToastProviderProps>(ToastProvider, 'ToastProvider');
