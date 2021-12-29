import React from 'react';
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import TextElement from '../Text';
import { CheckBoxIcon } from './components/CheckBoxIcon';
import { fonts } from '../config';
/** CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.
 * It provides a clear visual of either a true or false choice. */
export const CheckBox = ({ checked = false, Component = Pressable, iconRight = false, title, titleProps = {}, center = false, right = false, containerStyle, wrapperStyle, textStyle, checkedTitle, fontFamily, theme, onPress, onLongPress, checkedColor = theme?.colors?.primary, ...rest }) => {
    const accessibilityState = {
        checked: !!checked,
    };
    const iconProps = {
        checked,
        onLongPress,
        checkedColor,
        ...rest,
    };
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
                    {
                        marginLeft: 10,
                        marginRight: 10,
                        color: theme?.colors?.grey1,
                        ...Platform.select({
                            android: {
                                ...fonts.android.bold,
                            },
                            default: {
                                fontWeight: 'bold',
                            },
                        }),
                    },
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
