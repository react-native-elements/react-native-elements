import React from 'react';

export default (Component, content, defaultProps) => {
  if (content == null || content === false) {
    return null;
  }
  if (typeof content === 'function') {
    return content()
  }
  if (React.isValidElement(content)) {
    return content;
  }
  // Just in case
  if (content === true) {
    return <Component {...defaultProps} />;
  }
  if (typeof content === 'string') {
    return <Component {...defaultProps}>{content}</Component>
  }
  // if `content` is undefined the icon will be only defined by defaultProps
  return <Component {...defaultProps} {...content} />;
};
