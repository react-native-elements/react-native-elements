import React from 'react';
import { type ImageStyle } from 'react-native';
export type StarProps = {
    starImage?: string;
    fill?: boolean;
    size?: number;
    selectedColor?: string;
    unSelectedColor?: string;
    isDisabled?: boolean;
    starStyle?: ImageStyle;
    position?: number;
    starSelectedInPosition?: (value: number) => void;
};
declare const Star: React.FunctionComponent<StarProps>;
export default Star;
