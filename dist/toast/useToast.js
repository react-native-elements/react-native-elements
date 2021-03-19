import { useContext } from 'react';
import { ToastContext } from './ToastProvider';
const useToast = () => {
    const { setMessage } = useContext(ToastContext);
    const showMessage = (message) => {
        setMessage((messages) => [...messages, message]);
    };
    return {
        showMessage,
    };
};
export default useToast;
