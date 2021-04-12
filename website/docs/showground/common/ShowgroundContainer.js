import React from 'react';
import '../../../static/css/showground.css';

export const ShowgroundContainer = ({ children, ...props }) => {
  return (
    <div className={`showground component-${props.componentType}`}>
      {children}
    </div>
  );
};
