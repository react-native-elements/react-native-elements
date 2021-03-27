import { View, ViewStyle } from 'react-native';
declare type defaultLinearGradientPropsReturnParams = {
    colors: string[];
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
};
declare const defaultProps: {
    ViewComponent: typeof View;
    duration: number;
    fluid: boolean;
    rounded: boolean;
    height: number;
    width: string;
    containerStyle: {};
    easingType: string;
    linearGradientProps: {};
};
declare const defaultContainerStyle: ViewStyle;
declare const createDefaultLinearGradientProps: (backgroundColor: string, skeletonColor: string) => defaultLinearGradientPropsReturnParams;
export { defaultContainerStyle, createDefaultLinearGradientProps, defaultProps, };
