import React from 'react';

import Icon from '../icons/Icon';

export default (content, defaultIconProps) => {
  if (content === null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  // Just in case
  if (content === true) {
    return <Icon {...defaultIconProps} />;
  }
  // if `content` is undefined the icon will be only defined by defaultIconProps
  const iconProps = { ...defaultIconProps, ...content };
  return <Icon {...iconProps} />;
};
