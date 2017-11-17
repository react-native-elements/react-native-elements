/* eslint comma-dangle: [2, "always"] */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/Text';

const Title = props => {
  const { text, ...attributes } = props;

  return (
    <Text {...attributes} numberOfLines={1}>
      {text}
    </Text>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
