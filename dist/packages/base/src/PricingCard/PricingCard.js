import React from 'react';
import { View, Platform, StyleSheet, } from 'react-native';
import { normalizeText } from '../helpers';
import { fonts } from '../config';
import Text from '../Text';
import { PricingButton } from './components/PricingButton';
/** Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way. */
export const PricingCard = ({ containerStyle, wrapperStyle, title, price, info = [], button, theme, color = theme?.colors?.primary, titleStyle, pricingStyle, infoStyle, onButtonPress, ...rest }) => {
    return (<View {...rest} style={StyleSheet.flatten([
            {
                margin: 15,
                marginBottom: 15,
                backgroundColor: theme?.colors?.white,
                borderWidth: 1,
                padding: 15,
                borderColor: theme?.colors?.grey5,
                ...Platform.select({
                    android: {
                        elevation: 1,
                    },
                    default: {
                        shadowColor: 'rgba(0,0,0, .2)',
                        shadowOffset: { height: 1, width: 0 },
                        shadowOpacity: 0.5,
                        shadowRadius: 0.5,
                    },
                }),
            },
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

        {info?.map((item) => (<Text key={item} style={StyleSheet.flatten([
                {
                    textAlign: 'center',
                    marginTop: 5,
                    marginBottom: 5,
                    color: theme?.colors?.grey3,
                    ...Platform.select({
                        android: {
                            ...fonts.android.bold,
                        },
                        default: {
                            fontWeight: '600',
                        },
                    }),
                },
                infoStyle,
            ])}>
            {item}
          </Text>))}

        {React.isValidElement(button) ? (button) : (<PricingButton color={color} onButtonPress={onButtonPress} {...button}/>)}
      </View>
    </View>);
};
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
    pricingTitle: {
        textAlign: 'center',
        fontSize: normalizeText(30),
        ...Platform.select({
            android: {
                ...fonts.android.black,
            },
            default: {
                fontWeight: '800',
            },
        }),
    },
    pricingPrice: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: normalizeText(40),
        ...Platform.select({
            android: {
                ...fonts.android.bold,
            },
            default: {
                fontWeight: '700',
            },
        }),
    },
});
PricingCard.displayName = 'PricingCard';
