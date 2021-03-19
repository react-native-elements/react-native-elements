import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ToastContext } from './ToastProvider';

import type { VFC, Dispatch, SetStateAction } from 'react';
import type { MessageState } from './ToastProvider';

import Message from './Message';

type ToastProps = {
  messages: MessageState[];
  setMessage: Dispatch<SetStateAction<MessageState[]>>;
};

const Toast: VFC<ToastProps> = ({ messages, setMessage }) => {
  const { position } = useContext(ToastContext);
  const onHideHandler = (id: string): void => {
    setMessage((prevMessages) =>
      prevMessages.filter((currentMessage) => currentMessage.id !== id)
    );
  };

  return (
    <View
      style={{
        top: position === 'top' ? 0 : undefined,
        bottom: position === 'bottom' ? 0 : undefined,
        ...styles.toast,
      }}
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

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 99999,
  },
});

export default Toast;
