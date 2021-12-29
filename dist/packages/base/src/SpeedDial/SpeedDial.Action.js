import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from '../FAB/index';
/** Adds Action to the SpeedDial.
 * This, Receieve all [Fab](fab#props) props. */
export const SpeedDialAction = ({ title, titleStyle, ...actionProps }) => {
    return (<View style={styles.action}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <FAB {...actionProps} size="small" style={[actionProps.style]}/>
    </View>);
};
const styles = StyleSheet.create({
    title: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    action: {
        marginBottom: 16,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
SpeedDialAction.displayName = 'SpeedDial.Action';
