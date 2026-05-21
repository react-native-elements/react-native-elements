import React from 'react';
import { RneFunctionComponent } from '../../helpers';
import { IconType } from '../../Icon';
export interface CheckBoxIconProps {
    checked: boolean;
    onIconPress?(): void;
    onLongIconPress?(): void;
    size?: number;
    checkedIcon?: string | React.ReactElement<{}>;
    uncheckedIcon?: string | React.ReactElement<{}>;
    iconType?: IconType;
    checkedColor?: string;
    uncheckedColor?: string;
}
export declare const CheckBoxIcon: RneFunctionComponent<CheckBoxIconProps>;
