import React from 'react';
import { StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native';
import Button, { ButtonProps } from './Button';
import { IconProps } from '../icons/Icon';
import { FullTheme, withTheme } from '../config';

export type FABProps = ButtonProps & {
  iconName?: string;
  iconColor?: string;
  iconProps?: IconProps;
  color?: string;
  label?: string;
  labelColor?: string;
  size?: 'large' | 'small';
  placement?: 'left' | 'right';
  visible?: boolean;
  disabled?: boolean;
  upperCase?: boolean;
  style?: StyleProp<ViewStyle>;
  theme?: FullTheme;
};

const FAB: React.FunctionComponent<FABProps> = ({
  iconName,
  iconColor,
  iconProps,
  color,
  label,
  labelColor,
  size = 'large',
  visible = true,
  disabled,
  upperCase,
  theme,
  style,
  titleStyle,
  buttonStyle,
  containerStyle,
  iconContainerStyle,
  placement,
  ...props
}) => {
  const { current: animation } = React.useRef(
    new Animated.Value(Number(visible))
  );

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: Number(visible),
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [animation, visible]);

  return (
    <Animated.View
      style={[
        {
          opacity: animation,
          transform: [{ scale: animation }],
        },
        styles.content,
        placement && {
          position: 'absolute',
          margin: 16,
          [placement]: 0,
          bottom: 0,
        },
        style,
      ]}
    >
      <Button
        icon={{ name: iconName, color: iconColor || theme.colors.white }}
        {...props}
        buttonStyle={StyleSheet.flatten([
          label
            ? styles.extendedLabel
            : size === 'small'
            ? styles.smallFAB
            : styles.largeFAB,
          {
            backgroundColor: color || theme.colors.primary,
          },
          buttonStyle,
        ])}
        iconContainerStyle={[
          label ? {} : size === 'small' ? styles.smallFAB : styles.largeFAB,
          iconContainerStyle,
        ]}
        containerStyle={StyleSheet.flatten([
          styles.container,
          disabled && { elevation: 0 },
          containerStyle,
        ])}
        disabled={disabled}
        title={label}
        titleStyle={[
          styles.label,
          { color: labelColor || theme.colors.white },
          upperCase && styles.upperCaseLabel,
          titleStyle,
        ]}
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 4,
    borderRadius: 28,
  },
  largeFAB: {
    height: 56,
    width: 56,
    padding: 16,
  },
  smallFAB: {
    height: 40,
    width: 40,
    padding: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
  },
  label: {
    marginHorizontal: 8,
  },
  upperCaseLabel: {
    textTransform: 'uppercase',
  },
  extendedLabel: {
    height: 48,
    paddingHorizontal: 16,
  },
});
export { FAB };

export default withTheme(FAB, 'FloatingActionButton');
