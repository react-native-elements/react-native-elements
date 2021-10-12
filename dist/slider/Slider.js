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
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Easing, PanResponder, Platform, } from 'react-native';
import { withTheme } from '../config';
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
const getBoundedValue = (value, maximumValue, minimumValue) => {
    return Math.max(Math.min(value, maximumValue), minimumValue);
};
class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    containsPoint(x, y) {
        return (x >= this.x &&
            y >= this.y &&
            x <= this.x + this.width &&
            y <= this.y + this.height);
    }
}
const Slider = (props) => {
    const _previousLeft = useRef(0);
    const [allMeasured, setAllMeasured] = useState(false);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [trackSize, setTrackSize] = useState({ width: 0, height: 0 });
    const [thumbSize, setThumbSize] = useState({ width: 0, height: 0 });
    const containerSizeValue = useRef(containerSize);
    const trackSizeValue = useRef(trackSize);
    const thumbSizeValue = useRef(thumbSize);
    const isVertical = useRef(props.orientation === 'vertical');
    const [value] = useState(new Animated.Value(getBoundedValue(props.value || 0, props.maximumValue || 1, props.minimumValue || 0)));
    useEffect(() => {
        containerSizeValue.current = containerSize;
    }, [containerSize]);
    useEffect(() => {
        trackSizeValue.current = trackSize;
    }, [trackSize]);
    useEffect(() => {
        thumbSizeValue.current = thumbSize;
    }, [thumbSize]);
    const measureContainer = (x) => {
        handleMeasure('containerSize', x);
    };
    const measureTrack = (x) => {
        handleMeasure('trackSize', x);
    };
    const measureThumb = (x) => {
        handleMeasure('thumbSize', x);
    };
    const handleMeasure = (name, x) => {
        const { width: layoutWidth, height: layoutHeight } = x.nativeEvent.layout;
        const width = isVertical.current ? layoutHeight : layoutWidth;
        const height = isVertical.current ? layoutWidth : layoutHeight;
        const size = { width, height };
        if (name === 'containerSize') {
            setContainerSize(size);
        }
        if (name === 'thumbSize') {
            setThumbSize(size);
        }
        if (name === 'trackSize') {
            setTrackSize(size);
        }
        if (thumbSize && trackSize && containerSize) {
            setAllMeasured(true);
        }
    };
    const currentPropValue = useRef(props.value || 0);
    const prevPropValue = useRef(0);
    const didMountRef = useRef(false);
    const setCurrentValue = React.useCallback((value1) => {
        value.setValue(value1);
    }, [value]);
    React.useEffect(() => {
        setCurrentValue(props.value || 0);
    }, [props.value, setCurrentValue]);
    useEffect(() => {
        prevPropValue.current = props.value || 0;
        if (didMountRef.current) {
            const newValue = getBoundedValue(props.value || 0, props.maximumValue || 1, props.minimumValue || 0);
            if (prevPropValue.current !== newValue) {
                if (props.animateTransitions) {
                    setCurrentValueAnimated(new Animated.Value(newValue));
                }
                else {
                    setCurrentValue(newValue);
                }
            }
        }
        else {
            didMountRef.current = true;
        }
    });
    const setCurrentValueAnimated = (value1) => {
        const { animationType } = props;
        const animationConfig = Object.assign({}, DEFAULT_ANIMATION_CONFIGS[animationType || 'timing'], props.animationConfig, {
            toValue: value1,
        });
        Animated[animationType || 'timing'](value, animationConfig).start();
    };
    const handleMoveShouldSetPanResponder = () => {
        // Should we become active when the user moves a touch over the thumb?
        if (!TRACK_STYLE) {
            return true;
        }
        return false;
    };
    const handlePanResponderGrant = () => {
        _previousLeft.current = getThumbLeft(currentPropValue.current);
        fireChangeEvent('onSlidingStart');
    };
    const handlePanResponderMove = (_, gestureState) => {
        if (props.disabled) {
            return;
        }
        setCurrentValue(getValue(gestureState));
        fireChangeEvent('onValueChange');
    };
    const handlePanResponderRequestEnd = () => {
        // Should we allow another component to take over this pan?
        return false;
    };
    const handlePanResponderEnd = (_, gestureState) => {
        if (props.disabled) {
            return;
        }
        setCurrentValue(getValue(gestureState));
        fireChangeEvent('onSlidingComplete');
    };
    const thumbHitTest = ({ nativeEvent }) => {
        const thumbTouchRect = getThumbTouchRect();
        return thumbTouchRect.containsPoint(nativeEvent.locationX, nativeEvent.locationY);
    };
    const handleStartShouldSetPanResponder = (e /* gestureState: Object */) => {
        // Should we become active when the user presses down on the thumb?
        if (!props.allowTouchTrack && !TRACK_STYLE) {
            return thumbHitTest(e);
        }
        if (!trackStyle) {
            setCurrentValue(getOnTouchValue(e));
        }
        fireChangeEvent('onValueChange');
        return true;
    };
    const fireChangeEvent = (event) => {
        var _a;
        if (props === null || props === void 0 ? void 0 : props[event]) {
            (_a = props === null || props === void 0 ? void 0 : props[event]) === null || _a === void 0 ? void 0 : _a.call(props, currentPropValue.current);
        }
    };
    // get value of where some touched on slider.
    const getOnTouchValue = ({ nativeEvent }) => {
        const location = isVertical.current
            ? nativeEvent.locationY
            : nativeEvent.locationX;
        return getValueForTouch(location);
    };
    const getValueForTouch = (location) => {
        const length = containerSizeValue.current.width - thumbSizeValue.current.width;
        const ratio = location / length;
        let newValue = ratio * ((props.maximumValue || 1) - (props.minimumValue || 0));
        if (props.step) {
            newValue = Math.round(newValue / props.step) * props.step;
        }
        return getBoundedValue(newValue + (props.minimumValue || 0), props.maximumValue || 1, props.minimumValue || 0);
    };
    const getTouchOverflowSize = () => {
        const { thumbTouchSize } = props;
        const size = {};
        if (allMeasured === true) {
            size.width = Math.max(0, ((thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.width) || THUMB_SIZE) - thumbSizeValue.current.width);
            size.height = Math.max(0, ((thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.height) || THUMB_SIZE) -
                containerSizeValue.current.height);
        }
        return size;
    };
    const getTouchOverflowStyle = () => {
        const { width, height } = getTouchOverflowSize();
        const touchOverflowStyle = {};
        if (width !== undefined && height !== undefined) {
            const verticalMargin = -height / 2;
            touchOverflowStyle.marginTop = verticalMargin;
            touchOverflowStyle.marginBottom = verticalMargin;
            const horizontalMargin = -width / 2;
            touchOverflowStyle.marginLeft = horizontalMargin;
            touchOverflowStyle.marginRight = horizontalMargin;
        }
        if (props.debugTouchArea === true) {
            touchOverflowStyle.backgroundColor = 'orange';
            touchOverflowStyle.opacity = 0.5;
        }
        return touchOverflowStyle;
    };
    const getValue = (gestureState) => {
        const location = _previousLeft.current +
            (isVertical.current ? gestureState.dy : gestureState.dx);
        return getValueForTouch(location);
    };
    React.useEffect(() => {
        let listenerID = value.addListener((obj) => {
            currentPropValue.current = obj.value;
        });
        return () => {
            value.removeListener(listenerID);
        };
    });
    const getRatio = (value1) => {
        return ((value1 - (props.minimumValue || 0)) /
            ((props.maximumValue || 1) - (props.minimumValue || 0)));
    };
    const getThumbLeft = (value1) => {
        const ratio = getRatio(value1);
        return (ratio * (containerSizeValue.current.width - thumbSizeValue.current.width));
    };
    const getThumbTouchRect = () => {
        const { thumbTouchSize } = props;
        const touchOverflowSize = getTouchOverflowSize();
        const height = (touchOverflowSize === null || touchOverflowSize === void 0 ? void 0 : touchOverflowSize.height) / 2 +
            (containerSizeValue.current.height -
                ((thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.height) || THUMB_SIZE)) /
                2;
        const width = touchOverflowSize.width / 2 +
            getThumbLeft(currentPropValue.current) +
            (thumbSizeValue.current.width - ((thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.width) || THUMB_SIZE)) /
                2;
        if (isVertical.current) {
            return new Rect(height, width, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.width) || THUMB_SIZE, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.height) || THUMB_SIZE);
        }
        return new Rect(width, height, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.width) || THUMB_SIZE, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.height) || THUMB_SIZE);
    };
    const renderDebugThumbTouchRect = (thumbLeft) => {
        const thumbTouchRect = getThumbTouchRect();
        const positionStyle = {
            left: thumbLeft,
            top: thumbTouchRect.y,
            width: thumbTouchRect.width,
            height: thumbTouchRect.height,
        };
        return <Animated.View style={positionStyle} pointerEvents="none"/>;
    };
    const getMinimumTrackStyles = (thumbStart) => {
        const minimumTrackStyle = {
            position: 'absolute',
        };
        if (isVertical.current) {
            minimumTrackStyle.height = Animated.add(thumbStart, thumbSizeValue.current.height / 2);
            minimumTrackStyle.marginLeft = trackSize.width * TRACK_STYLE;
        }
        else {
            minimumTrackStyle.width = Animated.add(thumbStart, thumbSizeValue.current.width / 2);
            minimumTrackStyle.marginTop = trackSize.height * TRACK_STYLE;
        }
        return minimumTrackStyle;
    };
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: handleMoveShouldSetPanResponder,
        onPanResponderGrant: handlePanResponderGrant,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderRelease: handlePanResponderEnd,
        onPanResponderTerminationRequest: handlePanResponderRequestEnd,
        onPanResponderTerminate: handlePanResponderEnd,
    })).current;
    const { minimumValue, maximumValue, minimumTrackTintColor, maximumTrackTintColor, thumbTintColor, containerStyle, style, trackStyle, thumbStyle, thumbProps, debugTouchArea } = props, other = __rest(props, ["minimumValue", "maximumValue", "minimumTrackTintColor", "maximumTrackTintColor", "thumbTintColor", "containerStyle", "style", "trackStyle", "thumbStyle", "thumbProps", "debugTouchArea"]);
    const mainStyles = containerStyle || styles;
    const appliedTrackStyle = StyleSheet.flatten([styles.track, trackStyle]);
    const thumbStart = value.interpolate({
        inputRange: [minimumValue || 0, maximumValue || 1],
        outputRange: [0, containerSize.width - thumbSize.width],
    });
    const valueVisibleStyle = {};
    if (!allMeasured) {
        valueVisibleStyle.height = 0;
        valueVisibleStyle.width = 0;
    }
    const minimumTrackStyle = Object.assign(Object.assign(Object.assign({}, getMinimumTrackStyles(thumbStart)), { backgroundColor: minimumTrackTintColor }), valueVisibleStyle);
    const touchOverflowStyle = getTouchOverflowStyle();
    return (<View {...other} style={StyleSheet.flatten([
        isVertical.current
            ? mainStyles.containerVertical
            : mainStyles.containerHorizontal,
        style,
    ])} onLayout={measureContainer} accessibilityRole="adjustable" accessibilityValue={{
        min: minimumValue,
        max: maximumValue,
        now: props.value,
    }}>
      <View style={StyleSheet.flatten([
        mainStyles.track,
        isVertical.current
            ? mainStyles.trackVertical
            : mainStyles.trackHorizontal,
        appliedTrackStyle,
        { backgroundColor: maximumTrackTintColor },
    ])} onLayout={measureTrack}/>

      <Animated.View style={StyleSheet.flatten([
        mainStyles.track,
        isVertical.current
            ? mainStyles.trackVertical
            : mainStyles.trackHorizontal,
        appliedTrackStyle,
        minimumTrackStyle,
    ])}/>
      <SliderThumb isVisible={allMeasured} onLayout={measureThumb} style={thumbStyle} color={thumbTintColor} start={thumbStart} vertical={isVertical.current} {...thumbProps}/>
      <View style={StyleSheet.flatten([styles.touchArea, touchOverflowStyle])} {...panResponder.panHandlers}>
        {debugTouchArea === true && renderDebugThumbTouchRect(thumbStart)}
      </View>
    </View>);
};
const SliderThumb = (_a) => {
    var { Component, isVisible, onLayout, style, start, color, vertical } = _a, props = __rest(_a, ["Component", "isVisible", "onLayout", "style", "start", "color", "vertical"]);
    const ThumbComponent = Component || Animated.View;
    const axis = vertical ? 'translateY' : 'translateX';
    const thumbPosition = [{ [axis]: start }];
    const styleTransform = (style && style.transform) || [];
    const visibleStyle = isVisible ? {} : { height: 0, width: 0 };
    return (<ThumbComponent testID="sliderThumb" onLayout={onLayout} style={StyleSheet.flatten([
        Object.assign({ backgroundColor: color, transform: [...thumbPosition, ...styleTransform] }, visibleStyle),
        styles.thumb,
        style,
    ])} {...props}/>);
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
    thumb: {
        position: 'absolute',
        width: THUMB_SIZE,
        height: THUMB_SIZE,
        borderRadius: THUMB_SIZE / 2,
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
export { Slider };
export default withTheme(Slider, 'Slider');
