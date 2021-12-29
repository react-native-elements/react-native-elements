import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import Button from '../Button';
/** A floating action button (FAB) performs the primary, or most common, action on a screen.
 * It appears in front of all screen content, typically as a circular shape with an icon in its center.
 * Also receives all [Button](https://reactnativeelements.com/docs/button#props) props. */
export const FAB = ({ color, size = 'large', visible = true, disabled, upperCase, theme, style, titleStyle, buttonStyle, containerStyle, iconContainerStyle, placement, ...rest }) => {
    const { current: animation } = React.useRef(new Animated.Value(Number(visible)));
    React.useEffect(() => {
        Animated.timing(animation, {
            toValue: Number(visible),
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [animation, visible]);
    return (<Animated.View style={StyleSheet.flatten([
            {
                opacity: animation,
                transform: [{ scale: animation }],
            },
            styles.content,
            placement && {
                [placement]: 0,
                position: 'absolute',
                margin: 16,
                bottom: 0,
            },
            style,
        ])}>
      <Button buttonStyle={StyleSheet.flatten([
            rest.title
                ? styles.extendedLabel
                : size === 'small'
                    ? styles.smallFAB
                    : styles.largeFAB,
            {
                backgroundColor: color || theme?.colors?.secondary,
            },
            buttonStyle,
        ])} iconContainerStyle={[
            rest.title
                ? {}
                : size === 'small'
                    ? styles.smallFAB
                    : styles.largeFAB,
            iconContainerStyle,
        ]} containerStyle={StyleSheet.flatten([
            styles.container,
            disabled && styles.disabled,
            containerStyle,
        ])} 
    /** For Extended FAB */
    titleStyle={[
            styles.label,
            { color: theme?.colors?.white },
            upperCase && styles.upperCaseLabel,
            titleStyle,
        ]} {...rest} {...{ disabled, theme }}/>
    </Animated.View>);
};
const styles = StyleSheet.create({
    container: {
        elevation: 4,
        borderRadius: 28,
    },
    largeFAB: {
        height: 56,
        width: 56,
        padding: 16,
    },
    smallFAB: {
        height: 40,
        width: 40,
        padding: 8,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
    },
    label: {
        marginHorizontal: 8,
    },
    upperCaseLabel: {
        textTransform: 'uppercase',
    },
    extendedLabel: {
        height: 48,
        paddingHorizontal: 16,
    },
    disabled: {
        elevation: 0,
    },
});
FAB.displayName = 'FAB';
