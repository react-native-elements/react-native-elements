var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { withTheme } from '../config';
import CardTitle from './CardTitle';
import CardDivider from './CardDivider';
import CardImage from './CardImage';
import CardFeaturedTitle from './CardFeaturedTitle';
import CardFeaturedSubtitle from './CardFeaturedSubtitle';
const Card = (props) => {
    const { children, containerStyle, wrapperStyle, theme } = props, attributes = __rest(props, ["children", "containerStyle", "wrapperStyle", "theme"]);
    return (<View {...attributes} style={StyleSheet.flatten([
        Object.assign({ backgroundColor: theme.colors.white, borderWidth: 1, padding: 15, margin: 15, marginBottom: 0, borderColor: theme.colors.grey5 }, Platform.select({
            android: {
                elevation: 1,
            },
            default: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 1,
            },
        })),
        containerStyle && containerStyle,
    ])}>
      <View style={StyleSheet.flatten([
        styles.wrapper,
        wrapperStyle && wrapperStyle,
    ])}>
        {children}
      </View>
    </View>);
};
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
});
export { Card };
const ThemedCard = Object.assign(withTheme(Card, 'Card'), {
    Divider: CardDivider,
    Image: CardImage,
    Title: CardTitle,
    FeaturedTitle: CardFeaturedTitle,
    FeaturedSubtitle: CardFeaturedSubtitle,
});
export default ThemedCard;
