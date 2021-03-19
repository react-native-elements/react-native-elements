import React, { createContext, useState } from 'react';
import Toast from './Toast';
export const ToastContext = createContext({
    messages: [],
    setMessage: () => [],
});
const ToastProvider = ({ children }) => {
    const [messages, setMessage] = useState([]);
    return (<ToastContext.Provider value={{ messages, setMessage }}>
      <Toast messages={messages} setMessage={setMessage}/>
      {children}
    </ToastContext.Provider>);
};
export default ToastProvider;
