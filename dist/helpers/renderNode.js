var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
const renderNode = (Component, content, defaultProps = {}) => {
    const { key } = defaultProps, remainingDefaultProps = __rest(defaultProps, ["key"]);
    if (content == null || content === false) {
        return null;
    }
    if (React.isValidElement(content)) {
        return content;
    }
    if (typeof content === 'function') {
        return content();
    }
    if (content === true) {
        return React.createElement(Component, Object.assign({ key: key }, remainingDefaultProps));
    }
    if (typeof content === 'string') {
        if (content.length === 0) {
            return null;
        }
        return (React.createElement(Component, Object.assign({ key: key }, remainingDefaultProps), content));
    }
    if (typeof content === 'number') {
        return (React.createElement(Component, Object.assign({ key: key }, remainingDefaultProps), content));
    }
    return React.createElement(Component, Object.assign({ key: key }, remainingDefaultProps, content));
};
export default renderNode;
