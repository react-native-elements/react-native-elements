import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Button from '../Button';
/** Chips are compact elements that represent an input, attribute, or action.
 * They may display text, icons, or both. */
export const Chip = ({ titleStyle, buttonStyle, onPress, ...rest }) => {
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
