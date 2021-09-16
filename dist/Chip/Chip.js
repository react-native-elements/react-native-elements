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
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Button from '../Button';
/** Chips are compact elements that represent an input, attribute, or action.
 * They may display text, icons, or both. */
export const Chip = (_a) => {
    var { titleStyle, buttonStyle, onPress } = _a, rest = __rest(_a, ["titleStyle", "buttonStyle", "onPress"]);
    return (<Button titleStyle={StyleSheet.flatten([
            { fontSize: 14, paddingHorizontal: 2 },
            titleStyle,
        ])} buttonStyle={StyleSheet.flatten([{ borderRadius: 30 }, buttonStyle])} {...(onPress === undefined
        ? {
            TouchableComponent: TouchableWithoutFeedback,
        }
        : { onPress })} {...rest}/>);
};
Chip.displayName = 'Chip';
