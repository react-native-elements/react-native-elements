import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet } from 'react-native';

import { withTheme } from '../config';

import CardTitle from './CardTitle';
import CardDivider from './CardDivider';
import CardImage from './CardImage';
import CardFeaturedTitle from './CardFeaturedTitle';
import CardFeaturedSubtitle from './CardFeaturedSubtitle';

const Card = (props) => {
  const {
    children,
    containerStyle,
    wrapperStyle,
    theme,
    ...attributes
  } = props;

  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        styles.container(theme),
        containerStyle && containerStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}
      >
        {children}
      </View>
    </View>
  );
};

Card.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  wrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overlayStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.object,
};

const styles = {
  container: (theme) => ({
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: theme.colors.grey5,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  }),
  wrapper: {
    backgroundColor: 'transparent',
  },
};

export { Card };
const ThemedCard = withTheme(Card, 'Card');
ThemedCard.Divider = CardDivider;
ThemedCard.Image = CardImage;
ThemedCard.Title = CardTitle;
ThemedCard.FeaturedTitle = CardFeaturedTitle;
ThemedCard.FeaturedSubtitle = CardFeaturedSubtitle;
export default ThemedCard;
