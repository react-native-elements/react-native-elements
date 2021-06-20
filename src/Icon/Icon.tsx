import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  Pressable,
  PressableProps,
} from 'react-native';
import {
  IconButtonProps,
  IconProps as VectorIconProps,
} from 'react-native-vector-icons/Icon';
import Color from 'color';
import getIconType from '../helpers/getIconType';
import getIconStyle from '../helpers/getIconStyle';
import { RneFunctionComponent } from '../helpers';

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
  name?: string;
  color?: string;
  size?: number;
  type?: IconType;
  iconStyle?: StyleProp<TextStyle>;
};

export type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;

export type IconProps = IconButtonProps & {
  type?: IconType;
  Component?: typeof React.Component;
  reverse?: boolean;
  raised?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  iconProps?: VectorIconProps;
  reverseColor?: string;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  solid?: boolean;
  brand?: boolean;
  pressableProps?: PressableProps;
};

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
  Component = onPress ? Pressable : View,
  solid = false,
  brand = false,
  theme,
  pressableProps,
  ...attributes
}) => {
  const color = colorProp || theme?.colors?.black;
  const reverseColor = reverseColorProp || theme?.colors?.white;
  const IconComponent = getIconType(type);
  const iconSpecificStyle = getIconStyle(type, { solid, brand });

  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }
    return raised ? theme?.colors?.white : 'transparent';
  };

  const buttonStyles = {
    borderRadius: size + 4,
    height: size * 2 + 4,
    width: size * 2 + 4,
  };

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
    >
      <Component
        {...pressableProps}
        {...attributes}
        {...(onPress && {
          onPress,
          disabled,
        })}
        android_ripple={{
          color: Color(reverse ? color : (underlayColor as string))
            .alpha(0.3)
            .rgb()
            .string(),
          borderless: false,
          radius: -5,
        }}
      >
        <View
          style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
              backgroundColor: getBackgroundColor(),
              alignItems: 'center',
              justifyContent: 'center',
            },
            disabled && styles.disabled,
            disabled && disabledStyle,
          ])}
        >
          <IconComponent
            testID="iconIcon"
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
