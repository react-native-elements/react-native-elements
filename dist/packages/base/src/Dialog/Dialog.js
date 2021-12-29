import React from 'react';
import { View, StyleSheet } from 'react-native';
import Overlay from '../Overlay';
/** Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * You can wrap any component with a simple Dialog component to display quick information to the user.
 * Also receives all [Overlay](https://reactnativeelements.com/docs/overlay#props) props except `fullscreen`. */
export const DialogBase = ({ children, theme, overlayStyle, onBackdropPress, isVisible, ...rest }) => {
    return (<Overlay isVisible={isVisible} onBackdropPress={onBackdropPress} overlayStyle={StyleSheet.flatten([styles.dialog, overlayStyle])} testID="Internal__Overlay" {...rest}>
      <View style={styles.childrenContainer}>{children}</View>
    </Overlay>);
};
const styles = StyleSheet.create({
    dialog: {
        width: '75%',
        padding: 20,
    },
    childrenContainer: {
        marginBottom: 5,
    },
    buttonView: {
        marginTop: 10,
        marginRight: -35,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
    },
});
DialogBase.displayName = 'Dialog';
