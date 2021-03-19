import React, { createContext, useState } from 'react';

import type { Dispatch, FC, SetStateAction } from 'react';

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

const defaultConfig = {
  duration: 2000,
  maxMessages: 5,
  position: ToastPosition.top,
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
};

type ToastContextType = {
  messages: MessageState[];
  setMessage: Dispatch<SetStateAction<MessageState[]>>;
  duration: number;
  maxMessages: number;
  position: keyof typeof ToastPosition;
};

export const ToastContext = createContext<ToastContextType>({
  messages: [],
  setMessage: () => [],
  duration: defaultConfig.duration,
  maxMessages: defaultConfig.maxMessages,
  position: defaultConfig.position,
});

const ToastProvider: FC<ToastProviderProps> = ({
  children,
  duration,
  maxMessages,
  position,
}) => {
  const {
    duration: defaultDuration,
    maxMessages: defaultMaxMessages,
    position: defaultPosition,
  } = defaultConfig;

  const [messages, setMessage] = useState<MessageState[]>([]);

  return (
    <ToastContext.Provider
      value={{
        messages,
        setMessage,
        duration: duration ?? defaultDuration,
        maxMessages: maxMessages ?? defaultMaxMessages,
        position: position ?? defaultPosition,
      }}
    >
      <Toast messages={messages} setMessage={setMessage} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
