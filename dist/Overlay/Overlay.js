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
import { View, StyleSheet, Platform, Pressable, Modal, KeyboardAvoidingView, } from 'react-native';
import Color from 'color';
import { getBehaviorType, } from '../helpers';
export const Overlay = (_a) => {
    var _b;
    var { children, backdropStyle, overlayStyle, onBackdropPress = () => null, fullScreen = false, ModalComponent = Modal, isVisible, pressableProps, onPressOut, onPressIn, onLongPress, theme } = _a, rest = __rest(_a, ["children", "backdropStyle", "overlayStyle", "onBackdropPress", "fullScreen", "ModalComponent", "isVisible", "pressableProps", "onPressOut", "onPressIn", "onLongPress", "theme"]);
    return (React.createElement(ModalComponent, Object.assign({ visible: isVisible, onRequestClose: onBackdropPress, transparent: true }, rest),
        React.createElement(Pressable, Object.assign({ style: StyleSheet.flatten([styles.backdrop, backdropStyle]), onPress: onBackdropPress, testID: "RNE__Overlay__backdrop" }, pressableProps, { onPressOut, onPressIn, onLongPress })),
        React.createElement(KeyboardAvoidingView, { testID: "RNE__Overlay__Container", style: styles.container, pointerEvents: "box-none", behavior: getBehaviorType },
            React.createElement(View, { testID: "RNE__Overlay", style: StyleSheet.flatten([
                    styles.overlay,
                    fullScreen && styles.fullscreen,
                    {
                        backgroundColor: Color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.white)
                            .lighten(10)
                            .rgb()
                            .toString(),
                    },
                    overlayStyle,
                ]) }, children))));
};
const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .4)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullscreen: {
        width: '100%',
        height: '100%',
    },
    overlay: Object.assign({ backgroundColor: 'white', borderRadius: 3, padding: 10 }, Platform.select({
        android: {
            elevation: 2,
        },
        default: {
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 4,
        },
    })),
});
Overlay.displayName = 'Overlay';
