"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
/** The Overlay is a view that floats above an app’s content.
 * Overlays are an easy way to inform or request information from the user. */
const Overlay = (_a) => {
    var { children, backdropStyle, overlayStyle, onBackdropPress = () => null, fullScreen = false, ModalComponent = react_native_1.Modal, isVisible } = _a, rest = __rest(_a, ["children", "backdropStyle", "overlayStyle", "onBackdropPress", "fullScreen", "ModalComponent", "isVisible"]);
    return (<ModalComponent visible={isVisible} onRequestClose={onBackdropPress} transparent {...rest}>
    <react_native_1.TouchableWithoutFeedback onPress={onBackdropPress} testID="RNE__Overlay__backdrop">
      <react_native_1.View testID="backdrop" style={react_native_1.StyleSheet.flatten([styles.backdrop, backdropStyle])}/>
    </react_native_1.TouchableWithoutFeedback>

    <react_native_1.View style={styles.container} pointerEvents="box-none">
      <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.overlay,
        fullScreen && styles.fullscreen,
        overlayStyle,
    ])}>
        {children}
      </react_native_1.View>
    </react_native_1.View>
  </ModalComponent>);
};
exports.Overlay = Overlay;
const styles = react_native_1.StyleSheet.create({
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
    overlay: Object.assign({ backgroundColor: 'white', borderRadius: 3, padding: 10 }, react_native_1.Platform.select({
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
exports.Overlay.displayName = 'Overlay';
