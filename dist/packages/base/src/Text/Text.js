import React from 'react';
import { Text as NativeText, StyleSheet, Platform, } from 'react-native';
import { fonts } from '../config';
import { patchWebProps } from '../helpers';
import normalize from '../helpers/normalizeText';
/** Text displays words and characters of various sizes. */
export const Text = ({ style = {}, h1 = false, h2 = false, h3 = false, h4 = false, h1Style = {}, h2Style = {}, h3Style = {}, h4Style = {}, children = '', theme, ...rest }) => {
    return (<NativeText accessibilityRole="text" style={StyleSheet.flatten([
            {
                ...Platform.select({
                    android: {
                        ...fonts.android.regular,
                    },
                }),
                color: theme?.colors?.black,
            },
            style,
            (h1 || h2 || h3 || h4) && styles.bold,
            h1 && StyleSheet.flatten([{ fontSize: normalize(40) }, h1Style]),
            h2 && StyleSheet.flatten([{ fontSize: normalize(34) }, h2Style]),
            h3 && StyleSheet.flatten([{ fontSize: normalize(28) }, h3Style]),
            h4 && StyleSheet.flatten([{ fontSize: normalize(22) }, h4Style]),
        ])} {...patchWebProps(rest)}>
      {children}
    </NativeText>);
};
const styles = StyleSheet.create({
    bold: {
        ...Platform.select({
            android: {
                ...fonts.android.bold,
            },
        }),
    },
});
Text.displayName = 'Text';
