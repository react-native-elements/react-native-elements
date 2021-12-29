import React from 'react';
import { StyleSheet, ActivityIndicator, View, } from 'react-native';
/** `DialogLoader` allows adding loader to the Dialog. Loader is simply ActivityIndicator. */
export const DialogLoading = ({ loadingStyle, loadingProps, theme, }) => {
    return (<View style={styles.loadingView}>
      <ActivityIndicator style={StyleSheet.flatten([styles.loading, loadingStyle])} color={loadingProps?.color ?? theme?.colors?.primary} size={loadingProps?.size ?? 'large'} testID="Dialog__Loading" {...loadingProps}/>
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
DialogLoading.displayName = 'Dialog.Loading';
