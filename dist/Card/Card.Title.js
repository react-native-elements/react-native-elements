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
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../helpers';
import { Text } from '../Text';
import { defaultTheme } from '../helpers';
export const CardTitle = (_a) => {
    var _b;
    var { style, theme = defaultTheme } = _a, rest = __rest(_a, ["style", "theme"]);
    return (React.createElement(Text, Object.assign({ testID: "cardTitle", style: StyleSheet.flatten([
            Object.assign(Object.assign({ fontSize: normalize(14), color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey1 }, Platform.select({
                android: Object.assign({}, fonts.android.black),
                default: {
                    fontWeight: 'bold',
                },
            })), { textAlign: 'center', marginBottom: 15 }),
            style,
        ]) }, rest)));
};
CardTitle.displayName = 'Card.Title';
