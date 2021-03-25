import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import Image, { ImageProps } from '../image/Image';

const CardImage: RneFunctionComponent<ImageProps> = ({ style, ...props }) => {
  return <Image style={StyleSheet.flatten([styles.image, style])} {...props} />;
};

const styles = StyleSheet.create({
  image: {
    width: null,
    height: 150,
  },
});

export default withTheme(CardImage, 'CardImage');
