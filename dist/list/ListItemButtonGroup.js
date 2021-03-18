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
import ButtonGroup from '../buttons/ButtonGroup';
const ListItemButtonGroup = (_a) => {
    var { containerStyle } = _a, props = __rest(_a, ["containerStyle"]);
    return (<ButtonGroup {...props} containerStyle={StyleSheet.flatten([styles.container, containerStyle])}/>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
        marginVertical: 0,
    },
});
export default withTheme(ListItemButtonGroup, 'ListItemButtonGroup');
