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
import React, { useEffect, useRef } from 'react';
import { Animated, View, Platform, StyleSheet, } from 'react-native';
import { defaultTheme } from '../helpers';
import Color from 'color';
export const Skeleton = (_a) => {
    var _b, _c;
    var { circle, width = '100%', height, animation = 'pulse', style, skeletonStyle, theme = defaultTheme, LinearGradientComponent } = _a, rest = __rest(_a, ["circle", "width", "height", "animation", "style", "skeletonStyle", "theme", "LinearGradientComponent"]);
    const animationRef = useRef(new Animated.Value(0));
    const animationLoop = useRef();
    const [layoutWidth, setLayoutWidth] = React.useState(0);
    useEffect(() => {
        animationLoop.current = Animated.timing(animationRef.current, {
            toValue: 2,
            delay: 400,
            duration: 1500,
            useNativeDriver: !!Platform.select({
                web: false,
                native: true,
            }),
        });
        animationRef.current.setValue(0);
        Animated.loop(animationLoop.current).start();
    }, []);
    return (React.createElement(View, Object.assign({ accessibilityRole: "none", accessibilityLabel: "loading...", accessible: false, testID: "RNE__Skeleton", onLayout: ({ nativeEvent }) => {
            setLayoutWidth(nativeEvent.layout.width);
        }, style: [
            styles.container,
            {
                width: width,
                height: height || 12,
                backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey4,
            },
            circle && {
                borderRadius: 50,
                height: height || width,
            },
            style,
        ] }, rest), animation !== 'none' && (React.createElement(Animated.View, { style: [
            styles.skeleton,
            !LinearGradientComponent && {
                backgroundColor: Color((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey4)
                    .darken(0.1)
                    .rgb()
                    .string(),
            },
            animation === 'pulse' && {
                width: '100%',
                opacity: animationRef.current.interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: [1, 0, 1],
                }),
            },
            animation === 'wave' && {
                transform: [
                    {
                        translateX: animationRef.current.interpolate({
                            inputRange: [0, 2],
                            outputRange: [-layoutWidth * 2, layoutWidth * 2],
                        }),
                    },
                ],
            },
            skeletonStyle,
        ] }, LinearGradientComponent && (React.createElement(LinearGradientComponent, { style: styles.skeleton, colors: [
            theme.colors.grey4,
            theme.colors.grey5,
            theme.colors.grey4,
        ], start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }))))));
};
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderRadius: 2,
    },
    skeleton: {
        height: '100%',
    },
});
