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
exports.PricingButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("../../Button"));
const Icon_1 = __importDefault(require("../../Icon"));
const PricingButton = (props) => {
    const { title, buttonStyle, color, titleStyle, onButtonPress, icon } = props, buttonProps = __rest(props, ["title", "buttonStyle", "color", "titleStyle", "onButtonPress", "icon"]);
    return (<Button_1.default title={title} buttonStyle={react_native_1.StyleSheet.flatten([
        styles.button,
        buttonStyle,
        { backgroundColor: color },
    ])} titleStyle={titleStyle} onPress={onButtonPress} icon={react_1.default.isValidElement(icon) ? (icon) : typeof icon === 'string' ? (<Icon_1.default name={icon} size={15} color="white"/>) : (<Icon_1.default {...icon}/>)} {...buttonProps}/>);
};
exports.PricingButton = PricingButton;
const styles = react_native_1.StyleSheet.create({
    button: {
        marginTop: 15,
        marginBottom: 10,
    },
});
