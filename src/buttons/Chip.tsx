import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { withTheme } from '../config';
import Button, { ButtonProps } from './Button';

export type ChipProps = Omit<
  ButtonProps,
  'loading' | 'loadingStyle' | 'loadingProps'
> & {
  type?: 'solid' | 'outline';
};

const Chip: React.FunctionComponent<ChipProps> = (props: ChipProps) => {
  return (
    <Button
      titleStyle={StyleSheet.flatten([
        props.titleStyle,
        { fontSize: 14, paddingHorizontal: 2 },
      ])}
      buttonStyle={StyleSheet.flatten([
        props.buttonStyle,
        { borderRadius: 30 },
      ])}
      {...(props.onPress === undefined && {
        TouchableComponent: TouchableWithoutFeedback,
      })}
      {...props}
    />
  );
};

export { Chip };

export default withTheme<ChipProps, {}>(Chip, 'Chip');
