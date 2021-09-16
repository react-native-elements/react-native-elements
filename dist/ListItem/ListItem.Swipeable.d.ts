import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ListItemBaseProps } from './ListItem';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemSwipeableProps = ListItemBaseProps & {
    /** Left Content. */
    leftContent?: React.ReactNode;
    /** Right Content. */
    rightContent?: React.ReactNode;
    /** Style of left container. */
    leftStyle?: StyleProp<ViewStyle>;
    /** Style of right container. */
    rightStyle?: StyleProp<ViewStyle>;
    /** Width to swipe left. */
    leftWidth?: number;
    /** Width to swipe right. */
    rightWidth?: number;
    /** Function to call when user swipes left. */
    onLeftSwipe?: () => any;
    /** Function to call when user swipes right. */
    onRightSwipe?: () => any;
};
/** We offer a special kind of ListItem which is swipeable from both ends and allows users select an event. */
export declare const ListItemSwipeable: RneFunctionComponent<ListItemSwipeableProps>;
