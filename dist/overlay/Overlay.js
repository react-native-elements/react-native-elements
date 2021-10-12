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
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, } from 'react-native';
import { withTheme } from '../config';
const Overlay = (_a) => {
    var { children, backdropStyle, overlayStyle, onBackdropPress, fullScreen, ModalComponent = Modal, isVisible } = _a, rest = __rest(_a, ["children", "backdropStyle", "overlayStyle", "onBackdropPress", "fullScreen", "ModalComponent", "isVisible"]);
    return (<ModalComponent visible={isVisible} onRequestClose={onBackdropPress} transparent {...rest}>
    <TouchableWithoutFeedback onPress={onBackdropPress} testID="RNE__Overlay__backdrop">
      <View testID="backdrop" style={StyleSheet.flatten([styles.backdrop, backdropStyle])}/>
    </TouchableWithoutFeedback>

    <View style={styles.container} pointerEvents="box-none">
      <View style={StyleSheet.flatten([
        styles.overlay,
        fullScreen && styles.fullscreen,
        overlayStyle,
    ])}>
        {children}
      </View>
    </View>
  </ModalComponent>);
};
Overlay.defaultProps = {
    fullScreen: false,
    onBackdropPress: () => null,
    ModalComponent: Modal,
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
export { Overlay };
export default withTheme(Overlay, 'Overlay');
