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
import { StyleSheet, Text, View, Pressable, } from 'react-native';
import { renderNode, } from '../helpers';
/** Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user. */
export const Badge = (_a) => {
    var _b;
    var { containerStyle, textStyle, textProps, badgeStyle, onPress, onLongPress, onPressOut, onPressIn, Component = onPress || onLongPress || onPressIn || onPressOut
        ? Pressable
        : View, value, theme, status = 'primary', pressableProps } = _a, rest = __rest(_a, ["containerStyle", "textStyle", "textProps", "badgeStyle", "onPress", "onLongPress", "onPressOut", "onPressIn", "Component", "value", "theme", "status", "pressableProps"]);
    const element = renderNode(Text, value, Object.assign({ style: StyleSheet.flatten([styles.text, textStyle && textStyle]) }, textProps));
    return (<View testID="RNE__Badge__Container" style={StyleSheet.flatten([containerStyle && containerStyle])}>
      <Component {...Object.assign(Object.assign({ onPress,
        onLongPress,
        onPressOut,
        onPressIn }, pressableProps), rest)} testID="RNE__Badge" style={StyleSheet.flatten([
            {
                alignSelf: 'center',
                minWidth: size,
                height: size,
                borderRadius: size / 2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b[status],
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
