import React from 'react';

export default (Component, content, defaultIconProps) => {
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  // Just in case
  if (content === true) {
    return <Component {...defaultIconProps} />;
  }
  // If text
  if (typeof content === 'string') {
    return <Component {...defaultIconProps}>{content}</Component>;
  }
  // if `content` is undefined the icon will be only defined by defaultIconProps
  return <Component {...defaultIconProps} {...content} />;
};
