import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { withTheme } from '../config';
import Button, { ButtonProps } from './Button';

export type ChipProps = Omit<
  ButtonProps,
  'loading' | 'loadingStyle' | 'loadingProps' | 'buttonStyle'
> & {
  type?: 'solid' | 'outline';
};

const Chip: React.FunctionComponent<ChipProps> = (props: ChipProps) => {
  return (
    <Button
      {...props}
      titleStyle={{ fontSize: 14, paddingHorizontal: 2 }}
      buttonStyle={{ borderRadius: 30 }}
      activeOpacity={props.onPress !== undefined ? 0.3 : 1}
      {...(props.onPress !== undefined && {
        TouchableComponent: TouchableWithoutFeedback,
      })}
    />
  );
};

export { Chip };

export default withTheme<ChipProps, {}>(Chip, 'Chip');
