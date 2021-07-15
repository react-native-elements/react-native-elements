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
exports.ListItemCheckBox = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CheckBox_1 = __importDefault(require("../CheckBox"));
/** This allows adding CheckBox to the ListItem.
 * This, Receives all [CheckBox](checkbox.md#props) props. */
const ListItemCheckBox = (_a) => {
    var { containerStyle } = _a, props = __rest(_a, ["containerStyle"]);
    return (<CheckBox_1.default {...props} containerStyle={react_native_1.StyleSheet.flatten([styles.container, containerStyle])}/>);
};
exports.ListItemCheckBox = ListItemCheckBox;
const styles = react_native_1.StyleSheet.create({
    container: {
        margin: 0,
        marginRight: 0,
        marginLeft: 0,
        padding: 0,
    },
});
exports.ListItemCheckBox.displayName = 'ListItem.CheckBox';
