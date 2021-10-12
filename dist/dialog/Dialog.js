var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Overlay from '../overlay/Overlay';
import { withTheme } from '../config';
import DialogLoading from './DialogLoading';
import DialogTitle from './DialogTitle';
import DialogButton from './DialogButton';
import DialogActions from './DialogActions';
const Dialog = Object.assign((_a) => {
    var { children, theme, overlayStyle, onBackdropPress, isVisible } = _a, rest = __rest(_a, ["children", "theme", "overlayStyle", "onBackdropPress", "isVisible"]);
    return (<Overlay isVisible={isVisible} onBackdropPress={onBackdropPress} overlayStyle={StyleSheet.flatten([styles.dialog, overlayStyle])} testID="Internal__Overlay" {...rest}>
        <View style={styles.childrenContainer}>{children}</View>
      </Overlay>);
});
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
export { Dialog };
const ThemedDialog = Object.assign(withTheme(Dialog, 'Dialog'), {
    Loading: DialogLoading,
    Title: DialogTitle,
    Actions: DialogActions,
    Button: DialogButton,
});
export default ThemedDialog;
