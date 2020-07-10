import React from 'react';
import Icon from '../icons/Icon';
import { withTheme } from '../config';

function ListCheckmark({ theme, ...props }) {
  return (
    <Icon name="check" size={20} color={theme.colors.primary} {...props} />
  );
}

export default withTheme(ListCheckmark, 'ListCheckmark');
