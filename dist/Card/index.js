import { CardBase } from './Card';
import { CardDivider } from './Card.Divider';
import { CardFeaturedSubtitle, } from './Card.FeaturedSubtitle';
import { CardFeaturedTitle, } from './Card.FeaturedTitle';
import { CardImage } from './Card.Image';
import { CardTitle } from './Card.Title';
const Card = Object.assign(CardBase, {
    Divider: CardDivider,
    Image: CardImage,
    Title: CardTitle,
    FeaturedTitle: CardFeaturedTitle,
    FeaturedSubtitle: CardFeaturedSubtitle,
});
export { Card };
