import React from 'react';
declare type CheckBoxIconProps = {
    checked?: boolean;
    onIconPress?: (...args: any[]) => any;
    onLongIconPress?: (...args: any[]) => any;
    size?: number;
    checkedIcon?: string | JSX.Element;
    uncheckedIcon?: string | JSX.Element;
    iconType?: string;
    checkedColor?: string;
    uncheckedColor?: string;
};
declare const CheckBoxIcon: React.SFC<CheckBoxIconProps>;
export default CheckBoxIcon;
