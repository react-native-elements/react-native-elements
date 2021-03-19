import { useContext } from 'react';
import { ToastContext } from './ToastProvider';
export const useToast = () => {
    const { setMessage } = useContext(ToastContext);
    const showMessage = (message) => {
        setMessage((messages) => [...messages, message]);
    };
    return {
        showMessage,
    };
};
