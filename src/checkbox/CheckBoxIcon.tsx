import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import getIconType from '../helpers/getIconType';
type CheckBoxIconProps = {
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
const CheckBoxIcon: React.SFC<CheckBoxIconProps> = ({
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
  const VectorIcon = iconType ? getIconType(iconType) : FAIcon;
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
