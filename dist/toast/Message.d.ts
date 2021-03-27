import type { RneFunctionComponent } from '../helpers';
import type { MessageState } from './ToastProvider';
declare type MessageProps = {
    message: MessageState;
    onHide: () => void;
};
declare const Message: RneFunctionComponent<MessageProps>;
export default Message;
