import Color from 'color';
import React, { useCallback, useEffect, useMemo } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  color,
  defaultTheme,
  renderNode,
  Theme,
  StringOmit,
  RneFunctionComponent,
  ThemeSpacing,
} from '../helpers';
import { IconNode, Icon } from '../Icon';
import { TextProps } from '../Text';

const defaultLoadingProps = (
  type: 'solid' | 'clear' | 'outline',
  theme: Theme
): ActivityIndicatorProps => ({
  color: type === 'solid' ? 'white' : theme?.colors?.primary,
  size: 'small',
});

const positionStyle = {
  top: 'column',
  bottom: 'column-reverse',
  left: 'row',
  right: 'row-reverse',
};

export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  /** Add button title. */
  title?: string | React.ReactElement<{}>;

  /** Add additional styling for title component. */
  titleStyle?: StyleProp<TextStyle>;

  /** Add additional props for Text component. */
  titleProps?: TextProps;

  /** Add additional styling for button component. */
  buttonStyle?: StyleProp<ViewStyle>;

  /** Type of button. */
  type?: 'solid' | 'clear' | 'outline';

  /** Prop to display a loading spinner. */
  loading?: boolean;

  /** Add additional styling for loading component. */
  loadingStyle?: StyleProp<ViewStyle>;

  /** Add additional props for ActivityIndicator component. */
  loadingProps?: ActivityIndicatorProps;

  /** Styling for Component container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Displays a centered icon (when no title) or to the left (with text). (can be used along with iconRight as well). Can be an object or a custom component. */
  icon?: IconNode;

  /** Styling for Icon Component container. */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /** Displays Icon to the right of title. Needs to be used along with `icon` prop. */
  iconRight?: boolean;

  /** Displays a linear gradient. See [usage](#linear-gradient). */
  linearGradientProps?: object;

  /** Component for user interaction. */
  TouchableComponent?: typeof React.Component;

  /** Component for container. */
  ViewComponent?: typeof React.Component;

  /** Disables user interaction. */
  disabled?: boolean;

  /** Style of the button when disabled. */
  disabledStyle?: StyleProp<ViewStyle>;

  /** Style of the title when disabled. */
  disabledTitleStyle?: StyleProp<TextStyle>;

  /** Add raised button styling (optional). Has no effect if `type="clear"`. */
  raised?: boolean;

  /** Displays Icon to the position mentioned. Needs to be used along with `icon` prop. */
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';

  /** Uppercase button title*/
  uppercase?: boolean;

  /** Radius of button
   * @type   number | sm | md | lg
   */
  radius?: number | StringOmit<keyof ThemeSpacing>;

  /** Button size */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Color of Button
   * @type   string | primary | secondary | success | warning | error
   */
  color?: StringOmit<'primary' | 'secondary' | 'success' | 'error' | 'warning'>;
}

export const Button: RneFunctionComponent<ButtonProps> = ({
  TouchableComponent,
  containerStyle,
  onPress = () => {},
  buttonStyle,
  type = 'solid',
  loading = false,
  loadingStyle,
  loadingProps: passedLoadingProps,
  size = 'md',
  radius = 'xs',
  uppercase = false,
  color: buttonColor = 'primary',
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
  theme = defaultTheme,
  iconPosition = 'left',
  children = title,
  ...rest
}) => {
  useEffect(() => {
    if (linearGradientProps && !ViewComponent) {
      console.warn(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  const handleOnPress = useCallback(
    (evt) => {
      if (!loading && !disabled) {
        onPress(evt);
      }
    },
    [loading, onPress, disabled]
  );

  // Refactor to Pressable
  const TouchableComponentInternal =
    TouchableComponent ||
    Platform.select({
      android: linearGradientProps ? TouchableOpacity : TouchableNativeFeedback,
      default: TouchableOpacity,
    });

  const titleStyle: StyleProp<TextStyle> = useMemo(
    () =>
      StyleSheet.flatten([
        {
          color: type === 'solid' ? 'white' : theme?.colors?.primary,
        },
        uppercase && { textTransform: 'uppercase' },
        styles.title,
        passedTitleStyle,
        disabled && {
          color: color(theme?.colors?.disabled).darken(0.3).string(),
        },
        disabled && disabledTitleStyle,
      ]),
    [
      disabled,
      disabledTitleStyle,
      passedTitleStyle,
      theme?.colors?.disabled,
      theme?.colors?.primary,
      type,
      uppercase,
    ]
  );

  const background =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback.Ripple(
          Color(titleStyle?.color?.toString()).alpha(0.32).rgb().string(),
          false
        )
      : undefined;

  const loadingProps: ActivityIndicatorProps = useMemo(
    () => ({
      ...defaultLoadingProps(type, theme),
      ...passedLoadingProps,
    }),
    [passedLoadingProps, theme, type]
  );

  const accessibilityState = useMemo(
    () => ({
      disabled: !!disabled,
      busy: !!loading,
    }),
    [disabled, loading]
  );

  const borderRadius = useMemo(
    () =>
      Number(
        theme.spacing[radius as keyof typeof theme.spacing] ?? (radius || '0')
      ) || 0,
    [radius, theme]
  );

  return (
    <View
      style={[
        styles.container,
        { borderRadius },
        containerStyle,
        raised && !disabled && type !== 'clear' && styles.raised,
      ]}
      testID="RNE_BUTTON_WRAPPER"
    >
      <TouchableComponentInternal
        onPress={handleOnPress}
        delayPressIn={0}
        activeOpacity={0.3}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        disabled={disabled}
        background={background}
        {...rest}
      >
        <ViewComponent
          {...linearGradientProps}
          style={StyleSheet.flatten([
            styles.button,
            {
              padding: theme.spacing[size],
              paddingHorizontal: theme.spacing[size] + 2,
              borderRadius,
              // flex direction based on iconPosition
              // if iconRight is true, default to right
              flexDirection:
                positionStyle[iconRight ? 'right' : iconPosition] || 'row',
              backgroundColor:
                type === 'solid'
                  ? theme.colors[buttonColor as PropertyKey] ||
                    buttonColor ||
                    theme?.colors?.primary
                  : 'transparent',
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
          {/* Activity Indicator on loading */}
          {loading && (
            <ActivityIndicator
              style={StyleSheet.flatten([styles.loading, loadingStyle])}
              color={loadingProps.color}
              size={loadingProps.size}
              {...loadingProps}
            />
          )}
          {/* Button Icon, hide Icon while loading */}
          {!loading &&
            icon &&
            renderNode(Icon, icon, {
              containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
              ]),
            })}
          {/* Title for Button, hide while loading */}
          {!loading &&
            React.Children.toArray(children).map((child, index) => (
              <React.Fragment key={index}>
                {typeof child === 'string'
                  ? renderNode(Text, child, {
                      style: {
                        ...titleStyle,
                      },
                      ...titleProps,
                    })
                  : child}
              </React.Fragment>
            ))}
        </ViewComponent>
      </TouchableComponentInternal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: defaultTheme.spacing.md,
    paddingHorizontal: defaultTheme.spacing.lg,
  },
  container: {
    overflow: 'hidden',
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

Button.displayName = 'Button';
