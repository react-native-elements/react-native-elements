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
import React from 'react';
import { View, Animated, Platform, } from 'react-native';
import Color from 'color';
const LinearProgress = (_a) => {
    var { value = 0, variant = 'indeterminate', color = 'secondary', style, theme, trackColor } = _a, props = __rest(_a, ["value", "variant", "color", "style", "theme", "trackColor"]);
    const [width, setWidth] = React.useState(0);
    const { current: animation } = React.useRef(new Animated.Value(0));
    const intermediate = React.useRef();
    const startAnimation = React.useCallback(() => {
        if (variant === 'indeterminate') {
            intermediate.current = Animated.timing(animation, {
                duration: 2000,
                toValue: 1,
                useNativeDriver: true,
                isInteraction: false,
            });
            animation.setValue(0);
            Animated.loop(intermediate.current).start();
        }
        else {
            Animated.timing(animation, {
                duration: 1000,
                toValue: value || 0,
                useNativeDriver: Platform.OS !== 'web',
                isInteraction: false,
            }).start();
        }
    }, [animation, variant, value]);
    const tintColor = color === 'secondary' || color === 'primary'
        ? theme.colors[color]
        : Color(color).rgb().string() || theme.colors.secondary;
    const trackTintColor = trackColor || Color(tintColor).alpha(0.4).rgb().string();
    React.useEffect(() => {
        startAnimation();
    }, [startAnimation, value]);
    return (<View {...props} onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
    }} style={[
        {
            height: 4,
            overflow: 'hidden',
            width: '100%',
            backgroundColor: trackTintColor,
        },
        style,
    ]}>
      <Animated.View style={{
        transform: [
            {
                translateX: animation.interpolate(variant === 'indeterminate'
                    ? {
                        inputRange: [0, 1],
                        outputRange: [-width, 0.5 * width],
                    }
                    : {
                        inputRange: [0, 1],
                        outputRange: [-0.5 * width, 0],
                    }),
            },
            {
                scaleX: animation.interpolate(variant === 'indeterminate'
                    ? {
                        inputRange: [0, 0.5, 1],
                        outputRange: [0.0001, 1, 0.001],
                    }
                    : {
                        inputRange: [0, 1],
                        outputRange: [0.0001, 1],
                    }),
            },
        ],
        backgroundColor: tintColor,
        flex: 1,
    }}/>
    </View>);
};
export default LinearProgress;
