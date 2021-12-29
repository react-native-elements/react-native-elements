import React from 'react';
import getIconType from '../../helpers/getIconType';
export const CheckBoxIcon = ({ checked, onIconPress, onLongIconPress, size = 24, checkedIcon = 'check-square-o', uncheckedIcon = 'square-o', iconType, checkedColor, uncheckedColor = '#bfbfbf', }) => {
    if (checked && React.isValidElement(checkedIcon)) {
        return checkedIcon;
    }
    if (!checked && React.isValidElement(uncheckedIcon)) {
        return uncheckedIcon;
    }
    const VectorIcon = iconType
        ? getIconType(iconType)
        : getIconType('font-awesome');
    return (<VectorIcon testID="RNE__Checkbox__Icon" color={checked ? checkedColor : uncheckedColor} name={checked ? checkedIcon : uncheckedIcon} size={size || 24} style={{ minWidth: size || 24 }} onLongPress={onLongIconPress} onPress={onIconPress}/>);
};
