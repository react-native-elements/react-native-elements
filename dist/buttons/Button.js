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
const defaultLoadingProps = (type, theme) => ({
    color: type === 'solid' ? 'white' : theme.colors.primary,
    size: 'small',
});
const Button = (props) => {
    useEffect(() => {
        if (props.linearGradientProps && !props.ViewComponent) {
            console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    const { TouchableComponent, containerStyle, onPress = () => console.log('Please attach a method to this component'), buttonStyle, type = 'solid', loading = false, loadingStyle, loadingProps: passedLoadingProps, title = '', titleProps, titleStyle: passedTitleStyle, icon, iconContainerStyle, iconRight = false, disabled = false, disabledStyle, disabledTitleStyle, raised = false, linearGradientProps, ViewComponent = View, theme } = props, attributes = __rest(props, ["TouchableComponent", "containerStyle", "onPress", "buttonStyle", "type", "loading", "loadingStyle", "loadingProps", "title", "titleProps", "titleStyle", "icon", "iconContainerStyle", "iconRight", "disabled", "disabledStyle", "disabledTitleStyle", "raised", "linearGradientProps", "ViewComponent", "theme"]);
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
        { color: type === 'solid' ? 'white' : theme.colors.primary },
        styles.title,
        passedTitleStyle,
        disabled && { color: color(theme.colors.disabled).darken(0.3).string() },
        disabled && disabledTitleStyle,
    ]);
    const background = Platform.OS === 'android' && Platform.Version >= 21
        ? TouchableNativeFeedback.Ripple(Color(titleStyle.color.toString()).alpha(0.32).rgb().string(), true)
        : undefined;
    const loadingProps = Object.assign(Object.assign({}, defaultLoadingProps(type, theme)), passedLoadingProps);
    const accessibilityState = {
        disabled: !!disabled,
        busy: !!loading,
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
        {
            backgroundColor: type === 'solid' ? theme.colors.primary : 'transparent',
            borderColor: theme.colors.primary,
            borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
        },
        buttonStyle,
        disabled &&
            type === 'solid' && { backgroundColor: theme.colors.disabled },
        disabled &&
            type === 'outline' && {
            borderColor: color(theme.colors.disabled).darken(0.3).string(),
        },
        disabled && disabledStyle,
    ])}>
          {loading && (<ActivityIndicator style={StyleSheet.flatten([styles.loading, loadingStyle])} color={loadingProps.color} size={loadingProps.size} {...loadingProps}/>)}

          {!loading &&
        icon &&
        !iconRight &&
        renderNode(Icon, icon, {
            containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
            ]),
        })}

          {!loading &&
        !!title &&
        renderNode(Text, title, Object.assign({ style: titleStyle }, titleProps))}

          {!loading &&
        icon &&
        iconRight &&
        renderNode(Icon, icon, {
            containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
            ]),
        })}
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
