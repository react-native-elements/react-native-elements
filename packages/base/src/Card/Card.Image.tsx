import React from 'react';
import { StyleSheet } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { ImageProps, Image } from '../Image';

export interface CardImageProps extends ImageProps {}

/** Add information in the form of image to the card.
 * This, Receives all [Image](Image.mdx#props) props. */
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

CardImage.displayName = 'Card.Image';
