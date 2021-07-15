"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Rect_1 = require("./components/Rect");
const SliderThumb_1 = require("./components/SliderThumb");
const TRACK_SIZE = 4;
const THUMB_SIZE = 40;
const TRACK_STYLE = react_native_1.Platform.select({ web: 0, default: -1 });
const DEFAULT_ANIMATION_CONFIGS = {
    spring: {
        friction: 7,
        tension: 100,
        useNativeDriver: true,
    },
    timing: {
        duration: 150,
        easing: react_native_1.Easing.inOut(react_native_1.Easing.ease),
        delay: 0,
        useNativeDriver: true,
    },
};
const getBoundedValue = (value, maximumValue, minimumValue) => {
    return Math.max(Math.min(value, maximumValue), minimumValue);
};
/** Sliders allow users to select a value from a fixed set of values using drag utility.*/
const Slider = (_a) => {
    var { minimumValue, maximumValue, minimumTrackTintColor, maximumTrackTintColor, thumbTintColor, containerStyle, style, trackStyle, thumbStyle, thumbProps, debugTouchArea, orientation, animateTransitions, animationType, disabled, allowTouchTrack, step, thumbTouchSize } = _a, other = __rest(_a, ["minimumValue", "maximumValue", "minimumTrackTintColor", "maximumTrackTintColor", "thumbTintColor", "containerStyle", "style", "trackStyle", "thumbStyle", "thumbProps", "debugTouchArea", "orientation", "animateTransitions", "animationType", "disabled", "allowTouchTrack", "step", "thumbTouchSize"]);
    const _previousLeft = react_1.useRef(0);
    const [allMeasured, setAllMeasured] = react_1.useState(false);
    const [containerSize, setContainerSize] = react_1.useState({ width: 0, height: 0 });
    const [trackSize, setTrackSize] = react_1.useState({ width: 0, height: 0 });
    const [thumbSize, setThumbSize] = react_1.useState({ width: 0, height: 0 });
    const containerSizeValue = react_1.useRef(containerSize);
    const trackSizeValue = react_1.useRef(trackSize);
    const thumbSizeValue = react_1.useRef(thumbSize);
    const isVertical = react_1.useRef(orientation === 'vertical');
    const props = other;
    const propEvents = {
        onSlidingComplete: props.onSlidingComplete,
        onSlidingStart: props.onSlidingStart,
        onValueChange: props.onValueChange,
    };
    const [value] = react_1.useState(new react_native_1.Animated.Value(getBoundedValue(props.value || 0, maximumValue || 1, minimumValue || 0)));
    react_1.useEffect(() => {
        containerSizeValue.current = containerSize;
    }, [containerSize]);
    react_1.useEffect(() => {
        trackSizeValue.current = trackSize;
    }, [trackSize]);
    react_1.useEffect(() => {
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
    const currentPropValue = react_1.useRef(props.value || 0);
    const prevPropValue = react_1.useRef(0);
    const didMountRef = react_1.useRef(false);
    const setCurrentValue = react_1.default.useCallback((value1) => {
        value.setValue(value1);
    }, [value]);
    react_1.default.useEffect(() => {
        setCurrentValue(props.value || 0);
    }, [props.value, setCurrentValue]);
    react_1.useEffect(() => {
        prevPropValue.current = props.value || 0;
        if (didMountRef.current) {
            const newValue = getBoundedValue(props.value || 0, maximumValue || 1, minimumValue || 0);
            if (prevPropValue.current !== newValue) {
                if (animateTransitions) {
                    setCurrentValueAnimated(new react_native_1.Animated.Value(newValue));
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
        const animationConfig = Object.assign({}, DEFAULT_ANIMATION_CONFIGS[animationType || 'timing'], props.animationConfig, {
            toValue: value1,
        });
        react_native_1.Animated[animationType || 'timing'](value, animationConfig).start();
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
        if (disabled) {
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
        if (disabled) {
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
        if (!allowTouchTrack && !TRACK_STYLE) {
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
        if (propEvents === null || propEvents === void 0 ? void 0 : propEvents[event]) {
            (_a = propEvents === null || propEvents === void 0 ? void 0 : propEvents[event]) === null || _a === void 0 ? void 0 : _a.call(propEvents, currentPropValue.current);
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
        let newValue = ratio * ((maximumValue || 1) - (minimumValue || 0));
        if (step) {
            newValue = Math.round(newValue / step) * step;
        }
        return getBoundedValue(newValue + (minimumValue || 0), maximumValue || 1, minimumValue || 0);
    };
    const getTouchOverflowSize = () => {
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
        if (debugTouchArea === true) {
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
    react_1.default.useEffect(() => {
        let listenerID = value.addListener((obj) => {
            currentPropValue.current = obj.value;
        });
        return () => {
            value.removeListener(listenerID);
        };
    });
    const getRatio = (value1) => {
        return ((value1 - (minimumValue || 0)) /
            ((maximumValue || 1) - (minimumValue || 0)));
    };
    const getThumbLeft = (value1) => {
        const ratio = getRatio(value1);
        return (ratio * (containerSizeValue.current.width - thumbSizeValue.current.width));
    };
    const getThumbTouchRect = () => {
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
            return new Rect_1.Rect(height, width, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.width) || THUMB_SIZE, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.height) || THUMB_SIZE);
        }
        return new Rect_1.Rect(width, height, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.width) || THUMB_SIZE, (thumbTouchSize === null || thumbTouchSize === void 0 ? void 0 : thumbTouchSize.height) || THUMB_SIZE);
    };
    const renderDebugThumbTouchRect = (thumbLeft) => {
        const thumbTouchRect = getThumbTouchRect();
        const positionStyle = {
            left: thumbLeft,
            top: thumbTouchRect.y,
            width: thumbTouchRect.width,
            height: thumbTouchRect.height,
        };
        return <react_native_1.Animated.View style={positionStyle} pointerEvents="none"/>;
    };
    const getMinimumTrackStyles = (thumbStart) => {
        const minimumTrackStyle = {
            position: 'absolute',
        };
        if (isVertical.current) {
            minimumTrackStyle.height = react_native_1.Animated.add(thumbStart, thumbSizeValue.current.height / 2);
            minimumTrackStyle.marginLeft = trackSize.width * TRACK_STYLE;
        }
        else {
            minimumTrackStyle.width = react_native_1.Animated.add(thumbStart, thumbSizeValue.current.width / 2);
            minimumTrackStyle.marginTop = trackSize.height * TRACK_STYLE;
        }
        return minimumTrackStyle;
    };
    const panResponder = react_1.useRef(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: handleMoveShouldSetPanResponder,
        onPanResponderGrant: handlePanResponderGrant,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderRelease: handlePanResponderEnd,
        onPanResponderTerminationRequest: handlePanResponderRequestEnd,
        onPanResponderTerminate: handlePanResponderEnd,
    })).current;
    const mainStyles = containerStyle || styles;
    const appliedTrackStyle = react_native_1.StyleSheet.flatten([styles.track, trackStyle]);
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
    return (<react_native_1.View {...other} style={react_native_1.StyleSheet.flatten([
        isVertical.current
            ? mainStyles.containerVertical
            : mainStyles.containerHorizontal,
        style,
    ])} onLayout={measureContainer} accessibilityRole="adjustable" accessibilityValue={{
        min: minimumValue,
        max: maximumValue,
        now: props.value,
    }}>
      <react_native_1.View style={react_native_1.StyleSheet.flatten([
        mainStyles.track,
        isVertical.current
            ? mainStyles.trackVertical
            : mainStyles.trackHorizontal,
        appliedTrackStyle,
        { backgroundColor: maximumTrackTintColor },
    ])} onLayout={measureTrack}/>

      <react_native_1.Animated.View style={react_native_1.StyleSheet.flatten([
        mainStyles.track,
        isVertical.current
            ? mainStyles.trackVertical
            : mainStyles.trackHorizontal,
        appliedTrackStyle,
        minimumTrackStyle,
    ])}/>
      <SliderThumb_1.SliderThumb isVisible={allMeasured} onLayout={measureThumb} style={thumbStyle} color={thumbTintColor} start={thumbStart} vertical={isVertical.current} {...thumbProps}/>
      <react_native_1.View style={react_native_1.StyleSheet.flatten([styles.touchArea, touchOverflowStyle])} {...panResponder.panHandlers}>
        {debugTouchArea === true && renderDebugThumbTouchRect(thumbStart)}
      </react_native_1.View>
    </react_native_1.View>);
};
exports.Slider = Slider;
exports.Slider.defaultProps = {
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
const styles = react_native_1.StyleSheet.create({
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
exports.Slider.displayName = 'Slider';
