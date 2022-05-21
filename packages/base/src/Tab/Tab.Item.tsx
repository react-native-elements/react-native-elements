import Color from 'color';
import React from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button, ButtonProps } from '../Button';
import { defaultTheme, RneFunctionComponent } from '../helpers';

type ActiveTabItemStyle<T = {}> =
  | ((active: boolean) => StyleProp<T>)
  | StyleProp<T>;

export interface TabItemProps
  extends Omit<
    ButtonProps,
    'buttonStyle' | 'titleStyle' | 'containerStyle' | 'iconContainerStyle'
  > {
  /** Allows to define if TabItem is active. */
  active?: boolean;

  /** Define the background Variant. */
  variant?: 'primary' | 'default';

  /**
   * Additional button style
   * @type `ViewStyle or (active: boolean) => ViewStyle`
   */
  buttonStyle?: ActiveTabItemStyle<ViewStyle>;

  /**
   * Additional button title style
   *  @type TextStyle or (active: boolean) => TextStyle
   */
  titleStyle?: ActiveTabItemStyle<TextStyle>;

  /**
   * Additional Styling for button container.
   * @type ViewStyle or (active: boolean) => ViewStyle
   */
  containerStyle?: ActiveTabItemStyle<ViewStyle>;

  /**
   * Additional Styling for Icon Component container.
   * @type ViewStyle or (active: boolean) => ViewStyle
   */
  iconContainerStyle?: ActiveTabItemStyle<ViewStyle>;
}

/**
 * They are individual item of the parent Tab.
 * They are clickable and allows users to click and change Tab.
 * Receives all [Button](https://reactnativeelements.com/docs/button#props) props.
 *  */
export const TabItem: RneFunctionComponent<TabItemProps> = ({
  active,
  theme = defaultTheme,
  titleStyle,
  containerStyle,
  buttonStyle,
  iconContainerStyle,
  variant,
  iconPosition = 'top',
  title,
  ...rest
}) => {
  /**
   * Allow user to define custom style for active Tab Item.
   * buttonStyle={(active) => ({ backgroundColor: active ? 'red' : 'blue' })}
   */
  const activeStyle = React.useCallback(
    (type) => (typeof type === 'function' ? type(active) : type),
    [active]
  );

  return (
    <Button
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityValue={
        typeof title === 'string' ? { text: title } : undefined
      }
      buttonStyle={[styles.buttonStyle, activeStyle(buttonStyle)]}
      titleStyle={[
        styles.titleStyle,
        {
          color: variant === 'primary' ? 'white' : theme?.colors?.secondary,
          paddingVertical: !rest.icon ? 8 : 2,
        },
        activeStyle(titleStyle),
      ]}
      containerStyle={[
        styles.containerStyle,
        {
          backgroundColor: active
            ? Color(theme?.colors?.primary).darken(0.05).rgb().toString()
            : 'transparent',
        },
        activeStyle(containerStyle),
      ]}
      iconContainerStyle={[activeStyle(iconContainerStyle)]}
      iconPosition={iconPosition}
      title={title}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  titleStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  containerStyle: {
    flex: 1,
    borderRadius: 0,
  },
  viewStyle: {
    flexDirection: 'row',
    position: 'relative',
  },
  indicator: {
    display: 'flex',
    position: 'absolute',
    height: 2,
    bottom: 0,
  },
});

TabItem.displayName = 'Tab.Item';
