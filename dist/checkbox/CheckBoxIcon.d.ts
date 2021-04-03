import React from 'react';
import { RneFunctionComponent } from '../helpers';
import { IconType } from '../icons/Icon';
export declare type CheckBoxIconProps = {
    checked?: boolean;
    onIconPress?(): void;
    onLongIconPress?(): void;
    size?: number;
    checkedIcon?: string | React.ReactElement<{}>;
    uncheckedIcon?: string | React.ReactElement<{}>;
    iconType?: IconType;
    checkedColor?: string;
    uncheckedColor?: string;
};
declare const CheckBoxIcon: RneFunctionComponent<CheckBoxIconProps>;
export default CheckBoxIcon;
