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
import { View, StyleSheet } from 'react-native';
import { withTheme } from '../config';
const Divider = (_a) => {
    var { style, theme } = _a, rest = __rest(_a, ["style", "theme"]);
    return (<View style={StyleSheet.flatten([
        {
            backgroundColor: theme.colors.divider,
            height: StyleSheet.hairlineWidth,
        },
        style,
    ])} {...rest}/>);
};
export { Divider };
export default withTheme(Divider, 'Divider');
