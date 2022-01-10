import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import {
  CardBase,
  CardBaseProps,
} from '@react-native-elements/base/dist/Card/Card';
import { CardDivider } from '@react-native-elements/base/dist/Card/Card.Divider';
import { CardFeaturedSubtitle } from '@react-native-elements/base/dist/Card/Card.FeaturedSubtitle';
import { CardFeaturedTitle } from '@react-native-elements/base/dist/Card/Card.FeaturedTitle';
import { CardImage } from '@react-native-elements/base/dist/Card/Card.Image';
import { CardTitle } from '@react-native-elements/base/dist/Card/Card.Title';

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
