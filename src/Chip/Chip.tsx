import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import Button, { ButtonProps } from '../Button';

export type ChipProps = Omit<
  ButtonProps,
  'loading' | 'loadingStyle' | 'loadingProps'
> & {
  type?: 'solid' | 'outline';
};

export const Chip: RneFunctionComponent<ChipProps> = ({
  titleStyle,
  buttonStyle,
  onPress,
  ...rest
}) => {
  return (
    <Button
      titleStyle={StyleSheet.flatten([
        { fontSize: 14, paddingHorizontal: 2 },
        titleStyle,
      ])}
      buttonStyle={StyleSheet.flatten([{ borderRadius: 30 }, buttonStyle])}
      {...(onPress === undefined && {
        TouchableComponent: Pressable,
      })}
      {...rest}
    />
  );
};

Chip.displayName = 'Chip';
