import React from 'react';
import { StyleSheet, ActivityIndicator, View, } from 'react-native';
import { defaultTheme } from '../helpers';
export const DialogLoading = ({ loadingStyle, loadingProps, theme = defaultTheme, }) => {
    var _a, _b, _c;
    return (React.createElement(View, { style: styles.loadingView },
        React.createElement(ActivityIndicator, Object.assign({ style: StyleSheet.flatten([styles.loading, loadingStyle]), color: (_a = loadingProps === null || loadingProps === void 0 ? void 0 : loadingProps.color) !== null && _a !== void 0 ? _a : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary, size: (_c = loadingProps === null || loadingProps === void 0 ? void 0 : loadingProps.size) !== null && _c !== void 0 ? _c : 'large', testID: "Dialog__Loading" }, loadingProps))));
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
