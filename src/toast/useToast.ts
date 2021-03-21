import { useContext } from 'react';

import { ToastContext, ToastTypes } from './ToastProvider';
import { uuidGenerator } from '../helpers';

type ReturnParams = {
  showMessage: (text: string, type?: keyof typeof ToastTypes) => void;
};

export const useToast = (): ReturnParams => {
  const { setMessage, maxMessages } = useContext(ToastContext);

  const showMessage = (text: string, type?: keyof typeof ToastTypes) => {
    if (text?.trim() === '') {
      return;
    }

    const readyMessage = {
      id: uuidGenerator(),
      text: text.trim(),
      type: type ? ToastTypes[type] ?? ToastTypes.info : ToastTypes.info,
    };

    setMessage((prevMessages) => {
      if (prevMessages.length >= maxMessages) {
        return prevMessages;
      }
      return [...prevMessages, readyMessage];
    });
  };

  return {
    showMessage,
  };
};

export default useToast;
