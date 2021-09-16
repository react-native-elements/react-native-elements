import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type BadgeProps = {
    /** Style for the container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Additional styling for badge (background) view component. */
    badgeStyle?: StyleProp<ViewStyle>;
    /** Extra props for text component. */
    textProps?: TextProps;
    /** Extra styling for icon component. */
    textStyle?: StyleProp<TextStyle>;
    /** Text value to be displayed by badge, defaults to empty. */
    value?: React.ReactNode;
    /** Custom component to replace the badge outer component. */
    Component?: typeof React.Component;
    /** Determines color of the indicator. */
    status?: 'primary' | 'success' | 'warning' | 'error';
} & InlinePressableProps;
/** Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user. */
export declare const Badge: RneFunctionComponent<BadgeProps>;
