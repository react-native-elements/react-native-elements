import Color from 'color';
import React from 'react';
import { View, Platform, StyleSheet, Pressable, } from 'react-native';
import { normalizeText, color, androidRipple, } from '../helpers';
import Text from '../Text';
/** ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.
 * Use a ButtonGroup to offer choices that are closely related but mutually exclusive.
 * This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://reactnative.dev/docs/touchablehighlight.html). */
export const ButtonGroup = ({ Component = Pressable, pressableProps, buttons, onPress = () => null, onLongPress, onPressIn, onPressOut, selectedIndex = null, selectedIndexes = [], selectMultiple = false, containerStyle, innerBorderStyle, buttonStyle, buttonContainerStyle, textStyle, selectedTextStyle, selectedButtonStyle, activeOpacity, onHideUnderlay, onShowUnderlay, setOpacityTo, disabled = false, disabledStyle, disabledTextStyle, disabledSelectedStyle, disabledSelectedTextStyle, vertical = false, theme, underlayColor = theme?.colors?.primary, ...rest }) => {
    let innerBorderWidth = 1;
    if (innerBorderStyle &&
        Object.prototype.hasOwnProperty.call(innerBorderStyle, 'width')) {
        innerBorderWidth = innerBorderStyle.width;
    }
    return (<View testID="RNE__ButtonGroupContainer" {...rest} style={StyleSheet.flatten([
            styles.container,
            vertical && styles.verticalContainer,
            containerStyle && containerStyle,
        ])}>
      {buttons?.map((button, i) => {
            const isSelected = selectedIndex === i || selectedIndexes.includes(i);
            const isDisabled = disabled === true ||
                (Array.isArray(disabled) && disabled.includes(i));
            return (<View key={i} style={StyleSheet.flatten([
                    styles.button,
                    vertical && styles.verticalComponent,
                    i !== buttons.length - 1 &&
                        (vertical
                            ? {
                                borderBottomWidth: innerBorderWidth,
                                borderBottomColor: (innerBorderStyle && innerBorderStyle.color) ||
                                    theme?.colors?.grey4,
                            }
                            : {
                                borderRightWidth: innerBorderWidth,
                                borderRightColor: (innerBorderStyle && innerBorderStyle.color) ||
                                    theme?.colors?.grey4,
                            }),
                    buttonContainerStyle,
                ])}>
            <Component testID="RNE__ButtonGroupItem" accessibilityState={{
                    disabled: isDisabled,
                }} activeOpacity={activeOpacity} setOpacityTo={setOpacityTo} onHideUnderlay={onHideUnderlay} onShowUnderlay={onShowUnderlay} disabled={isDisabled} onPress={() => {
                    if (selectMultiple) {
                        if (selectedIndexes.includes(i)) {
                            onPress(selectedIndexes.filter((index) => index !== i));
                        }
                        else {
                            onPress([...selectedIndexes, i]);
                        }
                    }
                    else {
                        onPress(i);
                    }
                }} style={styles.button} {...{
                android_ripple: androidRipple(Color(underlayColor).alpha(activeOpacity).rgb().toString()),
                onPressIn,
                onPressOut,
                onLongPress,
                ...pressableProps,
            }}>
              <View style={StyleSheet.flatten([
                    styles.textContainer,
                    buttonStyle && buttonStyle,
                    isSelected && {
                        backgroundColor: theme?.colors?.primary,
                    },
                    isSelected && selectedButtonStyle && selectedButtonStyle,
                    isDisabled && styles.disabled,
                    isDisabled && disabledStyle,
                    isDisabled &&
                        isSelected && {
                        backgroundColor: theme?.colors?.disabled,
                    },
                    isDisabled && isSelected && disabledSelectedStyle,
                ])}>
                {button.element ? (<button.element isSelected={isSelected}/>) : (<Text testID="buttonGroupItemText" style={StyleSheet.flatten([
                        {
                            fontSize: normalizeText(13),
                            color: theme?.colors?.grey2,
                            ...Platform.select({
                                android: {},
                                default: {
                                    fontWeight: '500',
                                },
                            }),
                        },
                        textStyle && textStyle,
                        isSelected && { color: '#fff' },
                        isSelected && selectedTextStyle,
                        isDisabled && {
                            color: color(theme?.colors?.disabled)
                                .darken(0.3)
                                .toString(),
                        },
                        isDisabled && disabledTextStyle,
                        isDisabled && isSelected && disabledSelectedTextStyle,
                    ])}>
                    {button}
                  </Text>)}
              </View>
            </Component>
          </View>);
        })}
    </View>);
};
const styles = StyleSheet.create({
    button: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: 40,
    },
    verticalContainer: {
        flexDirection: 'column',
        height: null,
    },
    verticalComponent: {
        height: 40,
    },
    disabled: {
        backgroundColor: 'transparent',
    },
});
ButtonGroup.displayName = 'ButtonGroup';
