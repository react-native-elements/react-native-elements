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
import Color from 'color';
import React, { useCallback, useEffect, useMemo } from 'react';
import { ActivityIndicator, Platform, Pressable, StyleSheet, Text, View, } from 'react-native';
import { color, defaultTheme, renderNode, } from '../helpers';
import { Icon } from '../Icon';
const defaultLoadingProps = (type, theme) => {
    var _a;
    return ({
        color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
        size: 'small',
    });
};
const positionStyle = {
    top: 'column',
    bottom: 'column-reverse',
    left: 'row',
    right: 'row-reverse',
};
export const Button = (_a) => {
    var _b, _c, _d, _e, _f, _g;
    var { TouchableComponent, containerStyle, onPress = () => { }, buttonStyle, type = 'solid', loading = false, loadingStyle, loadingProps: passedLoadingProps, size = 'md', radius = 'xs', uppercase = false, color: buttonColor = 'primary', title = '', titleProps, titleStyle: passedTitleStyle, icon, iconContainerStyle, iconRight = false, disabled = false, disabledStyle, disabledTitleStyle, raised = false, linearGradientProps, ViewComponent = View, theme = defaultTheme, iconPosition = 'left', children = title } = _a, rest = __rest(_a, ["TouchableComponent", "containerStyle", "onPress", "buttonStyle", "type", "loading", "loadingStyle", "loadingProps", "size", "radius", "uppercase", "color", "title", "titleProps", "titleStyle", "icon", "iconContainerStyle", "iconRight", "disabled", "disabledStyle", "disabledTitleStyle", "raised", "linearGradientProps", "ViewComponent", "theme", "iconPosition", "children"]);
    useEffect(() => {
        if (linearGradientProps && !ViewComponent) {
            console.warn("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    const handleOnPress = useCallback((evt) => {
        if (!loading && !disabled) {
            onPress(evt);
        }
    }, [loading, onPress, disabled]);
    const TouchableComponentInternal = TouchableComponent || Pressable;
    const titleStyle = useMemo(() => {
        var _a, _b;
        return StyleSheet.flatten([
            {
                color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
            },
            uppercase && { textTransform: 'uppercase' },
            styles.title,
            passedTitleStyle,
            disabled && {
                color: color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.disabled).darken(0.3).string(),
            },
            disabled && disabledTitleStyle,
        ]);
    }, [
        disabled,
        disabledTitleStyle,
        passedTitleStyle,
        (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.disabled,
        (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
        type,
        uppercase,
    ]);
    const androidRippleStyles = useMemo(() => {
        var _a;
        if (Platform.OS !== 'android' || !!linearGradientProps || disabled) {
            return null;
        }
        try {
            const baseColor = ((_a = titleStyle === null || titleStyle === void 0 ? void 0 : titleStyle.color) === null || _a === void 0 ? void 0 : _a.toString()) || '#000000';
            return {
                color: Color(baseColor).alpha(0.32).rgb().string(),
                borderless: false,
                foreground: true,
            };
        }
        catch (e) {
            return { color: 'rgba(0,0,0,0.1)', borderless: false, foreground: true };
        }
    }, [titleStyle === null || titleStyle === void 0 ? void 0 : titleStyle.color, linearGradientProps, disabled]);
    const loadingProps = useMemo(() => (Object.assign(Object.assign({}, defaultLoadingProps(type, theme)), passedLoadingProps)), [passedLoadingProps, theme, type]);
    const accessibilityState = useMemo(() => ({
        disabled: !!disabled,
        busy: !!loading,
    }), [disabled, loading]);
    const borderRadius = useMemo(() => {
        var _a;
        return Number((_a = theme.spacing[radius]) !== null && _a !== void 0 ? _a : (radius || '0')) || 0;
    }, [radius, theme]);
    return (React.createElement(View, { style: [
            styles.container,
            { borderRadius },
            containerStyle,
            raised && !disabled && type !== 'clear' && styles.raised,
        ], testID: "RNE_BUTTON_WRAPPER" },
        React.createElement(TouchableComponentInternal, Object.assign({ onPress: handleOnPress, delayLongPress: 0, accessibilityRole: "button", accessibilityState: Object.assign(Object.assign({}, accessibilityState), { disabled }), disabled: disabled, style: ({ pressed }) => [
                rest.style,
                { opacity: pressed && !androidRippleStyles ? 0.3 : 1 },
            ], android_ripple: androidRippleStyles, testID: "RNE_BUTTON_PRESSABLE" }, rest),
            React.createElement(ViewComponent, Object.assign({}, linearGradientProps, { style: StyleSheet.flatten([
                    styles.button,
                    {
                        padding: theme.spacing[size],
                        paddingHorizontal: theme.spacing[size] + theme.spacing.xs,
                        borderRadius,
                        flexDirection: positionStyle[iconRight ? 'right' : iconPosition],
                        backgroundColor: type === 'solid'
                            ? theme.colors[buttonColor] ||
                                buttonColor ||
                                ((_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.primary)
                            : 'transparent',
                        borderColor: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.primary,
                        borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
                    },
                    buttonStyle,
                    disabled &&
                        type === 'solid' && {
                        backgroundColor: (_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.disabled,
                    },
                    disabled &&
                        type === 'outline' && {
                        borderColor: color((_g = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _g === void 0 ? void 0 : _g.disabled)
                            .darken(0.3)
                            .string(),
                    },
                    disabled && disabledStyle,
                ]) }),
                loading && (React.createElement(ActivityIndicator, Object.assign({ style: StyleSheet.flatten([styles.loading, loadingStyle]), color: loadingProps.color, size: loadingProps.size }, loadingProps))),
                !loading &&
                    icon &&
                    renderNode(Icon, icon, {
                        containerStyle: StyleSheet.flatten([
                            styles.iconContainer,
                            iconContainerStyle,
                        ]),
                    }),
                !loading &&
                    React.Children.toArray(children).map((child, index) => (React.createElement(React.Fragment, { key: index }, typeof child === 'string'
                        ? renderNode(Text, child, Object.assign({ style: Object.assign({}, titleStyle) }, titleProps))
                        : child)))))));
};
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: defaultTheme.spacing.md,
        paddingHorizontal: defaultTheme.spacing.lg,
    },
    container: {
        overflow: 'hidden',
    },
    title: Object.assign({ fontSize: 16, textAlign: 'center', paddingVertical: 1 }, Platform.select({
        android: {
            fontFamily: 'sans-serif-medium',
        },
        default: {
            fontSize: 18,
        },
    })),
    iconContainer: {
        marginHorizontal: 5,
    },
    raised: Object.assign({ backgroundColor: '#fff', overflow: 'visible' }, Platform.select({
        android: {
            elevation: 4,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    loading: {
        marginVertical: 2,
    },
});
Button.displayName = 'Button';
