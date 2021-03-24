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
import { withTheme } from '../config';
import Divider from '../divider/Divider';
const CardDivider = (_a) => {
    var { style } = _a, props = __rest(_a, ["style"]);
    return (<Divider style={StyleSheet.flatten([styles.divider, style])} {...props}/>);
};
const styles = StyleSheet.create({
    divider: {
        marginBottom: 15,
    },
});
export default withTheme(CardDivider, 'CardDivider');
