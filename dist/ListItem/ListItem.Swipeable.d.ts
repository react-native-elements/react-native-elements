import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ListItemProps } from './ListItem';
import { RneFunctionComponent } from '../helpers';
export interface ListItemSwipeableProps extends ListItemProps {
    leftContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);
    rightContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);
    leftStyle?: StyleProp<ViewStyle>;
    rightStyle?: StyleProp<ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    minSlideWidth?: number;
    onSwipeBegin?: (direction: 'left' | 'right') => unknown;
    onSwipeEnd?: () => unknown;
    animation?: {
        type?: 'timing' | 'spring';
        duration?: number;
    };
}
export declare const ListItemSwipeable: RneFunctionComponent<ListItemSwipeableProps>;
