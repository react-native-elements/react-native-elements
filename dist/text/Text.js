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
import { Text, StyleSheet, Platform, } from 'react-native';
import { fonts, withTheme } from '../config';
import { patchWebProps } from '../helpers';
import normalize from '../helpers/normalizeText';
const TextElement = (props) => {
    var _a;
    const { style, theme, children = '', h1, h2, h3, h4, h1Style, h2Style, h3Style, h4Style } = props, rest = __rest(props, ["style", "theme", "children", "h1", "h2", "h3", "h4", "h1Style", "h2Style", "h3Style", "h4Style"]);
    return (<Text style={StyleSheet.flatten([
        Object.assign(Object.assign({}, Platform.select({
            android: Object.assign({}, fonts.android.regular),
        })), { color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.black }),
        style,
        (h1 || h2 || h3 || h4) && styles.bold,
        h1 && StyleSheet.flatten([{ fontSize: normalize(40) }, h1Style]),
        h2 && StyleSheet.flatten([{ fontSize: normalize(34) }, h2Style]),
        h3 && StyleSheet.flatten([{ fontSize: normalize(28) }, h3Style]),
        h4 && StyleSheet.flatten([{ fontSize: normalize(22) }, h4Style]),
    ])} {...patchWebProps(rest)}>
      {children}
    </Text>);
};
TextElement.defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    style: {},
    h1Style: {},
    h2Style: {},
    h3Style: {},
    h4Style: {},
};
const styles = StyleSheet.create({
    bold: Object.assign({}, Platform.select({
        android: Object.assign({}, fonts.android.bold),
    })),
});
export { TextElement };
export default withTheme(TextElement, 'Text');
