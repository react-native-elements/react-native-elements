"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Triangle = ({ style, isDown, }) => (<react_native_1.View style={react_native_1.StyleSheet.flatten([
    styles.triangle,
    style,
    isDown ? styles.down : {},
])}/>);
const styles = react_native_1.StyleSheet.create({
    down: {
        transform: [{ rotate: '180deg' }],
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
    },
});
exports.default = Triangle;
