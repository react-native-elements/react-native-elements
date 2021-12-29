import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import Theme from '../config/theme';
/**  Dividers are visual separators of content.
 * Use Divider when you want to make a distinction between sections of content.
 * Our divider offers adding inset, color, orientation and subHeader to the component using props.
 * Also receives all [View](https://reactnative.dev/docs/view#props) props. */
export const Divider = ({ color, inset = false, insetType = 'left', orientation = 'horizontal', style, subHeader, subHeaderStyle, theme, width, ...rest }) => (<>
    <View testID="RNE__Divider" style={StyleSheet.flatten([
        styles.divider,
        style,
        inset &&
            (insetType === 'left'
                ? styles.leftInset
                : insetType === 'right'
                    ? styles.rightInset
                    : { ...styles.leftInset, ...styles.rightInset }),
        orientation === 'vertical' && styles.vertical,
        width &&
            (orientation === 'horizontal'
                ? { borderBottomWidth: width }
                : { borderRightWidth: width }),
        color &&
            (orientation === 'horizontal'
                ? { borderBottomColor: color }
                : { borderRightColor: color }),
    ])} {...rest}/>
    {subHeader && orientation === 'horizontal' ? (<Text style={StyleSheet.flatten([
            styles.subHeader,
            subHeaderStyle,
            inset && styles.leftInset,
        ])}>
        {subHeader}
      </Text>) : null}
  </>);
const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Theme?.colors?.divider,
    },
    leftInset: {
        marginLeft: 72,
    },
    rightInset: {
        marginRight: 72,
    },
    vertical: {
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: Theme?.colors?.divider,
        height: 'auto',
        alignSelf: 'stretch',
    },
    subHeader: {
        includeFontPadding: false,
    },
});
Divider.displayName = 'Divider';
