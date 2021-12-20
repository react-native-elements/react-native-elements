import React from 'react';
import { StyleSheet } from 'react-native';
import Button, { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
import Color from 'color';

export type TabItemProps = ButtonProps & {
  /** Allows to define if TabItem is active. */
  active?: boolean;

  /** Define the background Variant. */
  variant?: 'primary' | 'default';
};

/** They are indivual item of the parent Tab.
 * They are clickable and allows users to click and change Tab.
 * Receives all [Button](https://reactnativeelements.com/docs/button#props) props. */
export const TabItem: RneFunctionComponent<TabItemProps> = ({
  active,
  theme,
  titleStyle,
  containerStyle,
  buttonStyle,
  variant,
  iconPosition = 'top',
  title,
  ...rest
}) => {
  return (
    <Button
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityValue={
        typeof title === 'string' ? { text: title } : undefined
      }
      buttonStyle={[styles.buttonStyle, buttonStyle]}
      titleStyle={[
        styles.titleStyle,
        {
          color: variant === 'primary' ? 'white' : theme?.colors?.secondary,
          paddingVertical: !rest.icon ? 8 : 2,
        },
        titleStyle,
      ]}
      containerStyle={[
        styles.containerStyle,
        {
          backgroundColor: active
            ? Color(theme?.colors?.secondary).alpha(0.2).rgb().toString()
            : 'transparent',
        },
        containerStyle,
      ]}
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
    textTransform: 'uppercase',
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
