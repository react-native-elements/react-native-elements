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
exports.FAB = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button_1 = __importDefault(require("../Button"));
/** A floating action button (FAB) performs the primary, or most common, action on a screen.
 * It appears in front of all screen content, typically as a circular shape with an icon in its center.
 * Also receives all [Button](https://reactnativeelements.com/docs/button#props) props. */
const FAB = (_a) => {
    var _b, _c;
    var { color, size = 'large', visible = true, disabled, upperCase, theme, style, titleStyle, buttonStyle, containerStyle, iconContainerStyle, placement } = _a, props = __rest(_a, ["color", "size", "visible", "disabled", "upperCase", "theme", "style", "titleStyle", "buttonStyle", "containerStyle", "iconContainerStyle", "placement"]);
    const { current: animation } = react_1.default.useRef(new react_native_1.Animated.Value(Number(visible)));
    react_1.default.useEffect(() => {
        react_native_1.Animated.timing(animation, {
            toValue: Number(visible),
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [animation, visible]);
    return (<react_native_1.Animated.View style={[
        {
            opacity: animation,
            transform: [{ scale: animation }],
        },
        styles.content,
        placement && {
            [placement]: 0,
            position: 'absolute',
            margin: 16,
            bottom: 0,
        },
        style,
    ]}>
      <Button_1.default buttonStyle={react_native_1.StyleSheet.flatten([
        props.title
            ? styles.extendedLabel
            : size === 'small'
                ? styles.smallFAB
                : styles.largeFAB,
        {
            backgroundColor: color || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.secondary),
        },
        buttonStyle,
    ])} iconContainerStyle={[
        props.title
            ? {}
            : size === 'small'
                ? styles.smallFAB
                : styles.largeFAB,
        iconContainerStyle,
    ]} containerStyle={react_native_1.StyleSheet.flatten([
        styles.container,
        disabled && styles.disabled,
        containerStyle,
    ])} titleStyle={[
        styles.label,
        { color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.white },
        upperCase && styles.upperCaseLabel,
        titleStyle,
    ]} {...props} {...{ disabled, theme }}/>
    </react_native_1.Animated.View>);
};
exports.FAB = FAB;
const styles = react_native_1.StyleSheet.create({
    container: {
        elevation: 4,
        borderRadius: 28,
    },
    largeFAB: {
        height: 56,
        width: 56,
        padding: 16,
    },
    smallFAB: {
        height: 40,
        width: 40,
        padding: 8,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
    },
    label: {
        marginHorizontal: 8,
    },
    upperCaseLabel: {
        textTransform: 'uppercase',
    },
    extendedLabel: {
        height: 48,
        paddingHorizontal: 16,
    },
    disabled: {
        elevation: 0,
    },
});
exports.FAB.displayName = 'FAB';
