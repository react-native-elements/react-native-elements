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
exports.Accessory = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Image_1 = __importDefault(require("../Image"));
const Icon_1 = __importDefault(require("../Icon"));
/** This is used for adding an accessory to the Avatar.
 * Receives either all [Icon](icon.md#props) or [Image](image.md#props) props. */
const Accessory = (_a) => {
    var { size = 10, style, underlayColor = '#000', onPress, onLongPress, source } = _a, props = __rest(_a, ["size", "style", "underlayColor", "onPress", "onLongPress", "source"]);
    return (<react_native_1.TouchableHighlight style={[
        styles.accessory,
        {
            width: size,
            height: size,
            borderRadius: size / 2,
        },
        style,
    ]} underlayColor={underlayColor} onPress={onPress} onLongPress={onLongPress}>
      <react_native_1.View>
        {source ? (<Image_1.default source={source} style={{
        width: size,
        height: size,
        borderRadius: size / 2,
    }} {...props}/>) : (<Icon_1.default name="mode-edit" type="material" color="#fff" size={size * 0.8} {...props}/>)}
      </react_native_1.View>
    </react_native_1.TouchableHighlight>);
};
exports.Accessory = Accessory;
const styles = react_native_1.StyleSheet.create({
    accessory: Object.assign({ position: 'absolute', bottom: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#aaa' }, react_native_1.Platform.select({
        android: {
            elevation: 1,
        },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowRadius: 2,
            shadowOpacity: 0.5,
        },
    })),
});
exports.Accessory.displayName = 'Avatar.Accessory';
