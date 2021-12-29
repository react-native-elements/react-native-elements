import { Animated, ViewStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
declare type Sizable = {
    width: number;
    height: number;
};
export declare type SliderProps = {
    /** Initial value of the slider. */
    value?: number;
    /** If true the user won't be able to move the slider. */
    disabled?: boolean;
    /** Initial minimum value of the slider. */
    minimumValue?: number;
    /** Initial maximum value of the slider. */
    maximumValue?: number;
    /** Step value of the slider. The value should be between 0 and maximumValue - minimumValue). */
    step?: number;
    /** The color used for the track to the left of the button. */
    minimumTrackTintColor?: string;
    /** The color used for the track to the right of the button. */
    maximumTrackTintColor?: string;
    /** If true, thumb will respond and jump to any touch along the track. */
    allowTouchTrack?: boolean;
    /** The color used for the thumb. */
    thumbTintColor?: string;
    /** The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb. This allows to have a visually small thumb while still allowing the user to move it easily. */
    thumbTouchSize?: Sizable;
    /** Callback continuously called while the user is dragging the slider. */
    onValueChange?(value: number): void;
    /** Callback called when the user starts changing the value (e.g. when the slider is pressed). */
    onSlidingStart?(value: number): void;
    /** Callback called when the user finishes changing the value (e.g. when the slider is released). */
    onSlidingComplete?(value: number): void;
    /** The style applied to the slider container. */
    style?: StyleProp<ViewStyle>;
    /** The style applied to the track. */
    trackStyle?: StyleProp<ViewStyle>;
    /** The style applied to the thumb. */
    thumbStyle?: StyleProp<ViewStyle>;
    /** The props applied to the thumb. Uses `Component` prop which can accept `Animated` components. */
    thumbProps?: any;
    /** Set this to true to visually see the thumb touch rect in green. */
    debugTouchArea?: boolean;
    /** Set to true if you want to use the default 'spring' animation. */
    animateTransitions?: boolean;
    /** Set to 'spring' or 'timing' to use one of those two types of animations with the default [animation properties](https://reactnative.dev/docs/animations.html). */
    animationType?: 'spring' | 'timing';
    /** Set the orientation of the slider. */
    orientation?: 'horizontal' | 'vertical';
    /** Used to configure the animation parameters. These are the same parameters in the [Animated library](https://reactnative.dev/docs/animations.html). */
    animationConfig?: Animated.TimingAnimationConfig | Animated.SpringAnimationConfig;
    /** Apply style to the container of the slider. */
    containerStyle?: typeof styles;
};
/** Sliders allow users to select a value from a fixed set of values using drag utility.*/
export declare const Slider: RneFunctionComponent<SliderProps>;
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
export {};
