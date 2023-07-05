/// <reference types="react" />
import { CardProps } from '@rneui/base/dist/Card/Card';
import { CardDividerProps } from '@rneui/base/dist/Card/Card.Divider';
import { CardImageProps } from '@rneui/base/dist/Card/Card.Image';
import { CardTitleProps } from '@rneui/base/dist/Card/Card.Title';
import { CardFeaturedSubtitleProps } from '@rneui/base/dist/Card';
import { CardFeaturedTitleProps } from '@rneui/base/dist/Card';
declare const ThemedCard: (import("react").FunctionComponent<import("react").PropsWithChildren<CardProps & {
    theme?: import("@rneui/base").Theme;
    children?: import("react").ReactNode;
}>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<CardProps & {
    theme?: import("@rneui/base").Theme;
    children?: import("react").ReactNode;
}>>>) & {
    Divider: import("react").FunctionComponent<import("react").PropsWithChildren<CardDividerProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<CardDividerProps>>>;
    Image: import("react").FunctionComponent<import("react").PropsWithChildren<CardImageProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<CardImageProps>>>;
    Title: import("react").FunctionComponent<import("react").PropsWithChildren<CardTitleProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<CardTitleProps>>>;
    FeaturedTitle: import("react").FunctionComponent<import("react").PropsWithChildren<CardFeaturedTitleProps & {
        theme?: import("@rneui/base").Theme;
        children?: import("react").ReactNode;
    }>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<CardFeaturedTitleProps & {
        theme?: import("@rneui/base").Theme;
        children?: import("react").ReactNode;
    }>>>;
    FeaturedSubtitle: import("react").FunctionComponent<import("react").PropsWithChildren<CardFeaturedSubtitleProps & {
        theme?: import("@rneui/base").Theme;
        children?: import("react").ReactNode;
    }>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<CardFeaturedSubtitleProps & {
        theme?: import("@rneui/base").Theme;
        children?: import("react").ReactNode;
    }>>>;
};
export default ThemedCard;
export type { CardProps, CardDividerProps, CardFeaturedSubtitleProps, CardFeaturedTitleProps, CardImageProps, };
