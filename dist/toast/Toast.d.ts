import type { VFC, Dispatch, SetStateAction } from 'react';
interface ToastProps {
    messages: string[];
    setMessage: Dispatch<SetStateAction<string[]>>;
}
declare const Toast: VFC<ToastProps>;
export default Toast;
