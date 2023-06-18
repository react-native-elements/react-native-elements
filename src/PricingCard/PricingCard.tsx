import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { defaultTheme, normalizeText, RneFunctionComponent } from '../helpers';
import { fonts } from '../helpers';
import { Text } from '../Text';
import { ButtonProps } from '../Button';
import { PricingButton } from './components/PricingButton';

type ButtonInformation = {
  title: string;
  icon?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export interface PricingCardProps {
  /** Outer component styling. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Inner wrapper component styling. */
  wrapperStyle?: StyleProp<ViewStyle>;

  /** Add title in the pricing card. */
  title?: string;

  /** Price mentioned in the pricing card. */
  price?: string | number;

  /** Pricing information. */
  info?: string[];

  /** Button information. */
  button?: ButtonProps | ButtonInformation;

  /** Color scheme for button & title. */
  color?: string;

  /** Function to be run when button is pressed. */
  onButtonPress?(): void;

  /** Specify title text style. */
  titleStyle?: StyleProp<TextStyle>;

  /** Specify pricing text style. */
  pricingStyle?: StyleProp<TextStyle>;

  /** Specify pricing information style. */
  infoStyle?: StyleProp<TextStyle>;
}

/** Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way. */
export const PricingCard: RneFunctionComponent<PricingCardProps> = ({
  containerStyle,
  wrapperStyle,
  title,
  price,
  info = [],
  button,
  theme = defaultTheme,
  color = theme?.colors?.primary,
  titleStyle,
  pricingStyle,
  infoStyle,
  onButtonPress,
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={StyleSheet.flatten([
        {
          margin: 15,
          marginBottom: 15,
          backgroundColor: theme?.colors?.background,
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

        {info?.map((item) => (
          <Text
            key={item}
            style={
              StyleSheet.flatten([
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
              ]) as any
            }
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
            {...(button as ButtonProps)}
          />
        )}
      </View>
    </View>
  );
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
        ...(fonts.android.black as TextStyle),
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
        ...(fonts.android.bold as TextStyle),
      },
      default: {
        fontWeight: '700',
      } as TextStyle,
    }),
  },
});

PricingCard.displayName = 'PricingCard';
