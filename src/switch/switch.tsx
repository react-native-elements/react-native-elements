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
  const checkedColor = color || theme.colors.primary;
  const onTintColor =
    Platform.OS === 'ios'
      ? checkedColor
      : disabled
      ? theme.colors.disabled
      : checkedColor;
  const thumbTintColor =
    Platform.OS === 'ios'
      ? undefined
      : disabled
      ? theme.colors.disabled
        ? theme.colors.grey1
        : theme.colors.grey4
      : value
      ? checkedColor
      : theme.colors.disabled
      ? theme.colors.grey1
      : theme.colors.grey0;

  const props =
    Platform.OS === 'web'
      ? {
          activeTrackColor: onTintColor,
          thumbColor: thumbTintColor,
          activeThumbColor: checkedColor,
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
