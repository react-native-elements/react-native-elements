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
import { StyleSheet, View } from 'react-native';
export const ListItemContent = (_a) => {
    var { style, right, children } = _a, rest = __rest(_a, ["style", "right", "children"]);
    const containerStyle = right ? styles.rightContainer : styles.container;
    return (React.createElement(View, Object.assign({ style: [containerStyle, style] }, rest), children));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
ListItemContent.displayName = 'ListItem.Content';
