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
import { StyleSheet } from 'react-native';
import { Button } from '../../Button';
import { defaultTheme } from '../../helpers';
import { Icon } from '../../Icon';
export const PricingButton = (_a) => {
    var { title, buttonStyle, color, titleStyle, onButtonPress, icon, theme = defaultTheme } = _a, buttonProps = __rest(_a, ["title", "buttonStyle", "color", "titleStyle", "onButtonPress", "icon", "theme"]);
    return (React.createElement(Button, Object.assign({ testID: "RNE__PricingButton", title: title, buttonStyle: StyleSheet.flatten([
            styles.button,
            buttonStyle,
            { backgroundColor: theme.colors[color] || color },
        ]), titleStyle: titleStyle, onPress: onButtonPress, icon: React.isValidElement(icon) ? (icon) : typeof icon === 'string' ? (React.createElement(Icon, { name: icon, size: 15, color: "white" })) : (React.createElement(Icon, Object.assign({}, icon))) }, buttonProps)));
};
const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginBottom: 10,
    },
});
