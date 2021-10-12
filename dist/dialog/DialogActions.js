import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme } from '../config';
const DialogActions = ({ children, }) => {
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
export default withTheme(DialogActions, 'DialogActions');
