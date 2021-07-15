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
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
const config_1 = require("../config");
const Icon_1 = __importDefault(require("../Icon"));
const renderText = (content, defaultProps, style) => helpers_1.renderNode(react_native_1.Text, content, Object.assign(Object.assign({}, defaultProps), { style: react_native_1.StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
class Input extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.shakeAnimationValue = new react_native_1.Animated.Value(0);
        this.shake = () => {
            const { shakeAnimationValue } = this;
            shakeAnimationValue.setValue(0);
            // Animation duration based on Material Design
            // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
            react_native_1.Animated.timing(shakeAnimationValue, {
                duration: 375,
                toValue: 3,
                easing: react_native_1.Easing.bounce,
                useNativeDriver: true,
            }).start();
        };
    }
    focus() {
        this.input.focus();
    }
    blur() {
        this.input.blur();
    }
    clear() {
        this.input.clear();
    }
    isFocused() {
        return this.input.isFocused();
    }
    setNativeProps(nativeProps) {
        this.input.setNativeProps(nativeProps);
    }
    render() {
        var _a, _b, _c, _d, _e;
        const _f = this.props, { containerStyle, disabled, disabledInputStyle, inputContainerStyle, leftIcon, leftIconContainerStyle, rightIcon, rightIconContainerStyle, InputComponent = react_native_1.TextInput, inputStyle, errorProps, errorStyle, errorMessage, label, labelStyle, labelProps, theme, renderErrorMessage = true, style } = _f, attributes = __rest(_f, ["containerStyle", "disabled", "disabledInputStyle", "inputContainerStyle", "leftIcon", "leftIconContainerStyle", "rightIcon", "rightIconContainerStyle", "InputComponent", "inputStyle", "errorProps", "errorStyle", "errorMessage", "label", "labelStyle", "labelProps", "theme", "renderErrorMessage", "style"]);
        const translateX = this.shakeAnimationValue.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            outputRange: [0, -15, 0, 15, 0, -15, 0],
        });
        const hideErrorMessage = !renderErrorMessage && !errorMessage;
        return (<react_native_1.View style={react_native_1.StyleSheet.flatten([styles.container, containerStyle])}>
        {renderText(label, Object.assign({ style: labelStyle }, labelProps), Object.assign({ fontSize: 16, color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 }, react_native_1.Platform.select({
            android: Object.assign({}, config_1.fonts.android.bold),
            default: {
                fontWeight: 'bold',
            },
        })))}

        <react_native_1.Animated.View style={react_native_1.StyleSheet.flatten([
            {
                flexDirection: 'row',
                borderBottomWidth: 1,
                alignItems: 'center',
                borderColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey3,
            },
            inputContainerStyle,
            { transform: [{ translateX }] },
        ])}>
          {leftIcon && (<react_native_1.View style={react_native_1.StyleSheet.flatten([
            styles.iconContainer,
            leftIconContainerStyle,
        ])}>
              {helpers_1.renderNode(Icon_1.default, leftIcon)}
            </react_native_1.View>)}

          <InputComponent testID="RNE__Input__text-input" underlineColorAndroid="transparent" editable={!disabled} ref={(ref) => {
            this.input = ref;
        }} style={react_native_1.StyleSheet.flatten([
            {
                color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.black,
                fontSize: 18,
                flex: 1,
                minHeight: 40,
            },
            inputStyle,
            disabled && styles.disabledInput,
            disabled && disabledInputStyle,
            style,
        ])} placeholderTextColor={(_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey3} {...helpers_1.patchWebProps(attributes)}/>

          {rightIcon && (<react_native_1.View style={react_native_1.StyleSheet.flatten([
            styles.iconContainer,
            rightIconContainerStyle,
        ])}>
              {helpers_1.renderNode(Icon_1.default, rightIcon)}
            </react_native_1.View>)}
        </react_native_1.Animated.View>

        <react_native_1.Text {...errorProps} style={react_native_1.StyleSheet.flatten([
            {
                margin: 5,
                fontSize: 12,
                color: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.error,
            },
            errorStyle && errorStyle,
            hideErrorMessage && {
                height: 0,
                margin: 0,
                padding: 0,
            },
        ])}>
          {errorMessage}
        </react_native_1.Text>
      </react_native_1.View>);
    }
}
exports.Input = Input;
Input.displayName = 'Input';
const styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    disabledInput: {
        opacity: 0.5,
    },
    iconContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 4,
        marginVertical: 4,
    },
});
