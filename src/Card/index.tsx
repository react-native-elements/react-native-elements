import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import { CardBase, CardBaseProps } from './CardBase';
import CardDivider from './CardDivider';
import CardFeaturedSubtitle from './CardFeaturedSubtitle';
import CardFeaturedTitle from './CardFeaturedTitle';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

export type CardProps = RneFunctionComponent<CardBaseProps> & {
  Divider: typeof CardDivider;
  Image: typeof CardImage;
  Title: typeof CardTitle;
  FeaturedTitle: typeof CardFeaturedTitle;
  FeaturedSubTitle: typeof CardFeaturedSubtitle;
};

export const Card: CardProps = Object.assign(CardBase);

const ThemedCard = Object.assign(withTheme(Card, 'Card'), {
  Divider: CardDivider,
  Image: CardImage,
  Title: CardTitle,
  FeaturedTitle: CardFeaturedTitle,
  FeaturedSubtitle: CardFeaturedSubtitle,
});

export default ThemedCard;
