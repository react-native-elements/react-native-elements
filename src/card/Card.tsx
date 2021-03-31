import React from 'react';
import { View, Platform, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { withTheme } from '../config';
import CardTitle from './CardTitle';
import CardDivider from './CardDivider';
import CardImage from './CardImage';
import CardFeaturedTitle from './CardFeaturedTitle';
import CardFeaturedSubtitle from './CardFeaturedSubtitle';
import { RneFunctionComponent } from '../helpers';

export type CardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
};

interface Card extends RneFunctionComponent<CardProps> {}

const Card: Card = (props) => {
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
        {
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
        },
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

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
  },
});

export { Card };

const ThemedCard = Object.assign(withTheme(Card, 'Card'), {
  Divider: CardDivider,
  Image: CardImage,
  Title: CardTitle,
  FeaturedTitle: CardFeaturedTitle,
  FeaturedSubtitle: CardFeaturedSubtitle,
});
export default ThemedCard;
