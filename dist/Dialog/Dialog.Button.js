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
exports.DialogButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("../Button"));
/** This is used to add a button to the Dialog.
 * Receives all [Button](button.md#props) props. */
const DialogButton = (_a) => {
    var { titleStyle } = _a, rest = __rest(_a, ["titleStyle"]);
    return (<Button_1.default style={{ marginLeft: 5 }} titleStyle={react_native_1.StyleSheet.flatten([styles.buttonTitle, titleStyle])} containerStyle={{
        width: 'auto',
    }} testID="Dialog__Button" {...rest}/>);
};
exports.DialogButton = DialogButton;
exports.DialogButton.defaultProps = {
    title: 'ACTION',
    type: 'clear',
};
const styles = react_native_1.StyleSheet.create({
    buttonTitle: {
        fontSize: 15,
        fontWeight: '500',
    },
});
exports.DialogButton.displayName = 'Dialog.Button';
