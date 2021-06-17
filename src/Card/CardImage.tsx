import React from 'react';
import { StyleSheet } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import Image, { ImageProps } from '../Image';

export const CardImage: RneFunctionComponent<ImageProps> = ({
  style,
  ...props
}) => <Image style={StyleSheet.flatten([styles.image, style])} {...props} />;

const styles = StyleSheet.create({
  image: {
    width: null,
    height: 150,
  },
});

CardImage.displayName = 'CardImage';
