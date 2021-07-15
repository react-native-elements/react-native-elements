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
exports.TabItem = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("../Button"));
const color_1 = __importDefault(require("color"));
/** They are indivual item of the parent Tab.
 * They are clickable and allows users to click and change Tab.
 * Receives all [Button](https://reactnativeelements.com/docs/button#props) props. */
const TabItem = (_a) => {
    var _b, _c;
    var { active, theme, titleStyle, containerStyle, buttonStyle, variant, iconPosition = 'top', title } = _a, props = __rest(_a, ["active", "theme", "titleStyle", "containerStyle", "buttonStyle", "variant", "iconPosition", "title"]);
    return (<Button_1.default accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityValue={typeof title === 'string' ? { text: title } : undefined} buttonStyle={[styles.buttonStyle, buttonStyle]} titleStyle={[
        styles.titleStyle,
        {
            color: variant === 'primary' ? 'white' : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.secondary,
            paddingVertical: !props.icon ? 8 : 2,
        },
        titleStyle,
    ]} containerStyle={[
        styles.containerStyle,
        {
            backgroundColor: active
                ? color_1.default((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.secondary).alpha(0.2).rgb().toString()
                : 'transparent',
        },
        containerStyle,
    ]} iconPosition={iconPosition} title={title} {...props}/>);
};
exports.TabItem = TabItem;
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        textTransform: 'uppercase',
    },
    containerStyle: {
        flex: 1,
        borderRadius: 0,
    },
    viewStyle: {
        flexDirection: 'row',
        position: 'relative',
    },
    indicator: {
        display: 'flex',
        position: 'absolute',
        height: 2,
        bottom: 0,
    },
});
exports.TabItem.displayName = 'Tab.Item';
