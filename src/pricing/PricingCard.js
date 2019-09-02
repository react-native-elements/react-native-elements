import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet, Text as RNText } from 'react-native';

import { normalizeText } from '../helpers';
import { fonts, ViewPropTypes, withTheme } from '../config';

import Text from '../text/Text';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';

const PricingCard = props => {
  const { theme, ...rest } = props;

  const {
    containerStyle,
    wrapperStyle,
    title,
    price,
    info,
    button,
    color = theme.colors.primary,
    titleStyle,
    pricingStyle,
    infoStyle,
    onButtonPress,
    ...attributes
  } = rest;

  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        styles.container(theme),
        containerStyle && containerStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}
      >
        <Text
          testID="pricingCardTitle"
          style={StyleSheet.flatten([
            styles.pricingTitle,
            titleStyle,
            { color },
          ])}
        >
          {title}
        </Text>

        <Text style={StyleSheet.flatten([styles.pricingPrice, pricingStyle])}>
          {price}
        </Text>

        {info.map(item => (
          <Text
            key={item}
            style={StyleSheet.flatten([styles.pricingInfo(theme), infoStyle])}
          >
            {item}
          </Text>
        ))}

        <Button
          title={button.title}
          buttonStyle={StyleSheet.flatten([
            styles.button,
            button.buttonStyle,
            { backgroundColor: color },
          ])}
          titleStyle={button.titleStyle}
          onPress={onButtonPress}
          icon={<Icon name={button.icon} size={15} color="white" />}
        />
      </View>
    </View>
  );
};

PricingCard.propTypes = {
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  info: PropTypes.arrayOf(PropTypes.string),
  button: PropTypes.object,
  color: PropTypes.string,
  onButtonPress: PropTypes.func,
  titleStyle: RNText.propTypes.style,
  pricingStyle: RNText.propTypes.style,
  infoStyle: RNText.propTypes.style,
  theme: PropTypes.object,
};

PricingCard.defaultProps = {
  info: [],
};

const styles = {
  container: theme => ({
    margin: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 15,
    borderColor: theme.colors.grey5,
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
  }),
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
  pricingInfo: theme => ({
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: theme.colors.grey3,
    ...Platform.select({
      android: {
        ...fonts.android.bold,
      },
      default: {
        fontWeight: '600',
      },
    }),
  }),
  button: {
    marginTop: 15,
    marginBottom: 10,
  },
};

export { PricingCard };
export default withTheme(PricingCard, 'PricingCard');
