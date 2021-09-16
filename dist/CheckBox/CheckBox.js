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
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import TextElement from '../Text';
import { CheckBoxIcon } from './components/CheckBoxIcon';
import { fonts } from '../config';
/** CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.
 * It provides a clear visual of either a true or false choice. */
export const CheckBox = (_a) => {
    var _b, _c;
    var { checked = false, Component = Pressable, iconRight = false, title, titleProps = {}, center = false, right = false, containerStyle, wrapperStyle, textStyle, checkedTitle, fontFamily, theme, onPress, onLongPress, checkedColor = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary } = _a, rest = __rest(_a, ["checked", "Component", "iconRight", "title", "titleProps", "center", "right", "containerStyle", "wrapperStyle", "textStyle", "checkedTitle", "fontFamily", "theme", "onPress", "onLongPress", "checkedColor"]);
    const accessibilityState = {
        checked: !!checked,
    };
    const iconProps = Object.assign({ checked,
        onLongPress,
        checkedColor }, rest);
    return (<Component accessibilityRole="checkbox" accessibilityState={accessibilityState} testID="RNE__CheckBox__Wrapper" {...rest} onLongPress={onLongPress} onPress={onPress} style={StyleSheet.flatten([
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
        {/* Show Icon on left if iconRight is false */}
        {!iconRight && (<CheckBoxIcon {...iconProps} checkedColor={checkedColor}/>)}
        {React.isValidElement(title)
            ? title
            : title !== '' &&
                title && (<TextElement testID="RNE__CheckBox__Title" style={StyleSheet.flatten([
                    Object.assign({ marginLeft: 10, marginRight: 10, color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey1 }, Platform.select({
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
        {/* Show Icon on right side if iconRight is true */}
        {iconRight && (<CheckBoxIcon {...iconProps} checkedColor={checkedColor}/>)}
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
CheckBox.displayName = 'CheckBox';
