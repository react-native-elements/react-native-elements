import React, { createContext, useState } from 'react';
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
};
export const ToastContext = createContext({
    messages: [],
    setMessage: () => [],
    duration: defaultConfig.duration,
    maxMessages: defaultConfig.maxMessages,
    position: defaultConfig.position,
});
const ToastProvider = ({ children, duration, maxMessages, position, }) => {
    var _a;
    const { duration: defaultDuration, maxMessages: defaultMaxMessages, position: defaultPosition, } = defaultConfig;
    const [messages, setMessage] = useState([]);
    return (<ToastContext.Provider value={{
        messages,
        setMessage,
        duration: duration !== null && duration !== void 0 ? duration : defaultDuration,
        maxMessages: maxMessages !== null && maxMessages !== void 0 ? maxMessages : defaultMaxMessages,
        position: (_a = ToastPosition[position !== null && position !== void 0 ? position : defaultPosition]) !== null && _a !== void 0 ? _a : defaultPosition,
    }}>
      <Toast messages={messages} setMessage={setMessage}/>
      {children}
    </ToastContext.Provider>);
};
export default ToastProvider;
