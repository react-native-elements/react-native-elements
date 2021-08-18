import React from 'react';
import { StyleSheet } from 'react-native';
import Button, { ButtonProps } from '../../Button';
import Icon, { IconProps } from '../../Icon';

export const PricingButton = (
  props: ButtonProps & {
    color?: string;
    onButtonPress?: () => void;
  }
) => {
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
      testID="RNE__PricingButton"
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
