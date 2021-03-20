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
import { withTheme, FullTheme } from '../config';

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
    new Animated.Value(visible ? 1 : 0)
  );

  React.useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
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
              ? styles.extended
              : size === 'small'
              ? styles.small
              : styles.large,
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
  large: {
    height: 56,
    width: 56,
    padding: 16,
  },
  small: {
    height: 40,
    width: 40,
    padding: 8,
  },
  extended: {
    height: 48,
    paddingHorizontal: 16,
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
});

export default withTheme(FAB, 'safsdf');
