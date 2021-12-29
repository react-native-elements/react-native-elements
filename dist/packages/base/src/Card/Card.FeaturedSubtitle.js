import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../config';
import Text from '../Text';
/** Add a featured subtitle to the Card.
 * This, Receives all [Text](text#props) props. */
export const CardFeaturedSubtitle = ({ theme, style, ...rest }) => (<Text style={StyleSheet.flatten([
        {
            fontSize: normalize(13),
            marginBottom: 8,
            color: theme?.colors?.white,
            ...Platform.select({
                android: {
                    ...fonts.android.black,
                },
                default: {
                    fontWeight: '400',
                },
            }),
        },
        style,
    ])} {...rest}/>);
CardFeaturedSubtitle.displayName = 'Card.FeaturedSubtitle';
