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
import React, { useRef } from 'react';
import { View } from 'react-native';
export const PadView = (_a) => {
    var { children, pad, Component } = _a, props = __rest(_a, ["children", "pad", "Component"]);
    const _root = useRef(null);
    const length = React.Children.count(children);
    const Container = Component || View;
    return (React.createElement(Container, Object.assign({}, props, { ref: _root, testID: "RNE__LISTITEM__padView" }), React.Children.map(children, (child, index) => child && [
        child,
        index !== length - 1 && React.createElement(View, { style: { paddingLeft: pad } }),
    ])));
};
