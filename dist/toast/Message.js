import React, { useEffect, useRef, useContext, useMemo, useCallback, } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import { ToastContext, ToastPosition, ToastTypes, } from './ToastProvider';
import { renderNode } from '../helpers';
import { useTheme } from '../config';
const Message = ({ message, onHide }) => {
    const { duration, position, containerMessageStyle, textMessageStyle, textMessageProps, } = useContext(ToastContext);
    const opacity = useRef(new Animated.Value(0)).current;
    const { theme } = useTheme();
    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.delay(duration),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => onHide());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const animationContainerStyles = useMemo(() => ({
        opacity,
        transform: [
            {
                translateY: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [position === ToastPosition.top ? -20 : 20, 0],
                }),
            },
        ],
    }), [opacity, position]);
    const themeBasedColorStyles = useMemo(() => {
        var _a;
        const colorType = message.type === 'info' ? 'primary' : message.type;
        // TODO resolve issue with platform colors
        // ios/android colors in theme.colors.platform always filled by default
        // that why you can't prioritize colors with them
        // const platformColorStyles = theme.colors?.platform?.[isIOS ? 'ios' : 'android'] ?? {};
        const color = (_a = theme.colors) === null || _a === void 0 ? void 0 : _a[colorType];
        return {
            backgroundColor: color,
            shadowColor: color,
        };
    }, [message.type, theme.colors]);
    const createTypedStyles = useCallback(function (styles) {
        var _a;
        const localStyles = Object.assign({}, styles);
        const typedStyles = Object.assign({}, ((_a = localStyles[message.type]) !== null && _a !== void 0 ? _a : {}));
        for (let key in ToastTypes) {
            delete localStyles[key];
        }
        return Object.keys(typedStyles).length > 0
            ? Object.assign(Object.assign({}, localStyles), typedStyles)
            : localStyles;
    }, [message.type]);
    const typedContainerStyles = createTypedStyles(containerMessageStyle);
    const typedTextStyles = createTypedStyles(textMessageStyle);
    return (<Animated.View style={StyleSheet.flatten([
        animationContainerStyles,
        themeBasedColorStyles,
        typedContainerStyles,
    ])}>
      {renderNode(Text, message.text, Object.assign({ style: typedTextStyles }, textMessageProps))}
    </Animated.View>);
};
export default Message;
