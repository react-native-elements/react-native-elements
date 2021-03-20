import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import Toast from './Toast';
export var ToastTypes;
(function (ToastTypes) {
    ToastTypes["info"] = "info";
    ToastTypes["success"] = "success";
    ToastTypes["warning"] = "warning";
    ToastTypes["error"] = "error";
})(ToastTypes || (ToastTypes = {}));
export var ToastPosition;
(function (ToastPosition) {
    ToastPosition["bottom"] = "bottom";
    ToastPosition["top"] = "top";
})(ToastPosition || (ToastPosition = {}));
const defaultConfig = {
    duration: 2000,
    maxMessages: 5,
    position: ToastPosition.top,
    containerMessageStyle: {
        info: {
            backgroundColor: '#42768c',
        },
        error: {
            backgroundColor: 'red',
        },
        warning: {
            backgroundColor: 'orange',
        },
        success: {
            backgroundColor: 'green',
        },
    },
};
export const ToastContext = createContext({
    messages: [],
    setMessage: () => [],
    duration: defaultConfig.duration,
    maxMessages: defaultConfig.maxMessages,
    position: defaultConfig.position,
    containerToastStyle: {},
    containerMessageStyle: defaultConfig.containerMessageStyle,
    messageTextStyle: {},
});
const ToastProvider = ({ children, duration, maxMessages, position, containerToastStyle, containerMessageStyle, messageTextStyle, }) => {
    var _a;
    const { duration: defaultDuration, maxMessages: defaultMaxMessages, position: defaultPosition, containerMessageStyle: defaultContainerMessageStyle, } = defaultConfig;
    const [messages, setMessage] = useState([]);
    return (<ToastContext.Provider value={{
        messages,
        setMessage,
        duration: duration !== null && duration !== void 0 ? duration : defaultDuration,
        maxMessages: maxMessages !== null && maxMessages !== void 0 ? maxMessages : defaultMaxMessages,
        position: (_a = ToastPosition[position !== null && position !== void 0 ? position : defaultPosition]) !== null && _a !== void 0 ? _a : defaultPosition,
        containerToastStyle,
        containerMessageStyle: StyleSheet.flatten([
            defaultContainerMessageStyle,
            containerMessageStyle,
        ]),
        messageTextStyle,
    }}>
      <Toast messages={messages} setMessage={setMessage}/>
      {children}
    </ToastContext.Provider>);
};
export default ToastProvider;
