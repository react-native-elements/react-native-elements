import type { Dispatch, SetStateAction } from 'react';
import type { MessageState } from './ToastProvider';
import type { RneFunctionComponent } from '../helpers';
declare type ToastProps = {
    messages: MessageState[];
    setMessage: Dispatch<SetStateAction<MessageState[]>>;
};
declare const Toast: RneFunctionComponent<ToastProps>;
export default Toast;
