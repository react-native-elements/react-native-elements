import React from 'react';
import getIconType from '../helpers/getIconType';

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

const CheckBoxIcon: React.FunctionComponent<CheckBoxIconProps> = ({
  checked,
  onIconPress,
  onLongIconPress,
  size,
  checkedIcon,
  uncheckedIcon,
  iconType,
  checkedColor,
  uncheckedColor,
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
