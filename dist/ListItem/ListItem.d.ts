import React from 'react';
import { StyleProp, TouchableHighlightProps, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemBaseProps = TouchableHighlightProps & {
    /** Additional main container styling. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Specific styling to be used when list item is disabled. */
    disabledStyle?: StyleProp<ViewStyle>;
    /** Add divider at the top of the list item. */
    topDivider?: boolean;
    /** Add divider at the bottom of the list item. */
    bottomDivider?: boolean;
    /** Adds spacing between the leftComponent, the title component & right component. */
    pad?: number;
    /** Replace element with custom element. */
    Component?: typeof React.Component;
    /** Container for linear gradien. */
    ViewComponent?: typeof React.Component;
    /** Props for linear gradient component. */
    linearGradientProps?: any;
    /** Add enclosed childrens. */
    children?: any;
};
/** ListItems are used to display rows of information, such as a contact list, playlist, or menu.
 * They are very customizable and can contain switches, avatars, badges, icons, and more. */
export declare const ListItemBase: RneFunctionComponent<ListItemBaseProps>;
