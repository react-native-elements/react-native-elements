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
import { StyleSheet, Animated } from 'react-native';
const THUMB_SIZE = 40;
export const SliderThumb = (_a) => {
    var { Component, isVisible, onLayout, style, start, color, vertical } = _a, props = __rest(_a, ["Component", "isVisible", "onLayout", "style", "start", "color", "vertical"]);
    const ThumbComponent = Component || Animated.View;
    const axis = vertical ? 'translateY' : 'translateX';
    const thumbPosition = [{ [axis]: start }];
    const styleTransform = (style && style.transform) || [];
    const visibleStyle = isVisible ? {} : { height: 0, width: 0 };
    return (React.createElement(ThumbComponent, Object.assign({ testID: "RNE__Slider_Thumb", onLayout: onLayout, style: StyleSheet.flatten([
            Object.assign({ backgroundColor: color, transform: [...thumbPosition, ...styleTransform] }, visibleStyle),
            styles.thumb,
            style,
        ]) }, props)));
};
const styles = StyleSheet.create({
    thumb: {
        position: 'absolute',
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        borderRadius: THUMB_SIZE / 2,
    },
});
