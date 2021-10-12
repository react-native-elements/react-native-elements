import React from 'react';
import { Animated, ViewStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
declare type Sizable = {
    width: number;
    height: number;
};
export declare type SliderProps = {
    value?: number;
    disabled?: boolean;
    minimumValue?: number;
    maximumValue?: number;
    step?: number;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    allowTouchTrack?: boolean;
    thumbTintColor?: string;
    thumbTouchSize?: Sizable;
    onValueChange?(value: number): void;
    onSlidingStart?(value: number): void;
    onSlidingComplete?(value: number): void;
    style?: StyleProp<ViewStyle>;
    trackStyle?: StyleProp<ViewStyle>;
    thumbStyle?: StyleProp<ViewStyle>;
    thumbProps?: any;
    debugTouchArea?: boolean;
    animateTransitions?: boolean;
    animationType?: 'spring' | 'timing';
    orientation?: 'horizontal' | 'vertical';
    animationConfig?: Animated.TimingAnimationConfig | Animated.SpringAnimationConfig;
    containerStyle?: typeof styles;
};
declare const Slider: RneFunctionComponent<SliderProps>;
declare const styles: {
    containerHorizontal: {
        height: number;
        justifyContent: "center";
    };
    containerVertical: {
        width: number;
        flexDirection: "column";
        alignItems: "center";
    };
    track: {
        borderRadius: number;
    };
    trackHorizontal: {
        height: number;
    };
    trackVertical: {
        flex: number;
        width: number;
    };
    thumb: {
        position: "absolute";
        width: number;
        height: number;
        borderRadius: number;
    };
    touchArea: {
        position: "absolute";
        backgroundColor: string;
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    debugThumbTouchArea: {
        position: "absolute";
        backgroundColor: string;
        opacity: number;
    };
};
export { Slider };
declare const _default: React.FunctionComponent<Pick<SliderProps & Partial<import("../config").ThemeProps<SliderProps>>, "style" | "disabled" | "containerStyle" | "value" | "animationType" | "orientation" | "minimumValue" | "maximumValue" | "step" | "minimumTrackTintColor" | "maximumTrackTintColor" | "allowTouchTrack" | "thumbTintColor" | "thumbTouchSize" | "onValueChange" | "onSlidingStart" | "onSlidingComplete" | "trackStyle" | "thumbStyle" | "thumbProps" | "debugTouchArea" | "animateTransitions" | "animationConfig">> | React.ForwardRefExoticComponent<SliderProps & Partial<import("../config").ThemeProps<SliderProps>>>;
export default _default;
