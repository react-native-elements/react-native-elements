import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ToastContext } from './ToastProvider';
import Message from './Message';
const Toast = ({ messages, setMessage }) => {
    const { position } = useContext(ToastContext);
    const onHideHandler = (id) => {
        setMessage((prevMessages) => prevMessages.filter((currentMessage) => currentMessage.id !== id));
    };
    return (<View style={Object.assign({ top: position === 'top' ? 0 : undefined, bottom: position === 'bottom' ? 0 : undefined }, styles.toast)}>
      {messages.map((message) => (<Message key={message.id} message={message} onHide={() => onHideHandler(message.id)}/>))}
    </View>);
};
const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 99999,
    },
});
export default Toast;
