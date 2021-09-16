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
import Button from '../Button';
import Color from 'color';
/** They are indivual item of the parent Tab.
 * They are clickable and allows users to click and change Tab.
 * Receives all [Button](https://reactnativeelements.com/docs/button#props) props. */
export const TabItem = (_a) => {
    var _b, _c;
    var { active, theme, titleStyle, containerStyle, buttonStyle, variant, iconPosition = 'top', title } = _a, rest = __rest(_a, ["active", "theme", "titleStyle", "containerStyle", "buttonStyle", "variant", "iconPosition", "title"]);
    return (<Button accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityValue={typeof title === 'string' ? { text: title } : undefined} buttonStyle={[styles.buttonStyle, buttonStyle]} titleStyle={[
            styles.titleStyle,
            {
                color: variant === 'primary' ? 'white' : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.secondary,
                paddingVertical: !rest.icon ? 8 : 2,
            },
            titleStyle,
        ]} containerStyle={[
            styles.containerStyle,
            {
                backgroundColor: active
                    ? Color((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.secondary).alpha(0.2).rgb().toString()
                    : 'transparent',
            },
            containerStyle,
        ]} iconPosition={iconPosition} title={title} {...rest}/>);
};
const styles = StyleSheet.create({
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
TabItem.displayName = 'Tab.Item';
