import React from 'react';
import { View, StyleSheet } from 'react-native';
/** Define Dialog Actions using this component. */
export const DialogActions = ({ children, }) => {
    return (<View style={styles.actionsView} testID="Button__View">
      {children}
    </View>);
};
const styles = StyleSheet.create({
    actionsView: {
        marginTop: 10,
        marginRight: -35,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
    },
});
DialogActions.displayName = 'Dialog.Actions';
