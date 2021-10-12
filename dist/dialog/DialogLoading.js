import React from 'react';
import { StyleSheet, ActivityIndicator, View, } from 'react-native';
import { withTheme } from '../config';
const DialogLoading = ({ loadingStyle, loadingProps, theme, }) => {
    var _a, _b;
    return (<View style={styles.loadingView}>
      <ActivityIndicator style={StyleSheet.flatten([styles.loading, loadingStyle])} color={(_a = loadingProps.color) !== null && _a !== void 0 ? _a : theme.colors.primary} size={(_b = loadingProps.size) !== null && _b !== void 0 ? _b : 'large'} testID="Dialog__Loading" {...loadingProps}/>
    </View>);
};
DialogLoading.defaultProps = {
    loadingProps: { size: 'large' },
};
const styles = StyleSheet.create({
    loading: {
        marginVertical: 20,
    },
    loadingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default withTheme(DialogLoading, 'DialogLoading');
