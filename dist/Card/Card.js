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
import { View, Platform, StyleSheet } from 'react-native';
import { defaultTheme } from '../helpers';
export const CardBase = (_a) => {
    var _b, _c;
    var { children, containerStyle, wrapperStyle, theme = defaultTheme } = _a, rest = __rest(_a, ["children", "containerStyle", "wrapperStyle", "theme"]);
    return (React.createElement(View, Object.assign({}, rest, { style: StyleSheet.flatten([
            Object.assign({ backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.white, borderWidth: 1, padding: 15, margin: 15, marginBottom: 0, borderColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey5 }, Platform.select({
                android: {
                    elevation: 1,
                },
                default: {
                    shadowColor: 'rgba(0,0,0, .2)',
                    shadowOffset: { height: 0, width: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                },
            })),
            containerStyle && containerStyle,
        ]) }),
        React.createElement(View, { style: StyleSheet.flatten([
                styles.wrapper,
                wrapperStyle && wrapperStyle,
            ]) }, children)));
};
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
});
CardBase.displayName = 'Card';
