import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { ToastContext, ToastPosition } from './ToastProvider';
import Message from './Message';
const Toast = ({ messages, setMessage }) => {
    const insets = useContext(SafeAreaInsetsContext);
    const { position } = useContext(ToastContext);
    const onHideHandler = (id) => {
        setMessage((prevMessages) => prevMessages.filter((currentMessage) => currentMessage.id !== id));
    };
    return (<View style={Object.assign({ top: position === ToastPosition.top ? insets === null || insets === void 0 ? void 0 : insets.top : undefined, bottom: position === ToastPosition.bottom ? insets === null || insets === void 0 ? void 0 : insets.bottom : undefined }, styles.toast)}>
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
