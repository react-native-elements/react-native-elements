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
import Color from 'color';
import React from 'react';
import { View, Platform, StyleSheet, Pressable, } from 'react-native';
import { normalizeText, color, androidRipple, defaultTheme, } from '../helpers';
import { Text } from '../Text';
export const ButtonGroup = (_a) => {
    var _b, _c;
    var { Component = Pressable, pressableProps, buttons, onPress = () => null, onLongPress, onPressIn, onPressOut, selectedIndex = null, selectedIndexes = [], selectMultiple = false, containerStyle, innerBorderStyle, buttonStyle, buttonContainerStyle, textStyle, selectedTextStyle, selectedButtonStyle, activeOpacity, onHideUnderlay, onShowUnderlay, setOpacityTo, disabled = false, disabledStyle, disabledTextStyle, disabledSelectedStyle, disabledSelectedTextStyle, vertical = false, theme = defaultTheme, underlayColor = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary } = _a, rest = __rest(_a, ["Component", "pressableProps", "buttons", "onPress", "onLongPress", "onPressIn", "onPressOut", "selectedIndex", "selectedIndexes", "selectMultiple", "containerStyle", "innerBorderStyle", "buttonStyle", "buttonContainerStyle", "textStyle", "selectedTextStyle", "selectedButtonStyle", "activeOpacity", "onHideUnderlay", "onShowUnderlay", "setOpacityTo", "disabled", "disabledStyle", "disabledTextStyle", "disabledSelectedStyle", "disabledSelectedTextStyle", "vertical", "theme", "underlayColor"]);
    let innerBorderWidth = (_c = innerBorderStyle === null || innerBorderStyle === void 0 ? void 0 : innerBorderStyle.width) !== null && _c !== void 0 ? _c : 1;
    return (React.createElement(View, Object.assign({ testID: "RNE__ButtonGroupContainer" }, rest, { style: StyleSheet.flatten([
            styles.container,
            vertical && styles.verticalContainer,
            containerStyle && containerStyle,
        ]) }), buttons === null || buttons === void 0 ? void 0 : buttons.map((button, i) => {
        var _a, _b, _c, _d, _e, _f;
        const isSelected = selectedIndex === i || selectedIndexes.includes(i);
        const isDisabled = disabled === true ||
            (Array.isArray(disabled) && disabled.includes(i));
        return (React.createElement(View, { key: i, style: StyleSheet.flatten([
                !vertical && styles.button,
                vertical && styles.verticalComponent,
                i !== buttons.length - 1 &&
                    (vertical
                        ? {
                            borderBottomWidth: innerBorderWidth,
                            borderBottomColor: (innerBorderStyle && innerBorderStyle.color) ||
                                ((_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey4),
                        }
                        : {
                            borderRightWidth: innerBorderWidth,
                            borderRightColor: (innerBorderStyle && innerBorderStyle.color) ||
                                ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey4),
                        }),
                buttonContainerStyle,
            ]) },
            React.createElement(Component, Object.assign({ testID: "RNE__ButtonGroupItem", accessibilityState: {
                    disabled: isDisabled,
                }, activeOpacity: activeOpacity, setOpacityTo: setOpacityTo, onHideUnderlay: onHideUnderlay, onShowUnderlay: onShowUnderlay, disabled: isDisabled, onPress: () => {
                    if (selectMultiple) {
                        if (selectedIndexes.includes(i)) {
                            onPress(selectedIndexes.filter((index) => index !== i));
                        }
                        else {
                            onPress([...selectedIndexes, i]);
                        }
                    }
                    else {
                        onPress(i);
                    }
                }, style: styles.button }, Object.assign({ android_ripple: androidRipple(Color(underlayColor).alpha(activeOpacity).rgb().toString()), onPressIn,
                onPressOut,
                onLongPress }, pressableProps)),
                React.createElement(View, { style: StyleSheet.flatten([
                        styles.textContainer,
                        buttonStyle && buttonStyle,
                        isSelected && {
                            backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
                        },
                        isSelected && selectedButtonStyle && selectedButtonStyle,
                        isDisabled && styles.disabled,
                        isDisabled && disabledStyle,
                        isDisabled &&
                            isSelected && {
                            backgroundColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.disabled,
                        },
                        isDisabled && isSelected && disabledSelectedStyle,
                    ]) }, hasElementKey(button) ? (React.createElement(button.element, { isSelected: isSelected })) : (React.createElement(Text, { testID: "buttonGroupItemText", style: StyleSheet.flatten([
                        Object.assign({ fontSize: normalizeText(13), color: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.grey2 }, Platform.select({
                            android: {},
                            default: {
                                fontWeight: '500',
                            },
                        })),
                        textStyle && textStyle,
                        isSelected && { color: '#fff' },
                        isSelected && selectedTextStyle,
                        isDisabled && {
                            color: color((_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.disabled)
                                .darken(0.3)
                                .toString(),
                        },
                        isDisabled && disabledTextStyle,
                        isDisabled && isSelected && disabledSelectedTextStyle,
                    ]) }, button))))));
    })));
};
const styles = StyleSheet.create({
    button: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: 40,
    },
    verticalContainer: {
        flexDirection: 'column',
        height: null,
    },
    verticalComponent: {
        height: 40,
    },
    disabled: {
        backgroundColor: 'transparent',
    },
});
ButtonGroup.displayName = 'ButtonGroup';
const hasElementKey = (button) => {
    return (typeof button === 'object' && Boolean(button.element));
};
