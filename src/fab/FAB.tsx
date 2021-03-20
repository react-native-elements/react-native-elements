import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Text,
  StyleProp,
  ViewStyle,
  ViewProps,
} from 'react-native';
import { Icon, IconProps } from '../icons/Icon';
import { FullTheme } from '../config';

type FABProps = ViewProps & {
  icon?: string;
  iconColor?: string;
  iconProps?: IconProps;
  IconComponent?: JSX.Element;
  color?: string;
  label?: string;
  labelColor?: string;
  size?: 'large' | 'small';
  visible?: boolean;
  disabled?: boolean;
  upperCase?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
  theme?: FullTheme;
};

const FAB: React.FunctionComponent<FABProps> = ({
  icon,
  iconColor,
  iconProps,
  IconComponent,
  color,
  label,
  labelColor,
  size = 'large',
  visible = true,
  disabled,
  upperCase,
  theme,
  style,
  onPress,
  onLongPress,
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
      {...props}
      style={[
        {
          opacity: animation,
          transform: [{ scale: animation }],
        },
        styles.container,
        style,
      ]}
    >
      <TouchableOpacity
        disabled={disabled}
        style={styles.touchable}
        onPress={disabled ? () => {} : onPress}
        onLongPress={disabled ? () => {} : onLongPress}
      >
        <View
          style={StyleSheet.flatten([
            styles.content,
            {
              backgroundColor: color || theme.colors.primary,
            },
            disabled && {
              backgroundColor: theme.colors.grey4,
            },
            label
              ? styles.extendedLabel
              : size === 'small'
              ? styles.smallFAB
              : styles.largeFAB,
          ])}
        >
          {icon ? (
            <Icon
              {...iconProps}
              name={icon}
              color={iconColor || theme.colors.secondary}
            />
          ) : (
            Boolean(IconComponent) && IconComponent
          )}
          {Boolean(label) && (
            <Text
              selectable={false}
              style={[
                styles.label,
                { color: labelColor || theme.colors.white },
                upperCase && styles.upperCaseLabel,
              ]}
            >
              {label}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 10,
  },
  touchable: {
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

export default FAB;
