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
import { StyleSheet, TouchableOpacity, View, Platform, } from 'react-native';
import TextElement from '../text/Text';
import CheckBoxIcon from './CheckBoxIcon';
import { fonts, withTheme } from '../config';
const CheckBox = (props) => {
    const { theme } = props, rest = __rest(props, ["theme"]);
    const { Component = TouchableOpacity, checked = false, iconRight = false, title, titleProps = {}, center = false, right = false, containerStyle, textStyle, wrapperStyle, onPress, onLongPress, checkedTitle, fontFamily, checkedColor = theme.colors.primary } = rest, attributes = __rest(rest, ["Component", "checked", "iconRight", "title", "titleProps", "center", "right", "containerStyle", "textStyle", "wrapperStyle", "onPress", "onLongPress", "checkedTitle", "fontFamily", "checkedColor"]);
    const accessibilityState = {
        checked: !!checked,
    };
    return (<Component accessibilityRole="checkbox" accessibilityState={accessibilityState} testID="checkbox" {...attributes} onLongPress={onLongPress} onPress={onPress} style={StyleSheet.flatten([
        styles.container,
        title && styles.containerHasTitle,
        containerStyle && containerStyle,
    ])}>
      <View style={StyleSheet.flatten([
        styles.wrapper,
        right && { justifyContent: 'flex-end' },
        center && { justifyContent: 'center' },
        wrapperStyle && wrapperStyle,
    ])}>
        {!iconRight && <CheckBoxIcon {...props} checkedColor={checkedColor}/>}

        {React.isValidElement(title)
        ? title
        : title !== '' &&
            title && (<TextElement testID="checkboxTitle" style={StyleSheet.flatten([
            Object.assign({ marginLeft: 10, marginRight: 10, color: theme.colors.grey1 }, Platform.select({
                android: Object.assign({}, fonts.android.bold),
                default: {
                    fontWeight: 'bold',
                },
            })),
            textStyle && textStyle,
            fontFamily && { fontFamily },
        ])} {...titleProps}>
                {checked ? checkedTitle || title : title}
              </TextElement>)}

        {iconRight && <CheckBoxIcon {...props} checkedColor={checkedColor}/>}
      </View>
    </Component>);
};
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    containerHasTitle: {
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#fafafa',
        borderColor: '#ededed',
    },
});
export { CheckBox };
export default withTheme(CheckBox, 'CheckBox');
