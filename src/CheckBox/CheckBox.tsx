import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TextProps,
  TextStyle,
  ViewStyle,
  StyleProp,
  Pressable,
  PressableProps,
} from 'react-native';
import TextElement from '../Text';
import { CheckBoxIcon, CheckBoxIconProps } from './components/CheckBoxIcon';
import { fonts } from '../config';
import { RneFunctionComponent } from '../helpers';

export type CheckBoxProps = PressableProps &
  CheckBoxIconProps & {
    /** Specify React Native component for main button. */
    Component?: typeof React.Component;

    /** Moves icon to right of text. */
    iconRight?: boolean;

    /** Title of checkbox. */
    title?: string | React.ReactElement<{}>;

    /** Additional props for the title Text component. */
    titleProps?: TextProps;

    /** Aligns checkbox to center. */
    center?: boolean;

    /** Aligns checkbox to right. */
    right?: boolean;

    /** Style of main container. */
    containerStyle?: StyleProp<ViewStyle>;

    /** Style for the wrapper of checkbox. */
    wrapperStyle?: StyleProp<ViewStyle>;

    /** Style of text. */
    textStyle?: StyleProp<TextStyle>;

    /** Specify a custom checked message. */
    checkedTitle?: string;

    /** Specify different font family. */
    fontFamily?: string;
  };

/** CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.
 * It provides a clear visual of either a true or false choice. */
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
        {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.white,
        },
        styles.container,
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
