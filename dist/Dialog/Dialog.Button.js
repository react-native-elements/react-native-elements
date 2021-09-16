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
import Button from '../Button';
/** This is used to add a button to the Dialog.
 * Receives all [Button](button#props) props. */
export const DialogButton = (_a) => {
    var { titleStyle } = _a, rest = __rest(_a, ["titleStyle"]);
    return (<Button style={{ marginLeft: 5 }} titleStyle={StyleSheet.flatten([styles.buttonTitle, titleStyle])} containerStyle={{
            width: 'auto',
        }} testID="Dialog__Button" {...rest}/>);
};
DialogButton.defaultProps = {
    title: 'ACTION',
    type: 'clear',
};
const styles = StyleSheet.create({
    buttonTitle: {
        fontSize: 15,
        fontWeight: '500',
    },
});
DialogButton.displayName = 'Dialog.Button';
