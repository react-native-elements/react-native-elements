import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Platform,
  TextProps,
  TextStyle,
  ViewStyle,
  StyleProp,
  PressableProps,
} from 'react-native';
import TextElement from '../Text';
import { CheckBoxIcon, CheckBoxIconProps } from './components/CheckBoxIcon';
import { fonts } from '../config';
import { RneFunctionComponent } from '../helpers';

export type CheckBoxProps = PressableProps &
  CheckBoxIconProps & {
    Component?: typeof React.Component;
    iconRight?: boolean;
    title?: string | React.ReactElement<{}>;
    titleProps?: TextProps;
    center?: boolean;
    right?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    checkedTitle?: string;
    fontFamily?: string;
  };

export const CheckBox: RneFunctionComponent<CheckBoxProps> = ({
  checked = false,
  Component = Pressable,
  iconRight = false,
  title,
  titleProps = {},
  center = false,
  right = false,
  containerStyle,
  wrapperStyle,
  textStyle,
  checkedTitle,
  fontFamily,
  theme,
  onPress,
  onLongPress,
  checkedColor = theme?.colors?.primary,
  ...rest
}) => {
  const accessibilityState = {
    checked: !!checked,
  };

  const iconProps = {
    checked,
    onLongPress,
    checkedColor,
    ...rest,
  };

  return (
    <Component
      accessibilityRole="checkbox"
      accessibilityState={accessibilityState}
      testID="checkbox"
      {...rest}
      onLongPress={onLongPress}
      onPress={onPress}
      style={StyleSheet.flatten([
        styles.container,
        title && styles.containerHasTitle,
        containerStyle && containerStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          right && { justifyContent: 'flex-end' },
          center && { justifyContent: 'center' },
          wrapperStyle && wrapperStyle,
        ])}
      >
        {!iconRight && (
          <CheckBoxIcon {...iconProps} checkedColor={checkedColor} />
        )}

        {React.isValidElement(title)
          ? title
          : title !== '' &&
            title && (
              <TextElement
                testID="checkboxTitle"
                style={
                  StyleSheet.flatten([
                    {
                      marginLeft: 10,
                      marginRight: 10,
                      color: theme?.colors?.grey1,
                      ...Platform.select({
                        android: {
                          ...fonts.android.bold,
                        },
                        default: {
                          fontWeight: 'bold',
                        },
                      }),
                    },
                    textStyle && textStyle,
                    fontFamily && { fontFamily },
                  ]) as any
                }
                {...titleProps}
              >
                {checked ? checkedTitle || title : title}
              </TextElement>
            )}

        {iconRight && (
          <CheckBoxIcon {...iconProps} checkedColor={checkedColor} />
        )}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  containerHasTitle: {
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#fafafa',
    borderColor: '#ededed',
  },
});

CheckBox.displayName = 'Checkbox';
