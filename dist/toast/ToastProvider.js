import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import defaultConfig from './config';
import Toast from './Toast';
import { withTheme } from '../config';
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
export const ToastContext = createContext({
    messages: [],
    setMessage: () => [],
    duration: defaultConfig.duration,
    maxMessages: defaultConfig.maxMessages,
    position: defaultConfig.position,
    containerToastStyle: defaultConfig.containerToastStyle,
    containerMessageStyle: defaultConfig.containerMessageStyle,
    textMessageStyle: defaultConfig.textMessageStyle,
    textMessageProps: defaultConfig.textMessageProps,
});
const ToastProvider = ({ children, duration, maxMessages, position, containerToastStyle, containerMessageStyle, textMessageStyle, textMessageProps, }) => {
    var _a;
    const { duration: defaultDuration, maxMessages: defaultMaxMessages, position: defaultPosition, containerToastStyle: defaultContainerToastStyle, containerMessageStyle: defaultContainerMessageStyle, textMessageStyle: defaultTextMessageStyle, textMessageProps: defaultTextMessageProps, } = defaultConfig;
    const [messages, setMessage] = useState([]);
    return (<ToastContext.Provider key={'toast-context-test'} value={{
        messages,
        setMessage,
        duration: duration !== null && duration !== void 0 ? duration : defaultDuration,
        maxMessages: maxMessages !== null && maxMessages !== void 0 ? maxMessages : defaultMaxMessages,
        position: (_a = ToastPosition[position !== null && position !== void 0 ? position : defaultPosition]) !== null && _a !== void 0 ? _a : defaultPosition,
        containerToastStyle: StyleSheet.flatten([
            defaultContainerToastStyle,
            containerToastStyle,
        ]),
        containerMessageStyle: StyleSheet.flatten([
            defaultContainerMessageStyle,
            containerMessageStyle,
        ]),
        textMessageStyle: StyleSheet.flatten([
            defaultTextMessageStyle,
            textMessageStyle,
        ]),
        textMessageProps: Object.assign(Object.assign({}, defaultTextMessageProps), textMessageProps),
    }}>
      <Toast messages={messages} setMessage={setMessage}/>
      {children}
    </ToastContext.Provider>);
};
export { ToastProvider };
export default withTheme(ToastProvider, 'ToastProvider');
