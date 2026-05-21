import React from 'react';

const renderNode = (Component: any, content: any, defaultProps: any = {}) => {
  const { key, ...remainingDefaultProps } = defaultProps; //Issue Fix: Warning about a prop is spread containing key prop upstream#3956
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content();
  }
  // Just in case
  if (content === true) {
    return <Component key={key} {...remainingDefaultProps} />;
  }
  if (typeof content === 'string') {
    if (content.length === 0) {
      return null;
    }
    return (
      <Component key={key} {...remainingDefaultProps}>
        {content}
      </Component>
    );
  }
  if (typeof content === 'number') {
    return (
      <Component key={key} {...remainingDefaultProps}>
        {content}
      </Component>
    );
  }
  return <Component key={key} {...remainingDefaultProps} {...content} />;
};
export default renderNode;
