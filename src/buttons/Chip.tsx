import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import Button, { ButtonProps } from './Button';

export type ChipProps = Omit<
  ButtonProps,
  'loading' | 'loadingStyle' | 'loadingProps'
> & {
  type?: 'solid' | 'outline';
};

const Chip: RneFunctionComponent<ChipProps> = (props: ChipProps) => {
  const { titleStyle, buttonStyle, ...rest } = props;

  return (
    <Button
      titleStyle={StyleSheet.flatten([
        { fontSize: 14, paddingHorizontal: 2 },
        titleStyle,
      ])}
      buttonStyle={StyleSheet.flatten([{ borderRadius: 30 }, buttonStyle])}
      {...(props.onPress === undefined && {
        TouchableComponent: TouchableWithoutFeedback,
      })}
      {...rest}
    />
  );
};

export { Chip };

export default withTheme<ChipProps, {}>(Chip, 'Chip');
