import React from 'react';
import { StyleSheet, Text, View, Pressable, } from 'react-native';
import { renderNode, } from '../helpers';
/** Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user. */
export const Badge = ({ containerStyle, textStyle, textProps, badgeStyle, onPress, onLongPress, onPressOut, onPressIn, Component = onPress || onLongPress || onPressIn || onPressOut
    ? Pressable
    : View, value, theme, status = 'primary', pressableProps, ...rest }) => {
    const element = renderNode(Text, value, {
        style: StyleSheet.flatten([styles.text, textStyle && textStyle]),
        ...textProps,
    });
    return (<View testID="RNE__Badge__Container" style={StyleSheet.flatten([containerStyle && containerStyle])}>
      <Component {...{
        onPress,
        onLongPress,
        onPressOut,
        onPressIn,
        ...pressableProps,
        ...rest,
    }} testID="RNE__Badge" style={StyleSheet.flatten([
            {
                alignSelf: 'center',
                minWidth: size,
                height: size,
                borderRadius: size / 2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme?.colors?.[status],
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#fff',
            },
            !element && styles.miniBadge,
            badgeStyle && badgeStyle,
        ])}>
        {element}
      </Component>
    </View>);
};
const size = 18;
const miniSize = 8;
const styles = StyleSheet.create({
    miniBadge: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        minWidth: miniSize,
        height: miniSize,
        borderRadius: miniSize / 2,
    },
    text: {
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 4,
    },
});
Badge.displayName = 'Badge';
