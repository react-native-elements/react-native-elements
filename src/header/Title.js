import React from 'react';
import Text from '../text/Text';

const Title = (props) => {
  const {
    text,
  ...attributes,
  } = props;

  return (
    <Text
      numberOfLines={1}
      {...attributes}
    >
      {text}
    </Text>
  );
};

export default Title;
