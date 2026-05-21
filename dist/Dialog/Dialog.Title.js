import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { defaultTheme } from '../helpers';
import { Text } from '../Text';
export const DialogTitle = ({ title, titleStyle, titleProps, theme = defaultTheme, }) => {
    return (React.createElement(Text, Object.assign({ style: StyleSheet.flatten([styles.title, titleStyle]), testID: "Dialog__Title", theme: theme }, titleProps), title));
};
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: Platform.OS === 'ios' ? '600' : '700',
        marginBottom: 10,
    },
});
DialogTitle.displayName = 'Dialog.Title';
