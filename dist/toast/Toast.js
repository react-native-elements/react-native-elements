import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { ToastContext, ToastPosition } from './ToastProvider';
import Message from './Message';
const Toast = ({ messages, setMessage }) => {
    var _a, _b;
    if (!messages || !Array.isArray(messages)) {
        throw new Error('Messages is a required prop type of array of MessageState!');
    }
    if (!setMessage || typeof setMessage !== 'function') {
        throw new Error('setMessages is a required prop type of function!');
    }
    const insets = useContext(SafeAreaInsetsContext);
    const { position, containerToastStyle } = useContext(ToastContext);
    const onHideHandler = (id) => {
        setMessage((prevMessages) => prevMessages.filter((currentMessage) => currentMessage.id !== id));
    };
    return (<View testID={'toast-container-test'} style={StyleSheet.flatten([
        {
            top: position === ToastPosition.top ? (_a = insets === null || insets === void 0 ? void 0 : insets.top) !== null && _a !== void 0 ? _a : 0 : undefined,
            bottom: position === ToastPosition.bottom ? (_b = insets === null || insets === void 0 ? void 0 : insets.bottom) !== null && _b !== void 0 ? _b : 0 : undefined,
        },
        containerToastStyle,
    ])}>
      {messages.map((message) => (<Message key={message.id} message={message} onHide={() => onHideHandler(message.id)}/>))}
    </View>);
};
export default Toast;
