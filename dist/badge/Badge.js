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
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { withTheme } from '../config';
import { renderNode } from '../helpers';
const Badge = (props) => {
    var _a;
    const { containerStyle, textStyle, textProps, badgeStyle, onPress, Component = onPress ? TouchableOpacity : View, value, theme, status = 'primary' } = props, attributes = __rest(props, ["containerStyle", "textStyle", "textProps", "badgeStyle", "onPress", "Component", "value", "theme", "status"]);
    const element = renderNode(Text, value, Object.assign({ style: StyleSheet.flatten([styles.text, textStyle && textStyle]) }, textProps));
    return (<View style={StyleSheet.flatten([containerStyle && containerStyle])}>
      <Component {...attributes} style={StyleSheet.flatten([
        {
            alignSelf: 'center',
            minWidth: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a[status],
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#fff',
        },
        !element && styles.miniBadge,
        badgeStyle && badgeStyle,
    ])} onPress={onPress}>
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
export { Badge };
export default withTheme(Badge, 'Badge');
