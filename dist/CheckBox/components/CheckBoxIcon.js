import React from 'react';
import getIconType from '../../helpers/getIconType';
export const CheckBoxIcon = ({ checked, onIconPress, onLongIconPress, size = 24, checkedIcon = 'check-square-o', uncheckedIcon = 'square-o', iconType, checkedColor, uncheckedColor = '#bfbfbf', }) => {
    const style = React.useMemo(() => ({ minWidth: size || 24 }), [size]);
    if (checked && React.isValidElement(checkedIcon)) {
        return checkedIcon;
    }
    if (!checked && React.isValidElement(uncheckedIcon)) {
        return uncheckedIcon;
    }
    const VectorIcon = iconType
        ? getIconType(iconType)
        : getIconType('font-awesome');
    return (React.createElement(VectorIcon, { testID: "RNE__Checkbox__Icon", color: checked ? checkedColor : uncheckedColor, name: checked ? checkedIcon : uncheckedIcon, size: size || 24, style: style, onLongPress: onLongIconPress, onPress: onIconPress }));
};
