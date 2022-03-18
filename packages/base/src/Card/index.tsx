import { CardBase, CardProps } from './Card';
import { CardDivider, CardDividerProps } from './Card.Divider';
import {
  CardFeaturedSubtitle,
  CardFeaturedSubtitleProps,
} from './Card.FeaturedSubtitle';
import {
  CardFeaturedTitle,
  CardFeaturedTitleProps,
} from './Card.FeaturedTitle';
import { CardImage, CardImageProps } from './Card.Image';
import { CardTitle } from './Card.Title';

const Card = Object.assign(CardBase, {
  Divider: CardDivider,
  Image: CardImage,
  Title: CardTitle,
  FeaturedTitle: CardFeaturedTitle,
  FeaturedSubtitle: CardFeaturedSubtitle,
});

export { Card };
export type {
  CardProps,
  CardDividerProps,
  CardFeaturedSubtitleProps,
  CardFeaturedTitleProps,
  CardImageProps,
};
