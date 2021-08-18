import React from 'react';
import {
  Switch as NativeSwitch,
  SwitchProps as NativeSwitchProps,
  Platform,
  ColorValue,
} from 'react-native';
import { RneFunctionComponent } from '../helpers';

export type SwitchProps = NativeSwitchProps & {
  /**  The color of the Switch component. */
  color?: string;
};

/**
 * Switch represents user's decision of a process and indicates whether a state is on/off.
 * Switch is a controlled component that requires an `onValueChange` to update the `value` prop.
 * This renders a `boolean` value. React native elements provide you with additional `theme` and `color` support in the Switch Button.
 * This component inherits [all native Switch props that come with a standard React Native Switch element](https://reactnative.dev/docs/switch.html).
 */
export const Switch: RneFunctionComponent<SwitchProps> = ({
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
      testID="RNE__SWITCH"
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

Switch.displayName = 'Switch';
