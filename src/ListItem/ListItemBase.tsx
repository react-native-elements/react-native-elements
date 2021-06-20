import React from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Pressable,
  PressableProps,
  View,
  ViewStyle,
} from 'react-native';
import { PadView } from './components/PadView';
import { RneFunctionComponent } from '../helpers';

export type ListItemBaseProps = PressableProps & {
  containerStyle?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  topDivider?: boolean;
  bottomDivider?: boolean;
  pad?: number;
  Component?: typeof React.Component;
  ViewComponent?: typeof React.Component;
  linearGradientProps?: any;
  children?: any;
};

export const ListItemBase: RneFunctionComponent<ListItemBaseProps> = (
  props
) => {
  const {
    containerStyle,
    onPress,
    onLongPress,
    Component = onPress || onLongPress ? Pressable : View,
    disabled,
    disabledStyle,
    bottomDivider,
    topDivider,
    pad = 16,
    linearGradientProps,
    ViewComponent = View,
    theme,
    children,
    ...attributes
  } = props;

  if (props.linearGradientProps && !props.ViewComponent) {
    console.error(
      "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
    );
  }

  return (
    <Component
      {...attributes}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <PadView
        Component={ViewComponent}
        {...linearGradientProps}
        style={StyleSheet.flatten([
          {
            ...Platform.select({
              ios: {
                padding: 14,
              },
              default: {
                padding: 16,
              },
            }),
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme?.colors?.white,
            borderColor: theme?.colors?.divider,
          },
          topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
          bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
          containerStyle,
          disabled && disabledStyle,
        ])}
        pad={pad}
      >
        {children}
      </PadView>
    </Component>
  );
};

ListItemBase.displayName = 'ListItemBase';
