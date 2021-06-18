import React from 'react';
import { StyleSheet } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import Image, { ImageProps } from '../Image';

type CardImageProps = ImageProps;

export const CardImage: RneFunctionComponent<CardImageProps> = ({
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
