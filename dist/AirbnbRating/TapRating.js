import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Star from './components/Star';
const TapRating = ({ count = 5, reviews = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'], showRating = true, reviewColor = 'rgba(230, 196, 46, 1)', reviewSize = 25, size: reviewImageSize = 40, defaultRating = 3, starContainerStyle, ratingContainerStyle, onFinishRating, selectedColor, unSelectedColor, isDisabled = false, starImage, starStyle, }) => {
    const [position, setPosition] = useState(defaultRating);
    useEffect(() => {
        if (defaultRating === null || defaultRating === undefined) {
            setPosition(3);
        }
        else {
            setPosition(defaultRating);
        }
    }, [defaultRating]);
    const renderStars = (rating_array) => {
        return rating_array.map((star) => star);
    };
    const starSelectedInPosition = (selectedPosition) => {
        if (typeof onFinishRating === 'function') {
            onFinishRating(selectedPosition);
        }
        setPosition(selectedPosition);
    };
    const rating_array = [];
    for (let index = 0; index < count; index++) {
        rating_array.push(React.createElement(Star, { key: index, position: index + 1, starSelectedInPosition: starSelectedInPosition, fill: position >= index + 1, isDisabled: isDisabled, selectedColor: selectedColor, unSelectedColor: unSelectedColor, size: reviewImageSize, starImage: starImage, starStyle: starStyle }));
    }
    return (React.createElement(View, { style: StyleSheet.flatten([styles.ratingContainer, ratingContainerStyle]), testID: "RNEUI__TapRating" },
        showRating && (React.createElement(Text, { style: StyleSheet.flatten([
                styles.reviewText,
                { fontSize: reviewSize, color: reviewColor },
            ]), testID: "RNEUI__TapRating-showRating" }, reviews[position - 1])),
        React.createElement(View, { style: StyleSheet.flatten([styles.starContainer, starContainerStyle]), testID: "RNEUI__TapRating-starContainer" }, renderStars(rating_array))));
};
const styles = StyleSheet.create({
    ratingContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewText: {
        fontWeight: 'bold',
        margin: 10,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default TapRating;
