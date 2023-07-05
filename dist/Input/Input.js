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
import React from 'react';
import { Text, View, TextInput, Animated, Easing, Platform, StyleSheet, } from 'react-native';
import { renderNode, patchWebProps, defaultTheme } from '../helpers';
import { fonts } from '../helpers';
import { Icon } from '../Icon';
const renderText = (content, defaultProps, style) => renderNode(Text, content, Object.assign(Object.assign({}, defaultProps), { style: StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
export class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.shakeAnimationValue = new Animated.Value(0);
        this.shake = () => {
            const { shakeAnimationValue } = this;
            shakeAnimationValue.setValue(0);
            Animated.timing(shakeAnimationValue, {
                duration: 375,
                toValue: 3,
                easing: Easing.bounce,
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
        const _f = this.props, { containerStyle, disabled, disabledInputStyle, inputContainerStyle, leftIcon, leftIconContainerStyle, rightIcon, rightIconContainerStyle, InputComponent = TextInput, inputStyle, ErrorComponent = Text, errorProps, errorStyle, errorMessage, label, labelStyle, labelProps, theme = defaultTheme, renderErrorMessage = true, style } = _f, attributes = __rest(_f, ["containerStyle", "disabled", "disabledInputStyle", "inputContainerStyle", "leftIcon", "leftIconContainerStyle", "rightIcon", "rightIconContainerStyle", "InputComponent", "inputStyle", "ErrorComponent", "errorProps", "errorStyle", "errorMessage", "label", "labelStyle", "labelProps", "theme", "renderErrorMessage", "style"]);
        const translateX = this.shakeAnimationValue.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            outputRange: [0, -15, 0, 15, 0, -15, 0],
        });
        const hideErrorMessage = !renderErrorMessage && !errorMessage;
        return (React.createElement(View, { testID: "RNE__Input__view-wrapper", style: StyleSheet.flatten([styles.container, containerStyle]) },
            renderText(label, Object.assign({ style: labelStyle }, labelProps), Object.assign({ fontSize: 16, color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 }, Platform.select({
                android: Object.assign({}, fonts.android.bold),
                default: {
                    fontWeight: 'bold',
                },
            }))),
            React.createElement(Animated.View, { style: StyleSheet.flatten([
                    {
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        borderColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey3,
                    },
                    inputContainerStyle,
                    { transform: [{ translateX }] },
                ]) },
                leftIcon && (React.createElement(View, { style: StyleSheet.flatten([
                        styles.iconContainer,
                        leftIconContainerStyle,
                    ]) }, renderNode(Icon, leftIcon))),
                React.createElement(InputComponent, Object.assign({ testID: "RNE__Input__text-input", underlineColorAndroid: "transparent", editable: !disabled, ref: (ref) => {
                        this.input = ref;
                    }, style: StyleSheet.flatten([
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
                    ]), placeholderTextColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey3 }, patchWebProps(attributes))),
                rightIcon && (React.createElement(View, { style: StyleSheet.flatten([
                        styles.iconContainer,
                        rightIconContainerStyle,
                    ]) }, renderNode(Icon, rightIcon)))),
            React.createElement(ErrorComponent, Object.assign({}, errorProps, { style: StyleSheet.flatten([
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
                ]) }), errorMessage)));
    }
}
Input.displayName = 'Input';
const styles = StyleSheet.create({
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
