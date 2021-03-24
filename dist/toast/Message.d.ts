import type { VFC } from 'react';
import type { MessageState } from './ToastProvider';
declare type MessageProps = {
    message: MessageState;
    onHide: () => void;
};
declare const Message: VFC<MessageProps>;
export default Message;
