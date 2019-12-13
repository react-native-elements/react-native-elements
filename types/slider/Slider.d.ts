declare var _default: any;
export default _default;
export class Slider extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        containerSize: {
            width: number;
            height: number;
        };
        trackSize: {
            width: number;
            height: number;
        };
        thumbSize: {
            width: number;
            height: number;
        };
        allMeasured: boolean;
        value: Animated.Value;
    };
    panResponder: import("react-native").PanResponderInstance;
    componentDidUpdate(prevProps: any): void;
    setCurrentValue(value: any): void;
    setCurrentValueAnimated(value: any): void;
    handleMoveShouldSetPanResponder(): boolean;
    handlePanResponderGrant(): void;
    _previousLeft: number;
    handlePanResponderMove(_: any, gestureState: any): void;
    handlePanResponderRequestEnd(): boolean;
    handlePanResponderEnd(_: any, gestureState: any): void;
    thumbHitTest({ nativeEvent }: {
        nativeEvent: any;
    }): boolean;
    handleStartShouldSetPanResponder(e: any): boolean;
    fireChangeEvent(event: any): void;
    getTouchOverflowSize(): {
        width: number;
        height: number;
    };
    getTouchOverflowStyle(): {
        marginTop: number;
        marginBottom: number;
        marginLeft: number;
        marginRight: number;
        backgroundColor: string;
        opacity: number;
    };
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
    getThumbPositionStyles(thumbStart: any): ({
        translateX: number;
        translateY?: undefined;
    } | {
        translateY: any;
        translateX?: undefined;
    })[] | ({
        translateX: any;
        translateY?: undefined;
    } | {
        translateY: number;
        translateX?: undefined;
    })[];
    render(): JSX.Element;
}
export namespace Slider {
    export namespace propTypes {
        export const value: PropTypes.Requireable<number>;
        export const disabled: PropTypes.Requireable<boolean>;
        export const minimumValue: PropTypes.Requireable<number>;
        export const maximumValue: PropTypes.Requireable<number>;
        export const step: PropTypes.Requireable<number>;
        export const minimumTrackTintColor: PropTypes.Requireable<string>;
        export const maximumTrackTintColor: PropTypes.Requireable<string>;
        export const thumbTintColor: PropTypes.Requireable<string>;
        export const thumbTouchSize: PropTypes.Requireable<PropTypes.InferProps<{
            width: PropTypes.Requireable<number>;
            height: PropTypes.Requireable<number>;
        }>>;
        export const onValueChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onSlidingStart: PropTypes.Requireable<(...args: any[]) => any>;
        export const onSlidingComplete: PropTypes.Requireable<(...args: any[]) => any>;
        export const style: any;
        export const trackStyle: any;
        export const thumbStyle: any;
        export const debugTouchArea: PropTypes.Requireable<boolean>;
        export const animateTransitions: PropTypes.Requireable<boolean>;
        export const animationType: PropTypes.Requireable<string>;
        export const orientation: PropTypes.Requireable<string>;
        export const animationConfig: PropTypes.Requireable<object>;
        export const containerStyle: any;
    }
    export namespace defaultProps {
        const value_1: number;
        export { value_1 as value };
        const minimumValue_1: number;
        export { minimumValue_1 as minimumValue };
        const maximumValue_1: number;
        export { maximumValue_1 as maximumValue };
        const step_1: number;
        export { step_1 as step };
        const minimumTrackTintColor_1: string;
        export { minimumTrackTintColor_1 as minimumTrackTintColor };
        const maximumTrackTintColor_1: string;
        export { maximumTrackTintColor_1 as maximumTrackTintColor };
        const thumbTintColor_1: string;
        export { thumbTintColor_1 as thumbTintColor };
        export namespace thumbTouchSize_1 {
            export const width: number;
            export const height: number;
        }
        export { thumbTouchSize_1 as thumbTouchSize };
        const debugTouchArea_1: boolean;
        export { debugTouchArea_1 as debugTouchArea };
        const animationType_1: string;
        export { animationType_1 as animationType };
        const orientation_1: string;
        export { orientation_1 as orientation };
    }
}
import React from "react";
import { Animated } from "react-native";
declare class Rect {
    constructor(x: any, y: any, width: any, height: any);
    x: any;
    y: any;
    width: any;
    height: any;
    containsPoint(x: any, y: any): boolean;
}
import PropTypes from "prop-types";
