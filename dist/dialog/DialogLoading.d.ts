import React from 'react';
import { ViewStyle, ActivityIndicatorProps, StyleProp } from 'react-native';
import { Theme } from '../config/theme';
export declare type DialogLoadingProps = {
    loadingStyle?: StyleProp<ViewStyle>;
    loadingProps?: ActivityIndicatorProps;
    theme?: Theme;
};
declare const _default: React.FunctionComponent<Pick<DialogLoadingProps, "loadingStyle" | "loadingProps">> | React.ForwardRefExoticComponent<DialogLoadingProps>;
export default _default;
