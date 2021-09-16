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
import Overlay from '../Overlay';
/** Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * You can wrap any component with a simple Dialog component to display quick information to the user.
 * Also receives all [Overlay](https://reactnativeelements.com/docs/overlay#props) props except `fullscreen`. */
export const DialogBase = (_a) => {
    var { children, theme, overlayStyle, onBackdropPress, isVisible } = _a, rest = __rest(_a, ["children", "theme", "overlayStyle", "onBackdropPress", "isVisible"]);
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
