"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const config_1 = require("../config");
const Card_1 = require("./Card");
const Card_Divider_1 = require("./Card.Divider");
const Card_FeaturedSubtitle_1 = require("./Card.FeaturedSubtitle");
const Card_FeaturedTitle_1 = require("./Card.FeaturedTitle");
const Card_Image_1 = require("./Card.Image");
const Card_Title_1 = require("./Card.Title");
const ThemedCardDivider = config_1.withTheme(Card_Divider_1.CardDivider, 'CardDivider');
const ThemedCardFeaturedSubtitle = config_1.withTheme(Card_FeaturedSubtitle_1.CardFeaturedSubtitle, 'CardFeaturedSubtitle');
const ThemedCardFeaturedTitle = config_1.withTheme(Card_FeaturedTitle_1.CardFeaturedTitle, 'CardFeaturedTitle');
const ThemedCardImage = config_1.withTheme(Card_Image_1.CardImage, 'CardImage');
const ThemedCardTitle = config_1.withTheme(Card_Title_1.CardTitle, 'CardTitle');
exports.Card = Object.assign(Card_1.CardBase);
const ThemedCard = Object.assign(config_1.withTheme(exports.Card, 'Card'), {
    Divider: ThemedCardDivider,
    Image: ThemedCardImage,
    Title: ThemedCardTitle,
    FeaturedTitle: ThemedCardFeaturedTitle,
    FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});
exports.default = ThemedCard;
