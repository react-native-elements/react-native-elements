import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { ToastContext, ToastPosition } from './ToastProvider';
import Message from './Message';
const Toast = ({ messages, setMessage }) => {
    var _a, _b;
    const insets = useContext(SafeAreaInsetsContext);
    const { position, containerToastStyle } = useContext(ToastContext);
    const onHideHandler = (id) => {
        setMessage((prevMessages) => prevMessages.filter((currentMessage) => currentMessage.id !== id));
    };
    return (<View style={StyleSheet.flatten([
        {
            top: position === ToastPosition.top ? (_a = insets === null || insets === void 0 ? void 0 : insets.top) !== null && _a !== void 0 ? _a : 0 : undefined,
            bottom: position === ToastPosition.bottom ? (_b = insets === null || insets === void 0 ? void 0 : insets.bottom) !== null && _b !== void 0 ? _b : 0 : undefined,
        },
        styles.toastContainer,
        containerToastStyle,
    ])}>
      {messages.map((message) => (<Message key={message.id} message={message} onHide={() => onHideHandler(message.id)}/>))}
    </View>);
};
const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 99999,
    },
});
export default Toast;
