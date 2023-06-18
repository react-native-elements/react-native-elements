import { CardProps } from './Card';
import { CardDividerProps } from './Card.Divider';
import { CardFeaturedSubtitleProps } from './Card.FeaturedSubtitle';
import { CardFeaturedTitleProps } from './Card.FeaturedTitle';
import { CardImageProps } from './Card.Image';
declare const Card: import("..").RneFunctionComponent<CardProps> & {
    Divider: import("..").RneFunctionComponent<CardDividerProps>;
    Image: import("..").RneFunctionComponent<CardImageProps>;
    Title: import("..").RneFunctionComponent<import("./Card.Title").CardTitleProps>;
    FeaturedTitle: import("..").RneFunctionComponent<CardFeaturedTitleProps>;
    FeaturedSubtitle: import("..").RneFunctionComponent<CardFeaturedSubtitleProps>;
};
export { Card };
export type { CardProps, CardDividerProps, CardFeaturedSubtitleProps, CardFeaturedTitleProps, CardImageProps, };
