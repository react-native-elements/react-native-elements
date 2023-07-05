import { StyleProp, ViewStyle } from 'react-native';
declare type Placement = 'left' | 'center' | 'right';
export interface HeaderChildrenProps {
    placement: Placement;
    style: StyleProp<ViewStyle>;
    children: any;
}
export declare const Children: ({ style, placement, children, }: HeaderChildrenProps) => JSX.Element;
export {};
