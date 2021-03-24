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
import { Text, View, TextInput, Animated, Easing, Platform, StyleSheet, } from 'react-native';
import { renderNode, patchWebProps } from '../helpers';
import { fonts, withTheme } from '../config';
import Icon from '../icons/Icon';
const renderText = (content, defaultProps, style) => renderNode(Text, content, Object.assign(Object.assign({}, defaultProps), { style: StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.shakeAnimationValue = new Animated.Value(0);
        this.shake = () => {
            const { shakeAnimationValue } = this;
            shakeAnimationValue.setValue(0);
            // Animation duration based on Material Design
            // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
            Animated.timing(shakeAnimationValue, {
                duration: 375,
                toValue: 3,
                easing: Easing.bounce,
                useNativeDriver: true,
            }).start();
        };
    }
    focus() {
        this.input.focus();
    }
    blur() {
        this.input.blur();
    }
    clear() {
        this.input.clear();
    }
    isFocused() {
        return this.input.isFocused();
    }
    setNativeProps(nativeProps) {
        this.input.setNativeProps(nativeProps);
    }
    render() {
        const _a = this.props, { containerStyle, disabled, disabledInputStyle, inputContainerStyle, leftIcon, leftIconContainerStyle, rightIcon, rightIconContainerStyle, InputComponent = TextInput, inputStyle, errorProps, errorStyle, errorMessage, label, labelStyle, labelProps, theme, renderErrorMessage = true, style } = _a, attributes = __rest(_a, ["containerStyle", "disabled", "disabledInputStyle", "inputContainerStyle", "leftIcon", "leftIconContainerStyle", "rightIcon", "rightIconContainerStyle", "InputComponent", "inputStyle", "errorProps", "errorStyle", "errorMessage", "label", "labelStyle", "labelProps", "theme", "renderErrorMessage", "style"]);
        const translateX = this.shakeAnimationValue.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            outputRange: [0, -15, 0, 15, 0, -15, 0],
        });
        const hideErrorMessage = !renderErrorMessage && !errorMessage;
        return (<View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {renderText(label, Object.assign({ style: labelStyle }, labelProps), Object.assign({ fontSize: 16, color: theme.colors.grey3 }, Platform.select({
            android: Object.assign({}, fonts.android.bold),
            default: {
                fontWeight: 'bold',
            },
        })))}

        <Animated.View style={StyleSheet.flatten([
            {
                flexDirection: 'row',
                borderBottomWidth: 1,
                alignItems: 'center',
                borderColor: theme.colors.grey3,
            },
            inputContainerStyle,
            { transform: [{ translateX }] },
        ])}>
          {leftIcon && (<View style={StyleSheet.flatten([
            styles.iconContainer,
            leftIconContainerStyle,
        ])}>
              {renderNode(Icon, leftIcon)}
            </View>)}

          <InputComponent testID="RNE__Input__text-input" underlineColorAndroid="transparent" editable={!disabled} ref={(ref) => {
            this.input = ref;
        }} style={StyleSheet.flatten([
            {
                alignSelf: 'center',
                color: theme.colors.black,
                fontSize: 18,
                flex: 1,
                minHeight: 40,
            },
            inputStyle,
            disabled && styles.disabledInput,
            disabled && disabledInputStyle,
            style,
        ])} placeholderTextColor={theme.colors.grey3} {...patchWebProps(attributes)}/>

          {rightIcon && (<View style={StyleSheet.flatten([
            styles.iconContainer,
            rightIconContainerStyle,
        ])}>
              {renderNode(Icon, rightIcon)}
            </View>)}
        </Animated.View>

        <Text {...errorProps} style={StyleSheet.flatten([
            {
                margin: 5,
                fontSize: 12,
                color: theme.colors.error,
            },
            errorStyle && errorStyle,
            hideErrorMessage && {
                height: 0,
                margin: 0,
                padding: 0,
            },
        ])}>
          {errorMessage}
        </Text>
      </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    disabledInput: {
        opacity: 0.5,
    },
    iconContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 4,
        marginVertical: 4,
    },
});
export { Input };
//@ts-ignore
export default withTheme(Input, 'Input');
