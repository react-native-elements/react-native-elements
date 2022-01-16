import { withTheme } from '../config';
import {
  CardBase,
  CardBaseProps,
} from '@react-native-elements/base/dist/Card/Card';
import {
  CardDivider,
  CardDividerProps,
} from '@react-native-elements/base/dist/Card/Card.Divider';
import { CardFeaturedSubtitle } from '@react-native-elements/base/dist/Card/Card.FeaturedSubtitle';
import { CardFeaturedTitle } from '@react-native-elements/base/dist/Card/Card.FeaturedTitle';
import {
  CardImage,
  CardImageProps,
} from '@react-native-elements/base/dist/Card/Card.Image';
import { CardTitle } from '@react-native-elements/base/dist/Card/Card.Title';

const ThemedCardDivider = withTheme<CardDividerProps>(
  CardDivider,
  'CardDivider'
);
const ThemedCardFeaturedSubtitle = withTheme(
  CardFeaturedSubtitle,
  'CardFeaturedSubtitle'
);
const ThemedCardFeaturedTitle = withTheme(
  CardFeaturedTitle,
  'CardFeaturedTitle'
);
const ThemedCardImage = withTheme<CardImageProps>(CardImage, 'CardImage');
const ThemedCardTitle = withTheme(CardTitle, 'CardTitle');

export type CardProps = CardBaseProps;

const ThemedCard = Object.assign(withTheme(CardBase, 'Card'), {
  Divider: ThemedCardDivider,
  Image: ThemedCardImage,
  Title: ThemedCardTitle,
  FeaturedTitle: ThemedCardFeaturedTitle,
  FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});

export default ThemedCard;
