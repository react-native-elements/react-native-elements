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
import { View, TouchableNativeFeedback, TouchableOpacity, Platform, StyleSheet, } from 'react-native';
import { withTheme } from '../config';
import { normalizeText, color } from '../helpers';
import Text from '../text/Text';
const ButtonGroup = (props) => {
    var _a;
    const { theme } = props, rest = __rest(props, ["theme"]);
    const { Component = Platform.select({
        android: TouchableNativeFeedback,
        default: TouchableOpacity,
    }), buttons, onPress = () => null, selectedIndex = null, selectedIndexes = [], selectMultiple = false, containerStyle, innerBorderStyle, buttonStyle, buttonContainerStyle, textStyle, selectedTextStyle, selectedButtonStyle, underlayColor = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary, activeOpacity, onHideUnderlay, onShowUnderlay, setOpacityTo, disabled = false, disabledStyle, disabledTextStyle, disabledSelectedStyle, disabledSelectedTextStyle, vertical = false } = rest, attributes = __rest(rest, ["Component", "buttons", "onPress", "selectedIndex", "selectedIndexes", "selectMultiple", "containerStyle", "innerBorderStyle", "buttonStyle", "buttonContainerStyle", "textStyle", "selectedTextStyle", "selectedButtonStyle", "underlayColor", "activeOpacity", "onHideUnderlay", "onShowUnderlay", "setOpacityTo", "disabled", "disabledStyle", "disabledTextStyle", "disabledSelectedStyle", "disabledSelectedTextStyle", "vertical"]);
    let innerBorderWidth = 1;
    if (innerBorderStyle &&
        Object.prototype.hasOwnProperty.call(innerBorderStyle, 'width')) {
        innerBorderWidth = innerBorderStyle.width;
    }
    return (<View {...attributes} style={StyleSheet.flatten([
        styles.container,
        vertical && styles.verticalContainer,
        containerStyle && containerStyle,
    ])}>
      {buttons === null || buttons === void 0 ? void 0 : buttons.map((button, i) => {
        var _a, _b, _c, _d, _e, _f;
        const isSelected = selectedIndex === i || selectedIndexes.includes(i);
        const isDisabled = disabled === true ||
            (Array.isArray(disabled) && disabled.includes(i));
        return (<View key={i} style={StyleSheet.flatten([
            styles.button,
            vertical && styles.verticalComponent,
            i !== buttons.length - 1 &&
                (vertical
                    ? {
                        borderBottomWidth: innerBorderWidth,
                        borderBottomColor: (innerBorderStyle && innerBorderStyle.color) || ((_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey4),
                    }
                    : {
                        borderRightWidth: innerBorderWidth,
                        borderRightColor: (innerBorderStyle && innerBorderStyle.color) || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey4),
                    }),
            buttonContainerStyle,
        ])}>
            <Component testID="buttonGroupItem" activeOpacity={activeOpacity} setOpacityTo={setOpacityTo} onHideUnderlay={onHideUnderlay} onShowUnderlay={onShowUnderlay} underlayColor={underlayColor} disabled={isDisabled} onPress={() => {
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
        }} style={styles.button}>
              <View style={StyleSheet.flatten([
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
        ])}>
                {button.element ? (<button.element />) : (<Text testID="buttonGroupItemText" style={StyleSheet.flatten([
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
        ])}>
                    {button}
                  </Text>)}
              </View>
            </Component>
          </View>);
    })}
    </View>);
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
export { ButtonGroup };
export default withTheme(ButtonGroup, 'ButtonGroup');
