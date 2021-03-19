import React from 'react';
import { View } from 'react-native';

import type { VFC, Dispatch, SetStateAction } from 'react';

import Message from './Message';

interface ToastProps {
  messages: string[];
  setMessage: Dispatch<SetStateAction<string[]>>;
}

const Toast: VFC<ToastProps> = ({ messages, setMessage }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
      }}
    >
      {messages.map((message) => (
        <Message
          key={message}
          message={message}
          onHide={() =>
            setMessage((prevMessages) =>
              prevMessages.filter(
                (currentMessage) => currentMessage !== message
              )
            )
          }
        />
      ))}
    </View>
  );
};

export default Toast;
