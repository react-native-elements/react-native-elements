import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
/** `DialogTitle` allows you to add title to the Dialog. */
export const DialogTitle = ({ title, titleStyle, titleProps, }) => {
    return (<Text style={StyleSheet.flatten([styles.title, titleStyle])} testID="Dialog__Title" {...titleProps}>
      {title}
    </Text>);
};
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: Platform.OS === 'ios' ? '600' : '700',
        marginBottom: 10,
    },
});
DialogTitle.displayName = 'Dialog.Title';
