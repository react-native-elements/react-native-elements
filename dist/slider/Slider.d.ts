import React from 'react';
import { Animated, ViewStyle, StyleProp, PanResponderInstance } from 'react-native';
declare class Rect {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    containsPoint(x: number, y: number): boolean;
}
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
    containerStyle?: StyleProp<ViewStyle>;
};
declare type SliderState = {
    containerSize: Sizable;
    trackSize: Sizable;
    thumbSize: Sizable;
    allMeasured: boolean;
    value: Animated.Value;
};
declare class Slider extends React.Component<SliderProps, SliderState> {
    panResponder: PanResponderInstance;
    isVertical: boolean;
    constructor(props: any);
    componentDidUpdate(prevProps: any, force: boolean): void;
    setCurrentValue(value: any): void;
    setCurrentValueAnimated(value: any): void;
    handleMoveShouldSetPanResponder(): boolean;
    handlePanResponderGrant(): void;
    handlePanResponderMove(_: any, gestureState: any): void;
    handlePanResponderRequestEnd(): boolean;
    handlePanResponderEnd(_: any, gestureState: any): void;
    thumbHitTest({ nativeEvent }: {
        nativeEvent: any;
    }): boolean;
    handleStartShouldSetPanResponder(e: any): boolean;
    fireChangeEvent(event: any): void;
    getOnTouchValue({ nativeEvent }: {
        nativeEvent: any;
    }): number;
    getValueForTouch(location: any): number;
    getTouchOverflowSize(): {};
    getTouchOverflowStyle(): {};
    handleMeasure(name: any, x: any): void;
    measureContainer: (x: any) => void;
    measureTrack: (x: any) => void;
    measureThumb: (x: any) => void;
    getValue(gestureState: any): number;
    getCurrentValue(): any;
    getRatio(value: any): number;
    getThumbLeft(value: any): number;
    getThumbTouchRect(): Rect;
    renderDebugThumbTouchRect(thumbLeft: any): JSX.Element;
    getMinimumTrackStyles(thumbStart: any): {
        position: string;
    };
    getThumbPositionStyles(thumbStart: any): {
        [x: string]: any;
    }[];
    render(): JSX.Element;
}
export { Slider };
declare const _default: React.ForwardRefExoticComponent<any> | React.FunctionComponent<Pick<any, string | number | symbol>>;
export default _default;
