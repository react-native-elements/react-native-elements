import React from 'react';

import Icon from '../icons/Icon';

export default (content, defaultIconProps) => {
  if (content === null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  const iconProps = { ...defaultIconProps, ...content };
  return <Icon {...iconProps} />;
};
