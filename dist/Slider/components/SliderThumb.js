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
exports.SliderThumb = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const THUMB_SIZE = 40;
const SliderThumb = (_a) => {
    var { Component, isVisible, onLayout, style, start, color, vertical } = _a, props = __rest(_a, ["Component", "isVisible", "onLayout", "style", "start", "color", "vertical"]);
    const ThumbComponent = Component || react_native_1.Animated.View;
    const axis = vertical ? 'translateY' : 'translateX';
    const thumbPosition = [{ [axis]: start }];
    const styleTransform = (style && style.transform) || [];
    const visibleStyle = isVisible ? {} : { height: 0, width: 0 };
    return (<ThumbComponent testID="sliderThumb" onLayout={onLayout} style={react_native_1.StyleSheet.flatten([
        Object.assign({ backgroundColor: color, transform: [...thumbPosition, ...styleTransform] }, visibleStyle),
        styles.thumb,
        style,
    ])} {...props}/>);
};
exports.SliderThumb = SliderThumb;
const styles = react_native_1.StyleSheet.create({
    thumb: {
        position: 'absolute',
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        borderRadius: THUMB_SIZE / 2,
    },
});
