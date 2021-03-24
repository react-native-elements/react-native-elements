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
import Input from '../input/Input';
const ListItemInput = (_a) => {
    var { inputStyle, inputContainerStyle, containerStyle } = _a, props = __rest(_a, ["inputStyle", "inputContainerStyle", "containerStyle"]);
    return (<Input renderErrorMessage={false} {...props} inputStyle={StyleSheet.flatten([styles.input, inputStyle])} inputContainerStyle={StyleSheet.flatten([
        styles.inputContainer,
        inputContainerStyle,
    ])} containerStyle={StyleSheet.flatten([styles.container, containerStyle])}/>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 0,
    },
    inputContainer: {
        flex: 1,
        borderBottomWidth: 0,
        width: null,
        height: null,
    },
    input: {
        flex: 1,
        textAlign: 'right',
        width: null,
        height: null,
    },
});
export default withTheme(ListItemInput, 'ListItemInput');
