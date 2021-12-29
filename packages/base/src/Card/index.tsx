import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import { CardBase, CardBaseProps } from './Card';
import { CardDivider } from './Card.Divider';
import { CardFeaturedSubtitle } from './Card.FeaturedSubtitle';
import { CardFeaturedTitle } from './Card.FeaturedTitle';
import { CardImage } from './Card.Image';
import { CardTitle } from './Card.Title';

const ThemedCardDivider = withTheme(CardDivider, 'CardDivider');
const ThemedCardFeaturedSubtitle = withTheme(
  CardFeaturedSubtitle,
  'CardFeaturedSubtitle'
);
const ThemedCardFeaturedTitle = withTheme(
  CardFeaturedTitle,
  'CardFeaturedTitle'
);
const ThemedCardImage = withTheme(CardImage, 'CardImage');
const ThemedCardTitle = withTheme(CardTitle, 'CardTitle');

export type CardProps = RneFunctionComponent<CardBaseProps> & {
  Divider: typeof ThemedCardDivider;
  Image: typeof ThemedCardImage;
  Title: typeof ThemedCardTitle;
  FeaturedTitle: typeof ThemedCardFeaturedTitle;
  FeaturedSubTitle: typeof ThemedCardFeaturedSubtitle;
};

export const Card: CardProps = Object.assign(CardBase);

const ThemedCard = Object.assign(withTheme(Card, 'Card'), {
  Divider: ThemedCardDivider,
  Image: ThemedCardImage,
  Title: ThemedCardTitle,
  FeaturedTitle: ThemedCardFeaturedTitle,
  FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});

export default ThemedCard;
