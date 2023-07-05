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
import { StyleSheet } from 'react-native';
import { Button } from '../Button';
import { defaultTheme } from '../helpers';
export const TabItem = (_a) => {
    var _b, _c;
    var { active, theme = defaultTheme, _parentProps = {}, titleStyle = _parentProps.titleStyle, containerStyle = _parentProps.containerStyle, buttonStyle = _parentProps.buttonStyle, iconPosition = _parentProps.iconPosition || 'top', dense = _parentProps.dense, iconContainerStyle, variant, title, icon } = _a, rest = __rest(_a, ["active", "theme", "_parentProps", "titleStyle", "containerStyle", "buttonStyle", "iconPosition", "dense", "iconContainerStyle", "variant", "title", "icon"]);
    const activeProp = React.useCallback((prop) => (typeof prop === 'function' ? prop(active) : prop), [active]);
    return (React.createElement(Button, Object.assign({ accessibilityRole: "tab", accessibilityState: { selected: active }, accessibilityValue: typeof title === 'string' ? { text: title } : undefined, buttonStyle: [styles.buttonStyle, activeProp(buttonStyle)], titleStyle: [
            !dense && styles.titleStyle,
            {
                color: variant === 'primary' ? 'white' : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.secondary,
                paddingVertical: !dense && !icon ? 8 : 2,
            },
            activeProp(titleStyle),
        ], containerStyle: [
            styles.containerStyle,
            variant === 'primary' && {
                backgroundColor: active
                    ? Color((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary).darken(0.05).rgb().toString()
                    : 'transparent',
            },
            activeProp(containerStyle),
        ], iconContainerStyle: activeProp(iconContainerStyle), icon: activeProp(icon), iconPosition: iconPosition, title: title }, rest)));
};
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    containerStyle: {
        flex: 1,
        borderRadius: 0,
    },
});
TabItem.displayName = 'Tab.Item';
