import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonProps, Button } from '../../Button';
import { defaultTheme, RneFunctionComponent } from '../../helpers';
import { IconProps, Icon } from '../../Icon';

export const PricingButton: RneFunctionComponent<
  ButtonProps & {
    onButtonPress?: () => void;
  }
> = ({
  title,
  buttonStyle,
  color,
  titleStyle,
  onButtonPress,
  icon,
  theme = defaultTheme,
  ...buttonProps
}) => {
  return (
    <Button
      testID="RNE__PricingButton"
      title={title}
      buttonStyle={StyleSheet.flatten([
        styles.button,
        buttonStyle,
        { backgroundColor: theme.colors[color as PropertyKey] || color },
      ])}
      titleStyle={titleStyle}
      onPress={onButtonPress}
      icon={
        React.isValidElement(icon) ? (
          icon
        ) : typeof icon === 'string' ? (
          <Icon name={icon} size={15} color="white" />
        ) : (
          <Icon {...(icon as IconProps)} />
        )
      }
      {...buttonProps}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginBottom: 10,
  },
});
