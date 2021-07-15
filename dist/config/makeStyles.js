"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStyles = exports.useTheme = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const ThemeProvider_1 = require("./ThemeProvider");
const useTheme = () => {
    return react_1.useContext(ThemeProvider_1.ThemeContext);
};
exports.useTheme = useTheme;
const makeStyles = (styles) => (props = {}) => {
    const { theme } = exports.useTheme();
    const css = typeof styles === 'function' ? styles(theme, props) : styles;
    return react_native_1.StyleSheet.create(css);
};
exports.makeStyles = makeStyles;
