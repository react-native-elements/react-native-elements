import { StylePropsWithMessageType, ToastPosition } from './ToastProvider';

import type { StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';

export type DefaultConfigType = {
  duration: number;
  maxMessages: number;
  position: keyof typeof ToastPosition;
  containerToastStyle: StyleProp<ViewStyle>;
  containerMessageStyle: StylePropsWithMessageType<ViewStyle>;
  textMessageStyle: StylePropsWithMessageType<TextStyle>;
  textMessageProps: TextProps;
};

const defaultConfig: DefaultConfigType = {
  duration: 2000,
  maxMessages: 5,
  position: 'top',
  containerToastStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 99999,
  },
  containerMessageStyle: {
    margin: 10,
    marginBottom: 5,
    padding: 10,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
    // typed styles
    info: {},
    error: {},
    warning: {},
    success: {},
  },
  textMessageStyle: {
    fontSize: 16,
    color: '#fff',
    // typed styles
    info: {},
    error: {},
    warning: {},
    success: {},
  },
  textMessageProps: {},
};

export default defaultConfig;
