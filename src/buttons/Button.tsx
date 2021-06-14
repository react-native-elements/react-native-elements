import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
  TextStyle,
  PressableProps,
  Pressable,
} from 'react-native';
import Color from 'color';
import { withTheme } from '../config';
import { renderNode, color, RneFunctionComponent } from '../helpers';
import Icon, { IconNode } from '../icons/Icon';
import { Theme } from '../config/theme';
import { TextProps } from '../text/Text';

const defaultLoadingProps = (
  type: 'solid' | 'clear' | 'outline',
  theme: Theme<ButtonProps> | undefined
): ActivityIndicatorProps => ({
  color: type === 'solid' ? 'white' : theme?.colors?.primary,
  size: 'small',
});

export type ButtonProps = PressableProps & {
  title?: string | React.ReactElement<{}>;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
  buttonStyle?: StyleProp<ViewStyle>;
  type?: 'solid' | 'clear' | 'outline';
  loading?: boolean;
  loadingStyle?: StyleProp<ViewStyle>;
  loadingProps?: ActivityIndicatorProps;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: IconNode;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconRight?: boolean;
  linearGradientProps?: object;
  Component?: typeof React.Component;
  ViewComponent?: typeof React.Component;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTitleStyle?: StyleProp<TextStyle>;
  raised?: boolean;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
};

const Button: RneFunctionComponent<ButtonProps> = (props) => {
  useEffect(() => {
    if (props.linearGradientProps && !props.ViewComponent) {
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  const {
    Component = Pressable,
    containerStyle,
    onPress = () => console.log('Please attach a method to this component'),
    buttonStyle,
    type = 'solid',
    loading = false,
    loadingStyle,
    loadingProps: passedLoadingProps,
    title = '',
    titleProps,
    titleStyle: passedTitleStyle,
    icon,
    iconContainerStyle,
    iconRight = false,
    disabled = false,
    disabledStyle,
    disabledTitleStyle,
    raised = false,
    linearGradientProps,
    ViewComponent = View,
    theme,
    iconPosition = 'left',
    ...attributes
  } = props;

  const handleOnPress = useCallback(
    (evt) => {
      if (!loading) {
        onPress(evt);
      }
    },
    [loading, onPress]
  );

  const titleStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    {
      color: type === 'solid' ? 'white' : theme?.colors?.primary,
    },
    styles.title,
    passedTitleStyle,
    disabled && {
      color: color(theme?.colors?.disabled).darken(0.3).string(),
    },
    disabled && disabledTitleStyle,
  ]);

  const loadingProps: ActivityIndicatorProps = {
    ...defaultLoadingProps(type, theme),
    ...passedLoadingProps,
  };

  const accessibilityState = {
    disabled: !!disabled,
    busy: !!loading,
  };
  const positionStyle = {
    top: 'column',
    bottom: 'column-reverse',
    left: 'row',
    right: 'row-reverse',
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: 3 || styles.container.borderRadius,
        },
        containerStyle,
        raised && !disabled && type !== 'clear' && styles.raised,
      ]}
    >
      <Component
        onPress={handleOnPress}
        delayPressIn={0}
        activeOpacity={0.3}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        disabled={disabled}
        android_ripple={{
          color: Color(titleStyle?.color?.toString())
            .alpha(0.32)
            .rgb()
            .string(),
          borderless: false,
          radius: -5,
        }}
        {...attributes}
      >
        <ViewComponent
          {...linearGradientProps}
          style={StyleSheet.flatten([
            styles.button,
            styles.buttonOrientation,
            {
              flexDirection:
                positionStyle[iconRight ? 'right' : iconPosition] || 'row',
            },
            {
              backgroundColor:
                type === 'solid' ? theme?.colors?.primary : 'transparent',
              borderColor: theme?.colors?.primary,
              borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
            },
            buttonStyle,
            disabled &&
              type === 'solid' && {
                backgroundColor: theme?.colors?.disabled,
              },
            disabled &&
              type === 'outline' && {
                borderColor: color(theme?.colors?.disabled)
                  .darken(0.3)
                  .string(),
              },
            disabled && disabledStyle,
          ])}
        >
          {loading && (
            <ActivityIndicator
              style={StyleSheet.flatten([styles.loading, loadingStyle])}
              color={loadingProps.color}
              size={loadingProps.size}
              {...loadingProps}
            />
          )}
          {!loading &&
            icon &&
            renderNode(Icon, icon, {
              containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
              ]),
            })}

          {!loading &&
            !!title &&
            renderNode(Text, title, {
              style: titleStyle,
              ...titleProps,
            })}
        </ViewComponent>
      </Component>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 8,
  },
  buttonOrientation: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 8,
  },
  container: {
    overflow: 'hidden',
    borderRadius: 3,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 1,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      default: {
        fontSize: 18,
      },
    }),
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: {
    backgroundColor: '#fff',
    overflow: 'visible',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  loading: {
    marginVertical: 2,
  },
});

export { Button };

export default withTheme<ButtonProps, {}>(Button, 'Button');
