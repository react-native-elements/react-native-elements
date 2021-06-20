import React from 'react';
import { StyleSheet } from 'react-native';
import Button, { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
import Color from 'color';

export type TabItemProps = ButtonProps & {
  active?: boolean;
  variant?: 'primary' | 'default';
};

export const TabItem: RneFunctionComponent<TabItemProps> = ({
  active,
  theme,
  titleStyle,
  containerStyle,
  buttonStyle,
  variant,
  iconPosition = 'top',
  title,
  ...props
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
          paddingVertical: !props.icon ? 8 : 2,
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
      {...props}
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

TabItem.displayName = 'TabItem';
