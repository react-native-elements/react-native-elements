import React, { createContext, useState } from 'react';

import type { Dispatch, FC, SetStateAction } from 'react';

import Toast from './Toast';

export const ToastContext = createContext<{
  messages: string[];
  setMessage: Dispatch<SetStateAction<string[]>>;
}>({
  messages: [],
  setMessage: () => [],
});

const ToastProvider: FC = ({ children }) => {
  const [messages, setMessage] = useState<string[]>([]);

  return (
    <ToastContext.Provider value={{ messages, setMessage }}>
      <Toast messages={messages} setMessage={setMessage} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
