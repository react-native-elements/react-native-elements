import React from 'react';
import { StyleSheet } from 'react-native';
import ButtonGroup from '../ButtonGroup';
/** This allows adding ButtonGroup to the ListItem.
 * This, Receives all [ButtonGroup](buttongroup#props) props. */
export const ListItemButtonGroup = ({ containerStyle, ...rest }) => {
    return (<ButtonGroup {...rest} containerStyle={StyleSheet.flatten([styles.container, containerStyle])}/>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
        marginVertical: 0,
    },
});
ListItemButtonGroup.displayName = 'ListItem.ButtonGroup';
