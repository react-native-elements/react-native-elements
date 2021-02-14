import React from 'react';
import { View, Platform, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { withTheme } from '../config';
import CardTitle from './CardTitle';
import CardDivider from './CardDivider';
import CardImage from './CardImage';
import CardFeaturedTitle from './CardFeaturedTitle';
import CardFeaturedSubtitle from './CardFeaturedSubtitle';
import { Theme } from '../config/theme';

export type CardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  theme?: Theme;
};

const Card: React.FunctionComponent<CardProps> = (props) => {
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

const ThemedCard: ThemedCard = withTheme(Card, 'Card');
ThemedCard.Divider = CardDivider;
ThemedCard.Image = CardImage;
ThemedCard.Title = CardTitle;
ThemedCard.FeaturedTitle = CardFeaturedTitle;
ThemedCard.FeaturedSubtitle = CardFeaturedSubtitle;
export default ThemedCard;
