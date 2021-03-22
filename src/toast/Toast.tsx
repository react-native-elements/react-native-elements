import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import { ToastContext, ToastPosition } from './ToastProvider';
import Message from './Message';

import type { VFC, Dispatch, SetStateAction } from 'react';
import type { MessageState } from './ToastProvider';

type ToastProps = {
  messages: MessageState[];
  setMessage: Dispatch<SetStateAction<MessageState[]>>;
};

const Toast: VFC<ToastProps> = ({ messages, setMessage }) => {
  if (!messages || !Array.isArray(messages)) {
    throw new Error(
      'Messages is a required prop type of array of MessageState!'
    );
  }

  if (!setMessage || typeof setMessage !== 'function') {
    throw new Error('setMessages is a required prop type of function!');
  }
  const insets = useContext(SafeAreaInsetsContext);
  const { position, containerToastStyle } = useContext(ToastContext);

  const onHideHandler = (id: string): void => {
    setMessage((prevMessages) =>
      prevMessages.filter((currentMessage) => currentMessage.id !== id)
    );
  };

  return (
    <View
      testID={'toast-container-test'}
      style={StyleSheet.flatten([
        {
          top: position === ToastPosition.top ? insets?.top ?? 0 : undefined,
          bottom:
            position === ToastPosition.bottom ? insets?.bottom ?? 0 : undefined,
        },
        containerToastStyle,
      ])}
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          onHide={() => onHideHandler(message.id)}
        />
      ))}
    </View>
  );
};

export default Toast;
