import { Animated, ViewStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
declare type Sizable = {
    width: number;
    height: number;
};
export interface SliderProps {
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
}
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
