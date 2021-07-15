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
exports.CardDivider = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Divider_1 = __importDefault(require("../Divider"));
/** Add divider to the card which acts as a separator between elements.
 * This, Receives all [Divider](divider.md#props) props. */
const CardDivider = (_a) => {
    var { style } = _a, props = __rest(_a, ["style"]);
    return (<Divider_1.default style={react_native_1.StyleSheet.flatten([styles.divider, style])} {...props}/>);
};
exports.CardDivider = CardDivider;
const styles = react_native_1.StyleSheet.create({
    divider: {
        marginBottom: 15,
    },
});
exports.CardDivider.displayName = 'Card.Divider';
