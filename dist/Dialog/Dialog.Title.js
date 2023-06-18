import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
export const DialogTitle = ({ title, titleStyle, titleProps, }) => {
    return (React.createElement(Text, Object.assign({ style: StyleSheet.flatten([styles.title, titleStyle]), testID: "Dialog__Title" }, titleProps), title));
};
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: Platform.OS === 'ios' ? '600' : '700',
        marginBottom: 10,
    },
});
DialogTitle.displayName = 'Dialog.Title';
