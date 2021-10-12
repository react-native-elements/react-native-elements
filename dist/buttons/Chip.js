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
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { withTheme } from '../config';
import Button from './Button';
const Chip = (props) => {
    const { titleStyle, buttonStyle } = props, rest = __rest(props, ["titleStyle", "buttonStyle"]);
    return (<Button titleStyle={StyleSheet.flatten([
        { fontSize: 14, paddingHorizontal: 2 },
        titleStyle,
    ])} buttonStyle={StyleSheet.flatten([{ borderRadius: 30 }, buttonStyle])} {...(props.onPress === undefined && {
        TouchableComponent: TouchableWithoutFeedback,
    })} {...rest}/>);
};
export { Chip };
export default withTheme(Chip, 'Chip');
