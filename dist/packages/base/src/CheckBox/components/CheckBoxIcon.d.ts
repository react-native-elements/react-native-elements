import React from 'react';
import { RneFunctionComponent } from '../../helpers';
import { IconType } from '../../Icon';
export declare type CheckBoxIconProps = {
    /** Flag for checking the icon. */
    checked: boolean;
    /** onPress function for checkbox. */
    onIconPress?(): void;
    /** onLongPress function for checkbox. */
    onLongIconPress?(): void;
    /** Size of the checkbox. */
    size?: number;
    /** Default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)). */
    checkedIcon?: string | React.ReactElement<{}>;
    /** Default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)) */
    uncheckedIcon?: string | React.ReactElement<{}>;
    /** Type of icon set. [Supported sets here](icon#available-icon-sets). */
    iconType?: IconType;
    /** Default checked color. */
    checkedColor?: string;
    /** Default unchecked color. */
    uncheckedColor?: string;
};
export declare const CheckBoxIcon: RneFunctionComponent<CheckBoxIconProps>;
