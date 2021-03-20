import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Color from 'color';
import { withTheme } from '../config';
import { renderNode, color } from '../helpers';
import Icon, { IconNode } from '../icons/Icon';
import { Theme } from '../config/theme';
import { TextProps } from '../text/Text';

export type ChipProps = TouchableOpacityProps &
  TouchableNativeFeedbackProps & {
    title?: string | React.ReactElement<{}>;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
    type?: 'solid' | 'outline';
    containerStyle?: StyleProp<ViewStyle>;
    icon?: IconNode;
    iconContainerStyle?: StyleProp<ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    disabledTitleStyle?: StyleProp<TextStyle>;
    raised?: boolean;
    theme?: Theme;
  };

const Chip: React.FunctionComponent<ChipProps> = (props: ChipProps) => {
  useEffect(() => {
    if (props.linearGradientProps && !props.ViewComponent) {
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  const {
    TouchableComponent,
    containerStyle,
    onPress = () => console.log('Please attach a method to this component'),
    type = 'solid',
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
    ...attributes
  } = props;

  const handleOnPress = useCallback(
    (evt) => {
      onPress(evt);
    },
    [onPress]
  );

  // Refactor to Pressable
  const TouchableComponentInternal =
    TouchableComponent ||
    Platform.select({
      android: linearGradientProps ? TouchableOpacity : TouchableNativeFeedback,
      default: TouchableOpacity,
    });

  const titleStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    { color: type === 'solid' ? 'white' : theme.colors.primary },
    styles.title,
    passedTitleStyle,
    disabled && { color: color(theme.colors.disabled).darken(0.3).string() },
    disabled && disabledTitleStyle,
  ]);

  const background =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback.Ripple(
          Color(titleStyle.color.toString()).alpha(0.32).rgb().string(),
          true
        )
      : undefined;

  const accessibilityState = {
    disabled: !!disabled,
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: 10 || styles.container.borderRadius,
        },
        containerStyle,
        raised && !disabled && styles.raised,
      ]}
    >
      <TouchableComponentInternal
        onPress={handleOnPress}
        delayPressIn={0}
        activeOpacity={0.3}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        disabled={disabled}
        background={background}
        {...attributes}
      >
        <ViewComponent
          {...linearGradientProps}
          style={StyleSheet.flatten([
            styles.chip,
            {
              backgroundColor:
                type === 'solid' ? theme.colors.primary : 'transparent',
              borderColor: theme.colors.primary,
              borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
            },
            disabled &&
              type === 'solid' && { backgroundColor: theme.colors.disabled },
            disabled &&
              type === 'outline' && {
                borderColor: color(theme.colors.disabled).darken(0.3).string(),
              },
            disabled && disabledStyle,
          ])}
        >
          {icon &&
            !iconRight &&
            renderNode(Icon, icon, {
              containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
              ]),
            })}

          {!!title &&
            renderNode(Text, title, {
              style: titleStyle,
              ...titleProps,
            })}

          {icon &&
            iconRight &&
            renderNode(Icon, icon, {
              containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
              ]),
            })}
        </ViewComponent>
      </TouchableComponentInternal>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 8,
  },
  container: {
    overflow: 'hidden',
    borderRadius: 10,
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
});

export { Chip };

export default withTheme<ChipProps, {}>(Chip, 'Chip');
