import React from 'react';
import {
  Switch as NativeSwitch,
  StyleProp,
  ViewStyle,
  ViewProps,
  Platform,
} from 'react-native';
import { withTheme } from '../config';
import { Theme } from '../config/theme';

export type SwitchProps = {
  disabled?: boolean;
  value?: boolean;
  onValueChange?(value: boolean): void;
  color?: string;
  style?: StyleProp<ViewStyle>;
  theme?: Theme;
} & ViewProps;

const Switch: React.FunctionComponent<SwitchProps> = ({
  value,
  disabled,
  onValueChange,
  color,
  style,
  theme,
  ...rest
}) => {
  // switchedOnColor deals with picking up a color provided as props by user or picks up default theme
  const switchedOnColor = color || theme.colors.primary;

  const onTintColor =
    Platform.OS === 'ios'
      ? switchedOnColor
      : disabled
      ? theme.colors.disabled
      : switchedOnColor;

  const thumbTintColor =
    Platform.OS === 'ios'
      ? undefined
      : disabled
      ? theme.colors.disabled
        ? theme.colors.grey1
        : theme.colors.grey4
      : value
      ? switchedOnColor
      : theme.colors.disabled
      ? theme.colors.grey1
      : theme.colors.grey0;

  const props =
    Platform.OS === 'web'
      ? {
          activeTrackColor: onTintColor,
          thumbColor: thumbTintColor,
          activeThumbColor: switchedOnColor,
        }
      : {
          thumbColor: thumbTintColor,
          trackColor: {
            true: onTintColor,
            false: '',
          },
        };

  return (
    <NativeSwitch
      value={value}
      disabled={disabled}
      onValueChange={disabled ? undefined : onValueChange}
      style={style}
      {...props}
      {...rest}
    />
  );
};

export { Switch };
export default withTheme(Switch, 'Switch');
