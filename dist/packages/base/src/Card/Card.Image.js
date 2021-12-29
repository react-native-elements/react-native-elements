import React from 'react';
import { StyleSheet } from 'react-native';
import Image from '../Image';
/** Add information in the form of image to the card.
 * This, Receives all [Image](Image.mdx#props) props. */
export const CardImage = ({ style, ...props }) => <Image style={StyleSheet.flatten([styles.image, style])} {...props}/>;
const styles = StyleSheet.create({
    image: {
        width: null,
        height: 150,
    },
});
CardImage.displayName = 'Card.Image';
