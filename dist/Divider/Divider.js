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
var _a, _b;
import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import Theme from '../config/theme';
/**  Dividers are visual separators of content.
 * Use Divider when you want to make a distinction between sections of content.
 * Our divider offers adding inset, color, orientation and subHeader to the component using props.
 * Also receives all [View](https://reactnative.dev/docs/view#props) props. */
export const Divider = (_a) => {
    var { color, inset = false, insetType = 'left', orientation = 'horizontal', style, subHeader, subHeaderStyle, theme, width } = _a, rest = __rest(_a, ["color", "inset", "insetType", "orientation", "style", "subHeader", "subHeaderStyle", "theme", "width"]);
    return (<>
    <View testID="RNE__Divider" style={StyleSheet.flatten([
            styles.divider,
            style,
            inset &&
                (insetType === 'left'
                    ? styles.leftInset
                    : insetType === 'right'
                        ? styles.rightInset
                        : Object.assign(Object.assign({}, styles.leftInset), styles.rightInset)),
            orientation === 'vertical' && styles.vertical,
            width &&
                (orientation === 'horizontal'
                    ? { borderBottomWidth: width }
                    : { borderRightWidth: width }),
            color &&
                (orientation === 'horizontal'
                    ? { borderBottomColor: color }
                    : { borderRightColor: color }),
        ])} {...rest}/>
    {subHeader && orientation === 'horizontal' ? (<Text style={StyleSheet.flatten([
                styles.subHeader,
                subHeaderStyle,
                inset && styles.leftInset,
            ])}>
        {subHeader}
      </Text>) : null}
  </>);
};
const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: (_a = Theme === null || Theme === void 0 ? void 0 : Theme.colors) === null || _a === void 0 ? void 0 : _a.divider,
    },
    leftInset: {
        marginLeft: 72,
    },
    rightInset: {
        marginRight: 72,
    },
    vertical: {
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: (_b = Theme === null || Theme === void 0 ? void 0 : Theme.colors) === null || _b === void 0 ? void 0 : _b.divider,
        height: 'auto',
        alignSelf: 'stretch',
    },
    subHeader: {
        includeFontPadding: false,
    },
});
Divider.displayName = 'Divider';
