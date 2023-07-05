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
import React, { useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { View, StyleSheet, Animated, Easing, PanResponder, Platform, } from 'react-native';
import { Rect } from './components/Rect';
import { SliderThumb } from './components/SliderThumb';
const TRACK_SIZE = 4;
const THUMB_SIZE = 40;
const TRACK_STYLE = Platform.select({ web: 0, default: -1 });
const DEFAULT_ANIMATION_CONFIGS = {
    spring: {
        friction: 7,
        tension: 100,
        useNativeDriver: true,
    },
    timing: {
        duration: 150,
        easing: Easing.inOut(Easing.ease),
        delay: 0,
        useNativeDriver: true,
    },
};
const getBoundedValue = (value, maximumValue, minimumValue) => Math.max(Math.min(value, maximumValue), minimumValue);
const handlePanResponderRequestEnd = () => false;
const handleMoveShouldSetPanResponder = () => !TRACK_STYLE;
var SizableVars;
(function (SizableVars) {
    SizableVars["containerSize"] = "containerSize";
    SizableVars["thumbSize"] = "thumbSize";
    SizableVars["trackSize"] = "trackSize";
})(SizableVars || (SizableVars = {}));
var EventTypes;
(function (EventTypes) {
    EventTypes["onSlidingStart"] = "onSlidingStart";
    EventTypes["onValueChange"] = "onValueChange";
    EventTypes["onSlidingComplete"] = "onSlidingComplete";
})(EventTypes || (EventTypes = {}));
export const Slider = (_a) => {
    var { allowTouchTrack = false, animateTransitions, animationConfig, animationType = 'timing', containerStyle, debugTouchArea = false, disabled, maximumTrackTintColor = '#b3b3b3', maximumValue = 1, minimumTrackTintColor = '#3f3f3f', minimumValue = 0, onSlidingComplete, onSlidingStart, onValueChange, orientation = 'horizontal', step = 0, style, thumbProps, thumbStyle, thumbTintColor = 'red', thumbTouchSize = { height: THUMB_SIZE, width: THUMB_SIZE }, trackStyle, value: _propValue = 0 } = _a, other = __rest(_a, ["allowTouchTrack", "animateTransitions", "animationConfig", "animationType", "containerStyle", "debugTouchArea", "disabled", "maximumTrackTintColor", "maximumValue", "minimumTrackTintColor", "minimumValue", "onSlidingComplete", "onSlidingStart", "onValueChange", "orientation", "step", "style", "thumbProps", "thumbStyle", "thumbTintColor", "thumbTouchSize", "trackStyle", "value"]);
    const propValue = getBoundedValue(_propValue, maximumValue, minimumValue);
    const prevPropValue = useRef(propValue);
    const animatedValue = useRef(new Animated.Value(propValue));
    const _previousLeft = useRef(0);
    const gestureStartPosition = useRef(0);
    const [allMeasured, setAllMeasured] = useState(false);
    const [containerSize, setContainerSize] = useState({
        width: 0,
        height: 0,
    });
    const [trackSize, setTrackSize] = useState({ width: 0, height: 0 });
    const [thumbSize, setThumbSize] = useState({ width: 0, height: 0 });
    const isVertical = orientation === 'vertical';
    const handleMeasure = useCallback((name, event) => {
        var _a, _b;
        const varInfo = {
            containerSize: { size: containerSize, setSize: setContainerSize },
            thumbSize: { size: thumbSize, setSize: setThumbSize },
            trackSize: { size: trackSize, setSize: setTrackSize },
        };
        const { size, setSize } = varInfo[name];
        const rect = event.nativeEvent.layout;
        const rectWidth = (_a = rect === null || rect === void 0 ? void 0 : rect.width) !== null && _a !== void 0 ? _a : size.width;
        const rectHeight = (_b = rect === null || rect === void 0 ? void 0 : rect.height) !== null && _b !== void 0 ? _b : size.height;
        const newSize = {
            height: isVertical ? rectWidth : rectHeight,
            width: isVertical ? rectHeight : rectWidth,
        };
        setSize(newSize);
    }, [containerSize, isVertical, thumbSize, trackSize]);
    useEffect(() => setAllMeasured(!!(containerSize.height &&
        containerSize.width &&
        thumbSize.height &&
        thumbSize.width &&
        trackSize.height &&
        trackSize.width)), [
        containerSize.height,
        containerSize.width,
        thumbSize.height,
        thumbSize.width,
        trackSize.height,
        trackSize.width,
    ]);
    const measureContainer = useCallback((event) => handleMeasure(SizableVars.containerSize, event), [handleMeasure]);
    const measureTrack = useCallback((event) => handleMeasure(SizableVars.trackSize, event), [handleMeasure]);
    const measureThumb = useCallback((event) => handleMeasure(SizableVars.thumbSize, event), [handleMeasure]);
    const setCurrentValue = useCallback((v) => animatedValue.current.setValue(v), [animatedValue]);
    const setCurrentValueAnimated = useCallback((v) => Animated[animationType](animatedValue.current, Object.assign(Object.assign(Object.assign({}, DEFAULT_ANIMATION_CONFIGS[animationType]), animationConfig), { toValue: v })).start(), [animationConfig, animationType]);
    useEffect(() => {
        if (prevPropValue.current !== propValue) {
            prevPropValue.current = propValue;
            if (animateTransitions) {
                setCurrentValueAnimated(propValue);
            }
            else {
                setCurrentValue(propValue);
            }
        }
    }, [
        animateTransitions,
        maximumValue,
        minimumValue,
        setCurrentValue,
        setCurrentValueAnimated,
        propValue,
    ]);
    const getValueForTouch = useCallback((location) => {
        const length = containerSize.width - thumbSize.width;
        const ratio = location / length;
        let newValue = ratio * (maximumValue - minimumValue);
        if (step) {
            newValue = Math.round(newValue / step) * step;
        }
        return getBoundedValue(newValue + minimumValue, maximumValue, minimumValue);
    }, [containerSize.width, maximumValue, minimumValue, step, thumbSize.width]);
    const getOnTouchValue = useCallback(({ nativeEvent }) => {
        const location = isVertical
            ? nativeEvent.locationY
            : nativeEvent.locationX;
        return getValueForTouch(location);
    }, [getValueForTouch, isVertical]);
    const getThumbLeft = useCallback((v) => {
        const ratio = (v - minimumValue) / (maximumValue - minimumValue);
        return ratio * (containerSize.width - thumbSize.width);
    }, [containerSize.width, maximumValue, minimumValue, thumbSize.width]);
    const getTouchOverflowSize = useCallback(() => allMeasured
        ? {
            height: Math.max(0, thumbTouchSize.height - containerSize.height),
            width: Math.max(0, thumbTouchSize.width - thumbSize.width),
        }
        : { height: 0, width: 0 }, [
        allMeasured,
        containerSize.height,
        thumbSize.width,
        thumbTouchSize.height,
        thumbTouchSize.width,
    ]);
    const getCurrentValue = useCallback(() => animatedValue.current.__getValue(), []);
    const getThumbTouchRect = useCallback(() => {
        const touchOverflowSize = getTouchOverflowSize();
        const height = touchOverflowSize.height / 2 +
            (containerSize.height - thumbTouchSize.height) / 2;
        const width = touchOverflowSize.width / 2 +
            getThumbLeft(getCurrentValue()) +
            (thumbSize.width - thumbTouchSize.width) / 2;
        return isVertical
            ? new Rect(height, width, thumbTouchSize.width, thumbTouchSize.height)
            : new Rect(width, height, thumbTouchSize.width, thumbTouchSize.height);
    }, [
        containerSize.height,
        getCurrentValue,
        getThumbLeft,
        getTouchOverflowSize,
        isVertical,
        thumbSize.width,
        thumbTouchSize.height,
        thumbTouchSize.width,
    ]);
    const getValue = useCallback((gestureState) => {
        const delta = (isVertical ? gestureState.moveY : gestureState.moveX) -
            gestureStartPosition.current;
        const location = _previousLeft.current + delta;
        return getValueForTouch(location);
    }, [getValueForTouch, isVertical]);
    const fireChangeEvent = useCallback((event) => {
        const v = getCurrentValue();
        if (event === EventTypes.onSlidingStart) {
            onSlidingStart === null || onSlidingStart === void 0 ? void 0 : onSlidingStart(v);
        }
        else if (event === EventTypes.onSlidingComplete) {
            onSlidingComplete === null || onSlidingComplete === void 0 ? void 0 : onSlidingComplete(v);
        }
        else if (event === EventTypes.onValueChange) {
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(v);
        }
    }, [getCurrentValue, onSlidingComplete, onSlidingStart, onValueChange]);
    const handlePanResponderGrant = useCallback((e, gestureState) => {
        _previousLeft.current = getThumbLeft(getCurrentValue());
        gestureStartPosition.current = isVertical
            ? gestureState.y0
            : gestureState.x0;
        fireChangeEvent(EventTypes.onSlidingStart);
    }, [fireChangeEvent, getCurrentValue, getThumbLeft, isVertical]);
    const handlePanResponderMove = useCallback((_, gestureState) => {
        if (!disabled) {
            setCurrentValue(getValue(gestureState));
            fireChangeEvent(EventTypes.onValueChange);
        }
    }, [disabled, fireChangeEvent, getValue, setCurrentValue]);
    const handlePanResponderEnd = useCallback(() => {
        if (!disabled) {
            fireChangeEvent(EventTypes.onSlidingComplete);
        }
    }, [disabled, fireChangeEvent]);
    const thumbHitTest = useCallback(({ nativeEvent }) => {
        const thumbTouchRect = getThumbTouchRect();
        return thumbTouchRect.containsPoint(nativeEvent.locationX, nativeEvent.locationY);
    }, [getThumbTouchRect]);
    const handleStartShouldSetPanResponder = useCallback((e) => {
        if (!allowTouchTrack) {
            return thumbHitTest(e);
        }
        setCurrentValue(getOnTouchValue(e));
        fireChangeEvent(EventTypes.onValueChange);
        return true;
    }, [
        allowTouchTrack,
        fireChangeEvent,
        getOnTouchValue,
        setCurrentValue,
        thumbHitTest,
    ]);
    const getTouchOverflowStyle = useCallback(() => {
        const { width, height } = getTouchOverflowSize();
        const touchOverflowStyle = {};
        const verticalMargin = -height / 2;
        touchOverflowStyle.marginTop = verticalMargin;
        touchOverflowStyle.marginBottom = verticalMargin;
        const horizontalMargin = -width / 2;
        touchOverflowStyle.marginLeft = horizontalMargin;
        touchOverflowStyle.marginRight = horizontalMargin;
        if (debugTouchArea === true) {
            touchOverflowStyle.backgroundColor = 'orange';
            touchOverflowStyle.opacity = 0.5;
        }
        return touchOverflowStyle;
    }, [debugTouchArea, getTouchOverflowSize]);
    const renderDebugThumbTouchRect = useCallback((thumbLeft) => {
        const thumbTouchRect = getThumbTouchRect();
        const positionStyle = {
            left: thumbLeft,
            top: thumbTouchRect.y,
            width: thumbTouchRect.width,
            height: thumbTouchRect.height,
        };
        return React.createElement(Animated.View, { style: positionStyle, pointerEvents: "none" });
    }, [getThumbTouchRect]);
    const getMinimumTrackStyles = useCallback((thumbStart) => {
        const minimumTrackStyle = {
            position: 'absolute',
        };
        if (!allMeasured) {
            minimumTrackStyle.height = 0;
            minimumTrackStyle.width = 0;
        }
        else if (isVertical) {
            minimumTrackStyle.height = Animated.add(thumbStart, thumbSize.height / 2);
            minimumTrackStyle.marginLeft = trackSize.width * TRACK_STYLE;
        }
        else {
            minimumTrackStyle.width = Animated.add(thumbStart, thumbSize.width / 2);
            minimumTrackStyle.marginTop = trackSize.height * TRACK_STYLE;
        }
        return minimumTrackStyle;
    }, [
        allMeasured,
        isVertical,
        thumbSize.height,
        thumbSize.width,
        trackSize.height,
        trackSize.width,
    ]);
    const panResponder = useMemo(() => PanResponder.create({
        onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: handleMoveShouldSetPanResponder,
        onPanResponderGrant: handlePanResponderGrant,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderRelease: handlePanResponderEnd,
        onPanResponderTerminationRequest: handlePanResponderRequestEnd,
        onPanResponderTerminate: handlePanResponderEnd,
    }), [
        handleStartShouldSetPanResponder,
        handlePanResponderGrant,
        handlePanResponderMove,
        handlePanResponderEnd,
    ]);
    const mainStyles = containerStyle !== null && containerStyle !== void 0 ? containerStyle : styles;
    const appliedTrackStyle = StyleSheet.flatten([styles.track, trackStyle]);
    const thumbStart = animatedValue.current.interpolate({
        inputRange: [minimumValue, maximumValue],
        outputRange: [0, containerSize.width - thumbSize.width],
    });
    const minimumTrackStyle = Object.assign(Object.assign({}, getMinimumTrackStyles(thumbStart)), { backgroundColor: minimumTrackTintColor });
    const touchOverflowStyle = getTouchOverflowStyle();
    return (React.createElement(View, Object.assign({ testID: "RNE__Slider_Container" }, other, { style: StyleSheet.flatten([
            isVertical
                ? mainStyles.containerVertical
                : mainStyles.containerHorizontal,
            style,
        ]), onLayout: measureContainer, accessibilityRole: "adjustable", accessibilityValue: {
            min: minimumValue,
            max: maximumValue,
            now: getCurrentValue(),
        } }),
        React.createElement(View, { testID: "RNE__Slider_Track_maximum", style: StyleSheet.flatten([
                mainStyles.track,
                isVertical ? mainStyles.trackVertical : mainStyles.trackHorizontal,
                appliedTrackStyle,
                { backgroundColor: maximumTrackTintColor },
            ]), onLayout: measureTrack }),
        React.createElement(Animated.View, { testID: "RNE__Slider_Track_minimum", style: StyleSheet.flatten([
                mainStyles.track,
                isVertical ? mainStyles.trackVertical : mainStyles.trackHorizontal,
                appliedTrackStyle,
                minimumTrackStyle,
            ]) }),
        React.createElement(SliderThumb, Object.assign({ isVisible: allMeasured, onLayout: measureThumb, style: thumbStyle, color: thumbTintColor, start: thumbStart, vertical: isVertical }, thumbProps)),
        React.createElement(View, Object.assign({ testID: "RNE__Slider_TouchArea", style: StyleSheet.flatten([styles.touchArea, touchOverflowStyle]) }, panResponder.panHandlers), debugTouchArea === true && renderDebugThumbTouchRect(thumbStart))));
};
Slider.defaultProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    minimumTrackTintColor: '#3f3f3f',
    maximumTrackTintColor: '#b3b3b3',
    allowTouchTrack: false,
    thumbTintColor: 'red',
    thumbTouchSize: { width: THUMB_SIZE, height: THUMB_SIZE },
    debugTouchArea: false,
    animationType: 'timing',
    orientation: 'horizontal',
};
const styles = StyleSheet.create({
    containerHorizontal: {
        height: 40,
        justifyContent: 'center',
    },
    containerVertical: {
        width: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    track: {
        borderRadius: TRACK_SIZE / 2,
    },
    trackHorizontal: {
        height: TRACK_SIZE,
    },
    trackVertical: {
        flex: 1,
        width: TRACK_SIZE,
    },
    touchArea: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    debugThumbTouchArea: {
        position: 'absolute',
        backgroundColor: 'green',
        opacity: 0.5,
    },
});
Slider.displayName = 'Slider';
