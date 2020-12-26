import React from 'react';
import PropTypes from 'prop-types';

import getIconType from '../helpers/getIconType';

const CheckBoxIcon = ({
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

CheckBoxIcon.propTypes = {
  checked: PropTypes.bool,
  onIconPress: PropTypes.func,
  onLongIconPress: PropTypes.func,
  size: PropTypes.number,
  checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  uncheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconType: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
};

export default CheckBoxIcon;
