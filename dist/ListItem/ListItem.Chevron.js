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
exports.ListItemChevron = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
/** This allows adding a Chevron Icon(arrow) to the ListItem.
 * This, Receives all [Icon](icon.md#props) props. */
const ListItemChevron = (_a) => {
    var { containerStyle } = _a, props = __rest(_a, ["containerStyle"]);
    return (<Icon_1.default type={react_native_1.Platform.OS === 'ios' ? 'ionicon' : 'material'} color="#D1D1D6" name={react_native_1.Platform.OS === 'ios'
        ? 'chevron-forward-outline'
        : 'keyboard-arrow-right'} size={16} containerStyle={react_native_1.StyleSheet.flatten([
        { alignSelf: 'center' },
        containerStyle,
    ])} {...props}/>);
};
exports.ListItemChevron = ListItemChevron;
exports.ListItemChevron.displayName = 'ListItem.Chevron';
