import { CardBase, CardBaseProps } from './Card';
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
export type CardProps = typeof Card;
export type {
  CardBaseProps,
  CardDividerProps,
  CardFeaturedSubtitleProps,
  CardFeaturedTitleProps,
  CardImageProps,
};
