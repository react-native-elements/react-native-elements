import React from 'react';
import { FABProps } from '../FAB';
import { IconNode } from '../Icon';
import { RneFunctionComponent } from '../helpers';
export declare type SpeedDialProps = {
    /** Opens the action stack. */
    isOpen: boolean;
    /** Callback fired when the component requests to be open. */
    onOpen: () => void;
    /** Callback fired when the component requests to be closed. */
    onClose: () => void;
    /** Icon shown on FAB when action stack is open. */
    openIcon?: IconNode;
    /** Add overlay color to the speed dial. */
    overlayColor?: string;
    /** Add childen elements to the speed dial. */
    children?: React.ReactChild[];
    /** The duration for the transition, in milliseconds. */
    transitionDuration?: number;
} & FABProps;
/** When pressed, a floating action button can display three to six related actions in the form of a speed dial.
 * If more than six actions are needed, something other than a FAB should be used to present them.
 * Upon press, the FAB remains visible and emits a stack of related actions.
 * If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions. */
export declare const SpeedDial: RneFunctionComponent<SpeedDialProps>;
