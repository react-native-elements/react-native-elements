import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  Pressable,
} from 'react-native';
import {
  IconButtonProps,
  IconProps as VectorIconProps,
} from 'react-native-vector-icons/Icon';
import Color from 'color';
import getIconType from '../helpers/getIconType';
import getIconStyle from '../helpers/getIconStyle';
import {
  androidRipple,
  InlinePressableProps,
  RneFunctionComponent,
} from '../helpers';

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | string;

export type IconObject = {
  /** Name of icon. */
  name?: string;

  /** Color of icon. */
  color?: string;

  /** Size of icon. */
  size?: number;

  /** Type of icon */
  type?: IconType;

  /** Apply style to the icon using iconStyle. */
  iconStyle?: StyleProp<TextStyle>;
};

export type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;

export type IconProps = IconButtonProps & {
  /** Type of icon set. [Supported sets here](#available-icon-sets). */
  type?: IconType;

  /** Update React Native Component. */
  Component?: typeof React.Component;

  /** Reverses color scheme. */
  reverse?: boolean;

  /** Adds box shadow to button. */
  raised?: boolean;

  /** Add styling to container holding icon. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Provide all props from react-native Icon component. */
  iconProps?: VectorIconProps;

  /** Specify reverse icon color. */
  reverseColor?: string;

  /** Disables onPress events. Only works when `onPress` has a handler. */
  disabled?: boolean;

  /** Style for the button when disabled. Only works when `onPress` has a handler. */
  disabledStyle?: StyleProp<ViewStyle>;

  /** Uses the solid font. */
  solid?: boolean;

  /** Uses the brands font (FontAwesome5 only). */
  brand?: boolean;
} & InlinePressableProps;

/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
export const Icon: RneFunctionComponent<IconProps> = ({
  type = 'material',
  name,
  size = 24,
  color: colorProp,
  iconStyle,
  iconProps,
  underlayColor = 'transparent',
  reverse = false,
  raised = false,
  containerStyle,
  reverseColor: reverseColorProp,
  disabled = false,
  disabledStyle,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  Component = onPress || onLongPress || onPressIn || onPressOut
    ? Pressable
    : View,
  solid = false,
  brand = false,
  theme,
  pressableProps,
  ...rest
}) => {
  const color = colorProp || theme?.colors?.black;
  const reverseColor = reverseColorProp || theme?.colors?.white;
  const IconComponent = getIconType(type);
  const iconSpecificStyle = getIconStyle(type, { solid, brand });

  const getBackgroundColor = React.useMemo(() => {
    if (reverse) {
      return color;
    }
    return raised ? theme?.colors?.white : 'transparent';
  }, [color, raised, reverse, theme?.colors?.white]);

  const buttonStyles = React.useMemo(
    () => ({
      borderRadius: size + 4,
      height: size * 2 + 4,
      width: size * 2 + 4,
    }),
    [size]
  );

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        (reverse || raised) && styles.button,
        (reverse || raised) && buttonStyles,
        raised && styles.raised,
        iconStyle && iconStyle.borderRadius
          ? {
              borderRadius: iconStyle.borderRadius,
            }
          : {},
        containerStyle && containerStyle,
      ])}
      testID="RNE__ICON__CONTAINER"
    >
      <Component
        {...{
          android_ripple: androidRipple(
            Color(reverse ? color : (underlayColor as string))
              .alpha(0.3)
              .rgb()
              .string()
          ),
          onPress,
          onLongPress,
          onPressIn,
          onPressOut,
          disabled,
          accessibilityRole: 'button',
          ...pressableProps,
          ...rest,
        }}
        testID="RNE__ICON__CONTAINER_ACTION"
      >
        <View
          style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
              backgroundColor: getBackgroundColor,
              alignItems: 'center',
              justifyContent: 'center',
            },
            disabled && styles.disabled,
            disabled && disabledStyle,
          ])}
          testID="RNE__ICON"
        >
          <IconComponent
            testID="RNE__ICON__Component"
            style={StyleSheet.flatten([
              { backgroundColor: 'transparent' },
              iconStyle && iconStyle,
            ])}
            size={size}
            name={name}
            color={reverse ? reverseColor : color}
            {...iconSpecificStyle}
            {...iconProps}
          />
        </View>
      </Component>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  disabled: {
    backgroundColor: '#D1D5D8',
  },
});

Icon.displayName = 'Icon';
