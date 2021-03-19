import { useContext } from 'react';

import { ToastContext } from './ToastProvider';

interface ReturnParams {
  showMessage: (message: string) => void;
}

const useToast = (): ReturnParams => {
  const { setMessage } = useContext(ToastContext);

  const showMessage = (message: string) => {
    setMessage((messages) => [...messages, message]);
  };

  return {
    showMessage,
  };
};

export default useToast;
