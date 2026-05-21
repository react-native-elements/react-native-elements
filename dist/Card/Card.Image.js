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
import { StyleSheet } from 'react-native';
import { Image } from '../Image';
export const CardImage = (_a) => {
    var { style } = _a, props = __rest(_a, ["style"]);
    return React.createElement(Image, Object.assign({ style: StyleSheet.flatten([styles.image, style]) }, props));
};
const styles = StyleSheet.create({
    image: {
        width: null,
        height: 150,
    },
});
CardImage.displayName = 'Card.Image';
