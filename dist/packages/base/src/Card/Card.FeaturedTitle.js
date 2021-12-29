import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../config';
import Text from '../Text';
/** Add a featured title to the Card.
 * This, Receives all [Text](text#props) props. */
export const CardFeaturedTitle = ({ theme, style, ...props }) => (<Text style={StyleSheet.flatten([
        {
            fontSize: normalize(18),
            marginBottom: 8,
            color: theme?.colors?.white,
            ...Platform.select({
                android: {
                    ...fonts.android.black,
                },
                default: {
                    fontWeight: '800',
                },
            }),
        },
        style,
    ])} {...props}/>);
CardFeaturedTitle.displayName = 'Card.FeaturedTitle';
