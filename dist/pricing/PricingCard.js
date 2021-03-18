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
import { View, Platform, StyleSheet, } from 'react-native';
import { normalizeText } from '../helpers';
import { fonts, withTheme } from '../config';
import Text from '../text/Text';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';
const PricingCard = (props) => {
    const { theme } = props, rest = __rest(props, ["theme"]);
    const { containerStyle, wrapperStyle, title, price, info, button, color = theme.colors.primary, titleStyle, pricingStyle, infoStyle, onButtonPress } = rest, attributes = __rest(rest, ["containerStyle", "wrapperStyle", "title", "price", "info", "button", "color", "titleStyle", "pricingStyle", "infoStyle", "onButtonPress"]);
    return (<View {...attributes} style={StyleSheet.flatten([
        Object.assign({ margin: 15, marginBottom: 15, backgroundColor: theme.colors.white, borderWidth: 1, padding: 15, borderColor: theme.colors.grey5 }, Platform.select({
            android: {
                elevation: 1,
            },
            default: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 1, width: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 0.5,
            },
        })),
        containerStyle && containerStyle,
    ])}>
      <View style={StyleSheet.flatten([
        styles.wrapper,
        wrapperStyle && wrapperStyle,
    ])}>
        <Text testID="pricingCardTitle" style={StyleSheet.flatten([
        styles.pricingTitle,
        titleStyle,
        { color },
    ])}>
          {title}
        </Text>

        <Text style={StyleSheet.flatten([styles.pricingPrice, pricingStyle])}>
          {price}
        </Text>

        {info.map((item) => (<Text key={item} style={StyleSheet.flatten([
        Object.assign({ textAlign: 'center', marginTop: 5, marginBottom: 5, color: theme.colors.grey3 }, Platform.select({
            android: Object.assign({}, fonts.android.bold),
            default: {
                fontWeight: '600',
            },
        })),
        infoStyle,
    ])}>
            {item}
          </Text>))}

        {React.isValidElement(button) ? (button) : (<PricingButton color={color} onButtonPress={onButtonPress} {...button}/>)}
      </View>
    </View>);
};
const PricingButton = (props) => {
    const { title, buttonStyle, color, titleStyle, onButtonPress, icon } = props, buttonProps = __rest(props, ["title", "buttonStyle", "color", "titleStyle", "onButtonPress", "icon"]);
    return (<Button title={title} buttonStyle={StyleSheet.flatten([
        styles.button,
        buttonStyle,
        { backgroundColor: color },
    ])} titleStyle={titleStyle} onPress={onButtonPress} icon={React.isValidElement(icon) ? (icon) : typeof icon === 'string' ? (<Icon name={icon} size={15} color="white"/>) : (<Icon {...icon}/>)} {...buttonProps}/>);
};
PricingCard.defaultProps = {
    info: [],
};
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
    pricingTitle: Object.assign({ textAlign: 'center', fontSize: normalizeText(30) }, Platform.select({
        android: Object.assign({}, fonts.android.black),
        default: {
            fontWeight: '800',
        },
    })),
    pricingPrice: Object.assign({ textAlign: 'center', marginTop: 10, marginBottom: 10, fontSize: normalizeText(40) }, Platform.select({
        android: Object.assign({}, fonts.android.bold),
        default: {
            fontWeight: '700',
        },
    })),
    button: {
        marginTop: 15,
        marginBottom: 10,
    },
});
export { PricingCard, PricingButton };
export default withTheme(PricingCard, 'PricingCard');
