import React from 'react';
import { Theme } from '../config/theme';
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
    theme?: Theme;
};
declare const CheckBoxIcon: React.FunctionComponent<CheckBoxIconProps>;
export default CheckBoxIcon;
