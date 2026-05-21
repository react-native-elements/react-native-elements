import React, { useMemo } from 'react';
import {
  Switch as NativeSwitch,
  SwitchProps as NativeSwitchProps,
  Platform,
  ColorValue,
} from 'react-native';
import { defaultTheme, RneFunctionComponent } from '../helpers';

export interface SwitchProps extends NativeSwitchProps {
  /**  The color of the Switch component. */
  color?: string;
}

/**
 * Switch represents user's decision of a process and indicates whether a state is on/off.
 * Switch is a controlled component that requires an `onValueChange` to update the `value` prop.
 * This renders a `boolean` value. React native elements provide you with additional `theme` and `color` support in the Switch Button.
 * @usage
 *
 *
 *```tsx live
 function RNESwitch() {
  const [open, setOpen] = React.useState(false);
  return (
    <Stack row align="center">
      <Switch value={open} onValueChange={setOpen} />
    </Stack>
  );
}
 * ```
 *
 */
export const Switch: RneFunctionComponent<SwitchProps> = ({
  value = false,
  disabled = false,
  onValueChange,
  color = 'primary',
  style,
  theme = defaultTheme,
  ...rest
}) => {
  // switchedOnColor deals with picking up a color provided as props by user or picks up default theme
  const switchColor: ColorValue = useMemo(
    () => theme?.colors[color] || color || theme?.colors.primary,
    [color, theme?.colors]
  );

  const trackColor: ColorValue = useMemo(
    () =>
      Platform.select({
        ios: switchColor,
        default: disabled ? theme?.colors.disabled : switchColor,
      }),
    [disabled, switchColor, theme?.colors.disabled]
  );

  const thumbTintColor = useMemo(
    () =>
      Platform.select({
        ios: undefined,
        default: disabled ? theme?.colors?.disabled || '#fff' : switchColor,
      }),
    [disabled, switchColor, theme?.colors?.disabled]
  );

  const props = useMemo(
    () =>
      Platform.select({
        web: {
          activeTrackColor: trackColor,
          activeThumbColor: switchColor,
        },
        default: {
          trackColor: {
            true: trackColor,
            false: disabled ? theme?.colors?.disabled : '',
          },
        },
      }),
    [trackColor, switchColor, disabled, theme.colors.disabled]
  );

  return (
    <NativeSwitch
      testID="RNE__SWITCH"
      value={value}
      accessibilityState={{
        checked: value,
        disabled,
      }}
      disabled={disabled}
      thumbColor={thumbTintColor}
      onValueChange={disabled ? undefined : onValueChange}
      style={style}
      {...props}
      {...rest}
    />
  );
};

Switch.displayName = 'Switch';
