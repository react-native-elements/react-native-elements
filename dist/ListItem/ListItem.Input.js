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
exports.ListItemInput = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Input_1 = __importDefault(require("../Input"));
/** This allows adding an Text Input within the ListItem.
 * This, Receives all [Input](input.md#props) props. */
const ListItemInput = (_a) => {
    var { inputStyle, inputContainerStyle, containerStyle } = _a, props = __rest(_a, ["inputStyle", "inputContainerStyle", "containerStyle"]);
    return (<Input_1.default renderErrorMessage={false} {...props} inputStyle={react_native_1.StyleSheet.flatten([styles.input, inputStyle])} inputContainerStyle={react_native_1.StyleSheet.flatten([
        styles.inputContainer,
        inputContainerStyle,
    ])} containerStyle={react_native_1.StyleSheet.flatten([styles.container, containerStyle])}/>);
};
exports.ListItemInput = ListItemInput;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 0,
    },
    inputContainer: {
        flex: 1,
        borderBottomWidth: 0,
        width: null,
        height: null,
    },
    input: {
        flex: 1,
        textAlign: 'right',
        width: null,
        height: null,
    },
});
exports.ListItemInput.displayName = 'ListItem.Input';
