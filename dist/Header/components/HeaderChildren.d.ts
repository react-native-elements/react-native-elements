import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
type Placement = 'left' | 'center' | 'right';
export interface HeaderChildrenProps {
    placement: Placement;
    style: StyleProp<ViewStyle>;
    children: any;
}
export declare const Children: ({ style, placement, children, }: HeaderChildrenProps) => React.JSX.Element;
export {};
