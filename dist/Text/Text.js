"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const config_1 = require("../config");
const helpers_1 = require("../helpers");
const normalizeText_1 = __importDefault(require("../helpers/normalizeText"));
/** Text displays words and characters at various sizes. */
const Text = (_a) => {
    var _b;
    var { style = {}, h1 = false, h2 = false, h3 = false, h4 = false, h1Style = {}, h2Style = {}, h3Style = {}, h4Style = {}, children = '', theme } = _a, rest = __rest(_a, ["style", "h1", "h2", "h3", "h4", "h1Style", "h2Style", "h3Style", "h4Style", "children", "theme"]);
    return (<react_native_1.Text accessibilityRole="text" style={react_native_1.StyleSheet.flatten([
        Object.assign(Object.assign({}, react_native_1.Platform.select({
            android: Object.assign({}, config_1.fonts.android.regular),
        })), { color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black }),
        style,
        (h1 || h2 || h3 || h4) && styles.bold,
        h1 && react_native_1.StyleSheet.flatten([{ fontSize: normalizeText_1.default(40) }, h1Style]),
        h2 && react_native_1.StyleSheet.flatten([{ fontSize: normalizeText_1.default(34) }, h2Style]),
        h3 && react_native_1.StyleSheet.flatten([{ fontSize: normalizeText_1.default(28) }, h3Style]),
        h4 && react_native_1.StyleSheet.flatten([{ fontSize: normalizeText_1.default(22) }, h4Style]),
    ])} {...helpers_1.patchWebProps(rest)}>
      {children}
    </react_native_1.Text>);
};
exports.Text = Text;
const styles = react_native_1.StyleSheet.create({
    bold: Object.assign({}, react_native_1.Platform.select({
        android: Object.assign({}, config_1.fonts.android.bold),
    })),
});
exports.Text.displayName = 'Text';
