import React from 'react';
import Text from '../text/Text'

export default (Component = Text, content, defaultProps) => {
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
  if (Component === Text) {
    return <Component {...defaultProps}>{content}</Component>
  }
  // if `content` is undefined the icon will be only defined by defaultProps
  return <Component {...defaultProps} {...content} />;
};
