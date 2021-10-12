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
import React, { useCallback, useEffect } from 'react';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, ActivityIndicator, Platform, StyleSheet, } from 'react-native';
import Color from 'color';
import { withTheme } from '../config';
import { renderNode, color } from '../helpers';
import Icon from '../icons/Icon';
const defaultLoadingProps = (type, theme) => {
    var _a;
    return ({
        color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
        size: 'small',
    });
};
const Button = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    useEffect(() => {
        if (props.linearGradientProps && !props.ViewComponent) {
            console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    const { TouchableComponent, containerStyle, onPress = () => console.log('Please attach a method to this component'), buttonStyle, type = 'solid', loading = false, loadingStyle, loadingProps: passedLoadingProps, title = '', titleProps, titleStyle: passedTitleStyle, icon, iconContainerStyle, iconRight = false, disabled = false, disabledStyle, disabledTitleStyle, raised = false, linearGradientProps, ViewComponent = View, theme, iconPosition = 'left' } = props, attributes = __rest(props, ["TouchableComponent", "containerStyle", "onPress", "buttonStyle", "type", "loading", "loadingStyle", "loadingProps", "title", "titleProps", "titleStyle", "icon", "iconContainerStyle", "iconRight", "disabled", "disabledStyle", "disabledTitleStyle", "raised", "linearGradientProps", "ViewComponent", "theme", "iconPosition"]);
    const handleOnPress = useCallback((evt) => {
        if (!loading) {
            onPress(evt);
        }
    }, [loading, onPress]);
    // Refactor to Pressable
    const TouchableComponentInternal = TouchableComponent ||
        Platform.select({
            android: linearGradientProps ? TouchableOpacity : TouchableNativeFeedback,
            default: TouchableOpacity,
        });
    const titleStyle = StyleSheet.flatten([
        {
            color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
        },
        styles.title,
        passedTitleStyle,
        disabled && {
            color: color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.disabled).darken(0.3).string(),
        },
        disabled && disabledTitleStyle,
    ]);
    const background = Platform.OS === 'android' && Platform.Version >= 21
        ? TouchableNativeFeedback.Ripple(Color((_c = titleStyle === null || titleStyle === void 0 ? void 0 : titleStyle.color) === null || _c === void 0 ? void 0 : _c.toString()).alpha(0.32).rgb().string(), true)
        : undefined;
    const loadingProps = Object.assign(Object.assign({}, defaultLoadingProps(type, theme)), passedLoadingProps);
    const accessibilityState = {
        disabled: !!disabled,
        busy: !!loading,
    };
    const positionStyle = {
        top: 'column',
        bottom: 'column-reverse',
        left: 'row',
        right: 'row-reverse',
    };
    return (<View style={[
        styles.container,
        {
            borderRadius: 3 || styles.container.borderRadius,
        },
        containerStyle,
        raised && !disabled && type !== 'clear' && styles.raised,
    ]}>
      <TouchableComponentInternal onPress={handleOnPress} delayPressIn={0} activeOpacity={0.3} accessibilityRole="button" accessibilityState={accessibilityState} disabled={disabled} background={background} {...attributes}>
        <ViewComponent {...linearGradientProps} style={StyleSheet.flatten([
        styles.button,
        styles.buttonOrientation,
        {
            flexDirection: positionStyle[iconRight ? 'right' : iconPosition] || 'row',
        },
        {
            backgroundColor: type === 'solid' ? (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.primary : 'transparent',
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
    ])}>
          {loading && (<ActivityIndicator style={StyleSheet.flatten([styles.loading, loadingStyle])} color={loadingProps.color} size={loadingProps.size} {...loadingProps}/>)}
          {!loading &&
        icon &&
        renderNode(Icon, icon, {
            containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
            ]),
        })}

          {!loading &&
        !!title &&
        renderNode(Text, title, Object.assign({ style: titleStyle }, titleProps))}
        </ViewComponent>
      </TouchableComponentInternal>
    </View>);
};
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 8,
    },
    buttonOrientation: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 8,
    },
    container: {
        overflow: 'hidden',
        borderRadius: 3,
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
export { Button };
export default withTheme(Button, 'Button');
