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
import { StyleSheet, Platform } from 'react-native';
import Icon from '../Icon';
/** This allows adding a Chevron Icon(arrow) to the ListItem.
 * This, Receives all [Icon](icon#props) props. */
export const ListItemChevron = (_a) => {
    var { containerStyle } = _a, rest = __rest(_a, ["containerStyle"]);
    return (<Icon type={Platform.OS === 'ios' ? 'ionicon' : 'material'} color="#D1D1D6" name={Platform.OS === 'ios'
            ? 'chevron-forward-outline'
            : 'keyboard-arrow-right'} size={16} containerStyle={StyleSheet.flatten([
            { alignSelf: 'center' },
            containerStyle,
        ])} {...rest}/>);
};
ListItemChevron.displayName = 'ListItem.Chevron';
