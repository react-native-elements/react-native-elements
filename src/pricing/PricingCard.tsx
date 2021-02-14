import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { normalizeText } from '../helpers';
import { fonts, withTheme } from '../config';
import Text from '../text/Text';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';
import { Theme } from '../config/theme';

type ButtonInformation = {
  title: string;
  icon: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export type PricingCardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  title?: string;
  price?: string | number;
  info?: string[];
  button?: ButtonInformation;
  color?: string;
  onButtonPress?(): void;
  titleStyle?: StyleProp<TextStyle>;
  pricingStyle?: StyleProp<TextStyle>;
  infoStyle?: StyleProp<TextStyle>;
  theme?: Theme;
};

const PricingCard: React.FunctionComponent<PricingCardProps> = (props) => {
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

        {info.map((item) => (
          <Text
            key={item}
            style={StyleSheet.flatten([styles.pricingInfo(theme), infoStyle])}
          >
            {item}
          </Text>
        ))}

        {React.isValidElement(button) ? (
          button
        ) : (
          <PricingButton
            color={color}
            onButtonPress={onButtonPress}
            {...button}
          />
        )}
      </View>
    </View>
  );
};

const PricingButton = (props) => {
  const {
    title,
    buttonStyle,
    color,
    titleStyle,
    onButtonPress,
    icon,
    ...buttonProps
  } = props;
  return (
    <Button
      title={title}
      buttonStyle={StyleSheet.flatten([
        styles.button,
        buttonStyle,
        { backgroundColor: color },
      ])}
      titleStyle={titleStyle}
      onPress={onButtonPress}
      icon={
        React.isValidElement(icon) ? (
          icon
        ) : typeof icon === 'string' ? (
          <Icon name={icon} size={15} color="white" />
        ) : (
          <Icon {...icon} />
        )
      }
      {...buttonProps}
    />
  );
};

PricingCard.defaultProps = {
  info: [],
};

const styles = {
  container: (theme) => ({
    margin: 15,
    marginBottom: 15,
    backgroundColor: theme.colors.white,
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
  pricingInfo: (theme) => ({
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

export { PricingCard, PricingButton };
export default withTheme(PricingCard, 'PricingCard');
