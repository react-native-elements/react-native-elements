import React, { useCallback, useEffect } from 'react';
import { View, Text, Animated, PanResponder, Image, StyleSheet, Platform, Dimensions, } from 'react-native';
const STAR_IMAGE = require('./images/star.png');
const HEART_IMAGE = require('./images/heart.png');
const ROCKET_IMAGE = require('./images/rocket.png');
const BELL_IMAGE = require('./images/bell.png');
const TYPES = {
    star: {
        source: STAR_IMAGE,
        color: '#f1c40f',
        backgroundColor: 'white',
    },
    heart: {
        source: HEART_IMAGE,
        color: '#e74c3c',
        backgroundColor: 'white',
    },
    rocket: {
        source: ROCKET_IMAGE,
        color: '#2ecc71',
        backgroundColor: 'white',
    },
    bell: {
        source: BELL_IMAGE,
        color: '#f39c12',
        backgroundColor: 'white',
    },
};
const SwipeRating = ({ type = 'star', ratingImage = STAR_IMAGE, ratingColor, ratingBackgroundColor = 'white', ratingTextColor, ratingCount = 5, showReadOnlyText = false, imageSize = 50, minValue = 0, jumpValue = 0, onStartRating = () => { }, onSwipeRating = () => { }, onFinishRating = () => { }, fractions = 0, readonly = false, style, showRating = false, startingValue = ratingCount / 2, tintColor, }) => {
    var _a;
    const textColor = ratingTextColor || (type === 'custom' ? ratingColor : (_a = TYPES[type]) === null || _a === void 0 ? void 0 : _a.color);
    const position = React.useRef(new Animated.Value(0)).current;
    const ratingRef = React.useRef(null);
    const ratingBackdropValue = React.useRef(0);
    const centerX = React.useRef(0);
    const [currentRatingValue, setCurrentRatingValue] = React.useState(startingValue);
    const safeFractions = Math.max(0, Math.min(20, fractions));
    const setCurrentRating = React.useCallback((rating) => {
        const initialRating = ratingCount / 2;
        let localValue = null;
        if (rating > ratingCount) {
            localValue = (ratingCount * imageSize) / 2;
        }
        else if (rating < 0) {
            localValue = (-ratingCount * imageSize) / 2;
        }
        else if (rating < ratingCount / 2 || rating > ratingCount / 2) {
            localValue = (rating - initialRating) * imageSize;
        }
        else {
            localValue = 0;
        }
        ratingBackdropValue.current = localValue;
        position.setValue(localValue);
    }, [ratingCount, imageSize, position]);
    useEffect(() => {
        setCurrentRating(startingValue);
        if (fractions !== undefined && (fractions < 0 || fractions > 20)) {
            console.error(`[SwipeRating] fractions must be between 0-20, received ${fractions}`);
        }
    }, [startingValue, setCurrentRating, fractions]);
    useEffect(() => {
        if (type === 'custom') {
            const custom = {
                source: ratingImage,
                color: ratingColor,
                backgroundColor: ratingBackgroundColor,
            };
            TYPES.custom = custom;
        }
    }, [type, ratingImage, ratingColor, ratingBackgroundColor]);
    const getCurrentRating = useCallback((localValue) => {
        const localStartingValue = ratingCount / 2;
        let currentRating = minValue ? minValue : 0;
        if (localValue > (ratingCount * imageSize) / 2) {
            currentRating = ratingCount;
        }
        else if (localValue < (-ratingCount * imageSize) / 2) {
            currentRating = minValue ? minValue : 0;
        }
        else if (localValue <= imageSize || localValue > imageSize) {
            const diff = localValue / imageSize;
            currentRating = localStartingValue + diff;
            currentRating = safeFractions
                ? Number(currentRating.toFixed(safeFractions))
                : Math.ceil(currentRating);
        }
        else {
            currentRating = safeFractions
                ? Number(localStartingValue.toFixed(safeFractions))
                : Math.ceil(localStartingValue);
        }
        if (jumpValue > 0 && jumpValue < ratingCount) {
            return Math.ceil(currentRating * (1 / jumpValue)) / (1 / jumpValue);
        }
        else {
            return currentRating;
        }
    }, [ratingCount, minValue, imageSize, jumpValue, safeFractions]);
    useEffect(() => {
        const listenerId = position.addListener(({ value }) => {
            const rating = getCurrentRating(value);
            setCurrentRatingValue(rating);
        });
        return () => {
            position.removeListener(listenerId);
        };
    }, [position, getCurrentRating]);
    const panResponderOnGrant = useCallback((event, gesture) => {
        const tapPositionX = gesture.x0 - centerX.current + gesture.dx;
        ratingBackdropValue.current = tapPositionX;
        position.setValue(tapPositionX);
        const rating = getCurrentRating(tapPositionX);
        onStartRating(rating);
    }, []);
    const panResponderOnMove = useCallback((event, gesture) => {
        const tapPositionX = gesture.x0 - centerX.current + gesture.dx;
        ratingBackdropValue.current = tapPositionX;
        position.setValue(tapPositionX);
        const rating = getCurrentRating(tapPositionX);
        onSwipeRating(rating);
    }, []);
    const panResponderOnRelease = useCallback(() => {
        const rating = getCurrentRating(ratingBackdropValue.current);
        if (rating >= minValue) {
            if (!fractions) {
                setCurrentRating(rating);
            }
            onFinishRating(rating);
        }
    }, []);
    const panResponder = React.useMemo(() => PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: panResponderOnGrant,
        onPanResponderMove: panResponderOnMove,
        onPanResponderRelease: panResponderOnRelease,
    }), [panResponderOnGrant, panResponderOnMove, panResponderOnRelease]);
    const handleLayoutChange = () => {
        ratingRef.current.measure((fx, fy, width, height, px) => {
            const halfWidth = width / 2;
            const pageXWithinWindow = px % Dimensions.get('window').width;
            centerX.current = pageXWithinWindow + halfWidth;
        });
    };
    const getPrimaryViewStyle = () => {
        var _a;
        const color = type === 'custom' ? ratingColor : (_a = TYPES[type]) === null || _a === void 0 ? void 0 : _a.color;
        const width = position.interpolate({
            inputRange: [
                -ratingCount * (imageSize / 2),
                0,
                ratingCount * (imageSize / 2),
            ],
            outputRange: [0, (ratingCount * imageSize) / 2, ratingCount * imageSize],
            extrapolate: 'clamp',
        });
        return {
            backgroundColor: color,
            width,
            height: width ? imageSize : 0,
        };
    };
    const getSecondaryViewStyle = () => {
        var _a;
        const backgroundColor = type === 'custom' ? ratingBackgroundColor : (_a = TYPES[type]) === null || _a === void 0 ? void 0 : _a.backgroundColor;
        const width = position.interpolate({
            inputRange: [
                -ratingCount * (imageSize / 2),
                0,
                ratingCount * (imageSize / 2),
            ],
            outputRange: [ratingCount * imageSize, (ratingCount * imageSize) / 2, 0],
            extrapolate: 'clamp',
        });
        return {
            backgroundColor,
            width,
            height: width ? imageSize : 0,
        };
    };
    const renderRatings = React.useMemo(() => {
        var _a;
        const source = type === 'custom' ? ratingImage : (_a = TYPES[type]) === null || _a === void 0 ? void 0 : _a.source;
        return Array.from({ length: ratingCount }, (_, index) => (React.createElement(View, { key: index, style: styles.starsWrapper, testID: "RNEUI__Star" },
            React.createElement(Image, { source: source, testID: "RNEUI__Star-image", style: {
                    width: imageSize,
                    height: imageSize,
                    tintColor: tintColor,
                } }))));
    }, [ratingCount, imageSize, type, ratingImage, tintColor]);
    return (React.createElement(View, { pointerEvents: readonly ? 'none' : 'auto', style: style, testID: "RNEUI__SwipeRating" },
        showRating && (React.createElement(View, { style: styles.showRatingView, testID: "RNEUI__SwipeRating-showRating" },
            React.createElement(View, { style: styles.ratingView },
                React.createElement(Text, { style: [styles.ratingText, { color: textColor }] },
                    "Rating:",
                    ' '),
                React.createElement(Text, { style: [styles.currentRatingText, { color: textColor }] }, currentRatingValue),
                React.createElement(Text, { style: [styles.maxRatingText, { color: textColor }] },
                    "/",
                    ratingCount)),
            React.createElement(View, null, readonly && showReadOnlyText && (React.createElement(Text, { style: [styles.readonlyLabel, { color: textColor }] }, "(readonly)"))))),
        React.createElement(View, Object.assign({ style: styles.starsWrapper }, panResponder.panHandlers, { testID: "RNEUI__SwipeRating-pan" }),
            React.createElement(View, { style: styles.starsInsideWrapper, onLayout: () => {
                    handleLayoutChange();
                }, ref: ratingRef },
                React.createElement(Animated.View, { style: [getPrimaryViewStyle()] }),
                React.createElement(Animated.View, { style: [getSecondaryViewStyle()] })),
            renderRatings)));
};
const styles = StyleSheet.create({
    starsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starsInsideWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    showRatingView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
    },
    ratingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
    },
    ratingText: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : undefined,
        color: '#34495e',
    },
    readonlyLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : undefined,
        color: '#34495a',
    },
    currentRatingText: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : undefined,
    },
    maxRatingText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : undefined,
        color: '#34495e',
    },
});
export default SwipeRating;
