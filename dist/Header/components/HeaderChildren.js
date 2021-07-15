"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Children = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../../helpers");
const Icon_1 = __importDefault(require("../../Icon"));
const ALIGN_STYLE = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
};
const Children = ({ style, placement, children, }) => (<react_native_1.View style={react_native_1.StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}>
    {children == null || children === false
    ? null
    : children.text
        ? helpers_1.renderNode(react_native_1.Text, children.text, Object.assign({ numberOfLines: 1 }, children))
        : children.icon
            ? helpers_1.renderNode(Icon_1.default, Object.assign(Object.assign({}, children), { name: children.icon, containerStyle: react_native_1.StyleSheet.flatten([
                    { alignItems: ALIGN_STYLE[placement] },
                    children.containerStyle,
                ]) }))
            : helpers_1.renderNode(react_native_1.Text, children)}
  </react_native_1.View>);
exports.Children = Children;
