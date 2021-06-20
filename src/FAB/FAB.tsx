import React from 'react';
import { StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native';
import Button, { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';

export type FABProps = ButtonProps & {
  color?: string;
  size?: 'large' | 'small';
  placement?: 'left' | 'right';
  visible?: boolean;
  upperCase?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const FAB: RneFunctionComponent<FABProps> = ({
  color,
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
          [placement]: 0,
          position: 'absolute',
          margin: 16,
          bottom: 0,
        },
        style,
      ]}
    >
      <Button
        buttonStyle={StyleSheet.flatten([
          props.title
            ? styles.extendedLabel
            : size === 'small'
            ? styles.smallFAB
            : styles.largeFAB,
          {
            backgroundColor: color || theme?.colors?.secondary,
          },
          buttonStyle,
        ])}
        iconContainerStyle={[
          props.title
            ? {}
            : size === 'small'
            ? styles.smallFAB
            : styles.largeFAB,
          iconContainerStyle,
        ]}
        containerStyle={StyleSheet.flatten([
          styles.container,
          disabled && styles.disabled,
          containerStyle,
        ])}
        titleStyle={[
          styles.label,
          { color: theme?.colors?.white },
          upperCase && styles.upperCaseLabel,
          titleStyle,
        ]}
        {...props}
        {...{ disabled, theme }}
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
  disabled: {
    elevation: 0,
  },
});

FAB.displayName = 'FAB';
