import React from 'react';
import {
  Switch as NativeSwitch,
  SwitchProps as NativeSwitchProps,
  Platform,
} from 'react-native';
import { withTheme } from '../config';
import { FullTheme } from '../config/theme';

export type SwitchProps = NativeSwitchProps & {
  color?: string;
  theme?: FullTheme;
};

const Switch: React.FunctionComponent<SwitchProps> = ({
  value = false,
  disabled = false,
  onValueChange,
  color = 'primary',
  style,
  theme,
  ...rest
}) => {
  // switchedOnColor deals with picking up a color provided as props by user or picks up default theme
  const switchedOnColor = color === 'primary' ? theme.colors[color] : color;

  const onTintColor =
    Platform.OS === 'ios' || !disabled
      ? switchedOnColor
      : theme.colors.disabled;

  const thumbTintColor =
    Platform.OS === 'ios'
      ? undefined
      : disabled || !value
      ? theme.colors.disabled
      : switchedOnColor;

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
