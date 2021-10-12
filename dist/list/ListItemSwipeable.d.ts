import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ListItemProps } from './ListItemBase';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemSwipeableProps = ListItemProps & {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    leftStyle?: StyleProp<ViewStyle>;
    rightStyle?: StyleProp<ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
};
declare const ListItemSwipeable: RneFunctionComponent<ListItemSwipeableProps>;
export default ListItemSwipeable;
