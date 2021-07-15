"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderNode = (Component, content, defaultProps = {}) => {
    if (content == null || content === false) {
        return null;
    }
    if (react_1.default.isValidElement(content)) {
        return content;
    }
    if (typeof content === 'function') {
        return content();
    }
    // Just in case
    if (content === true) {
        return <Component {...defaultProps}/>;
    }
    if (typeof content === 'string') {
        if (content.length === 0) {
            return null;
        }
        return <Component {...defaultProps}>{content}</Component>;
    }
    if (typeof content === 'number') {
        return <Component {...defaultProps}>{content}</Component>;
    }
    return <Component {...defaultProps} {...content}/>;
};
exports.default = renderNode;
