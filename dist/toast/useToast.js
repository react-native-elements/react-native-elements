import { useContext } from 'react';
import { ToastContext, ToastTypes } from './ToastProvider';
import { uuidGenerator } from '../helpers';
const useToast = () => {
    const { setMessage, maxMessages } = useContext(ToastContext);
    const showMessage = (text, type) => {
        var _a;
        if ((text === null || text === void 0 ? void 0 : text.trim()) === '') {
            return;
        }
        const readyMessage = {
            id: uuidGenerator(),
            text: text.trim(),
            type: type ? (_a = ToastTypes[type]) !== null && _a !== void 0 ? _a : ToastTypes.info : ToastTypes.info,
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
