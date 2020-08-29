import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../config';
import Image from '../image/Image';

const CardImage = ({ style, ...props }) => {
  return <Image style={StyleSheet.flatten([styles.image, style])} {...props} />;
};

const styles = {
  image: {
    width: null,
    height: 150,
  },
};

export default withTheme(CardImage, 'CardImage');
