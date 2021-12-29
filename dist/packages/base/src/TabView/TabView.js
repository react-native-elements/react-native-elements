import React from 'react';
import { Animated, PanResponder, View, StyleSheet, useWindowDimensions, } from 'react-native';
/** Tabs organize content across different screens, data sets, and other interactions.
 * TabView enables swipeable tabs. */
export const TabViewBase = ({ children, onChange, value = 0, animationType = 'spring', animationConfig = {}, }) => {
    const { current: translateX } = React.useRef(new Animated.Value(0));
    const currentIndex = React.useRef(value);
    const length = React.Children.count(children);
    const window = useWindowDimensions();
    const onPanResponderRelease = (_, { dx, dy }) => {
        if ((dx > 0 && currentIndex.current <= 0) ||
            (dx < 0 && currentIndex.current >= length - 1)) {
            return;
        }
        if (Math.abs(dy) > Math.abs(dx)) {
            return;
        }
        const position = dx / -window.width;
        const next = position > value ? Math.ceil(position) : Math.floor(position);
        onChange?.(currentIndex.current + next);
    };
    const { current: panResponder } = React.useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => true,
        onPanResponderRelease,
    }));
    const animate = React.useCallback(() => {
        Animated[animationType](translateX, {
            toValue: value,
            useNativeDriver: true,
            ...animationConfig,
        }).start();
    }, [translateX, value, animationType, animationConfig]);
    React.useEffect(() => {
        animate();
        currentIndex.current = value;
    }, [animate, value]);
    return (<Animated.View testID="tabView-test" style={[
            styles.container,
            {
                width: window.width * length,
                transform: [
                    {
                        translateX: translateX.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -window.width],
                        }),
                    },
                ],
            },
        ]} {...panResponder.panHandlers}>
      {React.Children.map(children, (child) => (<View style={[styles.container, { width: window.width }]}>{child}</View>))}
    </Animated.View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
});
TabViewBase.displayName = 'TabView';
