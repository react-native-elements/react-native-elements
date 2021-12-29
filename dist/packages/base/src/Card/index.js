import { withTheme } from '../config';
import { CardBase } from './Card';
import { CardDivider } from './Card.Divider';
import { CardFeaturedSubtitle } from './Card.FeaturedSubtitle';
import { CardFeaturedTitle } from './Card.FeaturedTitle';
import { CardImage } from './Card.Image';
import { CardTitle } from './Card.Title';
const ThemedCardDivider = withTheme(CardDivider, 'CardDivider');
const ThemedCardFeaturedSubtitle = withTheme(CardFeaturedSubtitle, 'CardFeaturedSubtitle');
const ThemedCardFeaturedTitle = withTheme(CardFeaturedTitle, 'CardFeaturedTitle');
const ThemedCardImage = withTheme(CardImage, 'CardImage');
const ThemedCardTitle = withTheme(CardTitle, 'CardTitle');
export const Card = Object.assign(CardBase);
const ThemedCard = Object.assign(withTheme(Card, 'Card'), {
    Divider: ThemedCardDivider,
    Image: ThemedCardImage,
    Title: ThemedCardTitle,
    FeaturedTitle: ThemedCardFeaturedTitle,
    FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});
export default ThemedCard;
