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
exports.Chip = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("../Button"));
/** Chips are compact elements that represent an input, attribute, or action.
 * They may display text, icons, or both. */
const Chip = (_a) => {
    var { titleStyle, buttonStyle, onPress } = _a, rest = __rest(_a, ["titleStyle", "buttonStyle", "onPress"]);
    return (<Button_1.default titleStyle={react_native_1.StyleSheet.flatten([
        { fontSize: 14, paddingHorizontal: 2 },
        titleStyle,
    ])} buttonStyle={react_native_1.StyleSheet.flatten([{ borderRadius: 30 }, buttonStyle])} {...(onPress === undefined
        ? {
            TouchableComponent: react_native_1.TouchableWithoutFeedback,
        }
        : { onPress })} {...rest}/>);
};
exports.Chip = Chip;
exports.Chip.displayName = 'Chip';
