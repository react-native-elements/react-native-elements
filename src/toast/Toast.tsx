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
  const insets = useContext(SafeAreaInsetsContext);
  const { position, containerToastStyle } = useContext(ToastContext);

  const onHideHandler = (id: string): void => {
    setMessage((prevMessages) =>
      prevMessages.filter((currentMessage) => currentMessage.id !== id)
    );
  };

  return (
    <View
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
