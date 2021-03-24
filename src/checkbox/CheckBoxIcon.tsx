import React from 'react';
import { RneFunctionComponent } from '../helpers';
import getIconType from '../helpers/getIconType';
import { IconType } from '../icons/Icon';

export type CheckBoxIconProps = {
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

const CheckBoxIcon: RneFunctionComponent<CheckBoxIconProps> = ({
  checked,
  onIconPress,
  onLongIconPress,
  size = 24,
  checkedIcon = 'check-square-o',
  uncheckedIcon = 'square-o',
  iconType,
  checkedColor,
  uncheckedColor = '#bfbfbf',
}) => {
  if (checked && React.isValidElement(checkedIcon)) {
    return checkedIcon;
  }
  if (!checked && React.isValidElement(uncheckedIcon)) {
    return uncheckedIcon;
  }
  const VectorIcon = iconType
    ? getIconType(iconType)
    : getIconType('font-awesome');
  return (
    <VectorIcon
      color={checked ? checkedColor : uncheckedColor}
      name={checked ? checkedIcon : uncheckedIcon}
      size={size || 24}
      style={{ minWidth: size || 24 }}
      onLongPress={onLongIconPress}
      onPress={onIconPress}
    />
  );
};

export default CheckBoxIcon;
