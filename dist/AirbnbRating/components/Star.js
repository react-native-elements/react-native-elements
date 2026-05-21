import React from 'react';
import { StyleSheet, Animated, TouchableOpacity, } from 'react-native';
const STAR_IMAGE = require('../images/airbnb-star.png');
const STAR_SELECTED_IMAGE = require('../images/airbnb-star-selected.png');
const STAR_SIZE = 40;
const Star = ({ starImage = STAR_IMAGE, fill, size, selectedColor = '#f1c40f', unSelectedColor = '#BDC3C7', isDisabled, starStyle, position = 1, starSelectedInPosition = () => { }, }) => {
    const springValue = React.useRef(new Animated.Value(1)).current;
    const spring = () => {
        springValue.setValue(1.2);
        Animated.spring(springValue, {
            toValue: 1,
            friction: 2,
            tension: 1,
            useNativeDriver: true,
        }).start();
        starSelectedInPosition(position);
    };
    const starSource = fill && selectedColor === null ? STAR_SELECTED_IMAGE : starImage;
    return (React.createElement(TouchableOpacity, { activeOpacity: 1, onPress: spring, disabled: isDisabled, testID: "RNEUI__Star" },
        React.createElement(Animated.Image, { source: starSource, testID: "RNEUI__Star-image", style: StyleSheet.flatten([
                styles.starStyle,
                {
                    tintColor: fill && selectedColor ? selectedColor : unSelectedColor,
                    width: size || STAR_SIZE,
                    height: size || STAR_SIZE,
                    transform: [{ scale: springValue }],
                },
                starStyle && starStyle,
            ]) })));
};
export default Star;
const styles = StyleSheet.create({
    starStyle: {
        margin: 3,
    },
});
