import type { VFC, Dispatch, SetStateAction } from 'react';
import type { MessageState } from './ToastProvider';
declare type ToastProps = {
    messages: MessageState[];
    setMessage: Dispatch<SetStateAction<MessageState[]>>;
};
declare const Toast: VFC<ToastProps>;
export default Toast;
