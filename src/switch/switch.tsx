import React from 'react';
import {
  Switch as NativeSwitch,
  SwitchProps as NativeSwitchProps,
  Platform,
  ColorValue,
} from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

export type SwitchProps = NativeSwitchProps & {
  color?: string;
};

const Switch: RneFunctionComponent<SwitchProps> = ({
  value = false,
  disabled = false,
  onValueChange,
  color = 'primary',
  style,
  theme,
  ...rest
}) => {
  // switchedOnColor deals with picking up a color provided as props by user or picks up default theme
  const switchedOnColor: ColorValue =
    color === 'primary'
      ? theme?.colors?.primary
        ? theme.colors.primary
        : ''
      : color;

  const onTintColor: ColorValue =
    Platform.OS === 'ios' || !disabled
      ? switchedOnColor
      : theme?.colors?.disabled
      ? theme.colors.disabled
      : '';

  const thumbTintColor =
    Platform.OS === 'ios'
      ? undefined
      : disabled || !value
      ? theme?.colors?.disabled
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
      accessibilityState={{
        checked: value,
        disabled,
      }}
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
