import React from 'react';
import Icon from '../icons/Icon';

const NavButton = (props) => {
  const {
    icon,
  ...attributes,
  } = props;

  return (
    <Icon
      name={icon}
      {...attributes}
    />
  );
};

export default NavButton;
