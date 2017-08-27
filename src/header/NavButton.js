import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';

const NavButton = props => {
  const { icon, ...attributes } = props;

  return <Icon name={icon} {...attributes} />;
};

NavButton.propTypes = {
  icon: PropTypes.string,
};

export default NavButton;
