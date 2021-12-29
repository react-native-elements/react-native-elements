import React from 'react';
import { Platform, View, StyleSheet, Pressable, } from 'react-native';
import Color from 'color';
import getIconType from '../helpers/getIconType';
import getIconStyle from '../helpers/getIconStyle';
import { androidRipple, } from '../helpers';
/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
export const Icon = ({ type = 'material', name, size = 24, color: colorProp, iconStyle, iconProps, underlayColor = 'transparent', reverse = false, raised = false, containerStyle, reverseColor: reverseColorProp, disabled = false, disabledStyle, onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
    ? Pressable
    : View, solid = false, brand = false, theme, pressableProps, ...rest }) => {
    const color = colorProp || theme?.colors?.black;
    const reverseColor = reverseColorProp || theme?.colors?.white;
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, { solid, brand });
    const getBackgroundColor = React.useMemo(() => {
        if (reverse) {
            return color;
        }
        return raised ? theme?.colors?.white : 'transparent';
    }, [color, raised, reverse, theme?.colors?.white]);
    const buttonStyles = React.useMemo(() => ({
        borderRadius: size + 4,
        height: size * 2 + 4,
        width: size * 2 + 4,
    }), [size]);
    return (<View style={StyleSheet.flatten([
            styles.container,
            (reverse || raised) && styles.button,
            (reverse || raised) && buttonStyles,
            raised && styles.raised,
            iconStyle && iconStyle.borderRadius
                ? {
                    borderRadius: iconStyle.borderRadius,
                }
                : {},
            containerStyle && containerStyle,
        ])} testID="RNE__ICON__CONTAINER">
      <Component {...{
        android_ripple: androidRipple(Color(reverse ? color : underlayColor)
            .alpha(0.3)
            .rgb()
            .string()),
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        disabled,
        accessibilityRole: 'button',
        ...pressableProps,
        ...rest,
    }} testID="RNE__ICON__CONTAINER_ACTION">
        <View style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
                backgroundColor: getBackgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
            },
            disabled && styles.disabled,
            disabled && disabledStyle,
        ])} testID="RNE__ICON">
          <IconComponent testID="RNE__ICON__Component" style={StyleSheet.flatten([
            { backgroundColor: 'transparent' },
            iconStyle && iconStyle,
        ])} size={size} name={name} color={reverse ? reverseColor : color} {...iconSpecificStyle} {...iconProps}/>
        </View>
      </Component>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    button: {
        margin: 7,
    },
    raised: {
        ...Platform.select({
            android: {
                elevation: 2,
            },
            default: {
                shadowColor: 'rgba(0,0,0, .4)',
                shadowOffset: { height: 1, width: 1 },
                shadowOpacity: 1,
                shadowRadius: 1,
            },
        }),
    },
    disabled: {
        backgroundColor: '#D1D5D8',
    },
});
Icon.displayName = 'Icon';
