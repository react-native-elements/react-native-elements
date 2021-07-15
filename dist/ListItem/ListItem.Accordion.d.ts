import React from 'react';
import { ListItemBaseProps } from './ListItem';
import { IconNode } from '../Icon';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemAccordionProps = ListItemBaseProps & {
    /** Decide if Accordion is Expanded. */
    isExpanded?: boolean;
    /** Icon for unexpanded Accordion. */
    icon?: IconNode;
    /** Icon when Accordion is expanded, if not provided `icon` will be rotated 180deg. */
    expandIcon?: IconNode;
    /** Similar to ListItem's child. */
    content?: React.ReactNode;
    /** Don't rotate when Accordion is expanded. */
    noRotation?: boolean;
    /** Don't show accordion icon. */
    noIcon?: boolean;
    /** Decide whether to show animation. */
    animation?: {
        type?: 'timing' | 'spring';
        duration?: number;
    } | boolean;
};
/** This allows making a accordion list which can show/hide content. */
export declare const ListItemAccordion: RneFunctionComponent<ListItemAccordionProps>;
