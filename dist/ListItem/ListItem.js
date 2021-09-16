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
import { Platform, StyleSheet, Pressable, View, } from 'react-native';
import { PadView } from './components/PadView';
/** ListItems are used to display rows of information, such as a contact list, playlist, or menu.
 * They are very customizable and can contain switches, avatars, badges, icons, and more. */
export const ListItemBase = (props) => {
    var _a, _b;
    const { containerStyle, onPress, onLongPress, Component = onPress || onLongPress ? Pressable : View, disabled, disabledStyle, bottomDivider, topDivider, pad = 16, linearGradientProps, ViewComponent = View, theme, children } = props, rest = __rest(props, ["containerStyle", "onPress", "onLongPress", "Component", "disabled", "disabledStyle", "bottomDivider", "topDivider", "pad", "linearGradientProps", "ViewComponent", "theme", "children"]);
    if (props.linearGradientProps && !props.ViewComponent) {
        console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
    }
    return (<Component {...rest} onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <PadView Component={ViewComponent} {...linearGradientProps} style={StyleSheet.flatten([
            Object.assign(Object.assign({}, Platform.select({
                ios: {
                    padding: 14,
                },
                default: {
                    padding: 16,
                },
            })), { flexDirection: 'row', alignItems: 'center', backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.white, borderColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.divider }),
            topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
            bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
            containerStyle,
            disabled && disabledStyle,
        ])} pad={pad}>
        {children}
      </PadView>
    </Component>);
};
ListItemBase.displayName = 'ListItem';
