import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  TextProps,
  TextStyle,
  ViewStyle,
  StyleProp,
  TouchableOpacityProps,
} from 'react-native';
import TextElement from '../text/Text';
import CheckBoxIcon from './CheckBoxIcon';
import { fonts, withTheme } from '../config';
import { CheckBoxIconProps } from './CheckBoxIcon';
import { RneFunctionComponent } from '../helpers';

export type CheckBoxProps = TouchableOpacityProps &
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

const CheckBox: RneFunctionComponent<CheckBoxProps> = (props) => {
  const { theme, ...rest } = props;
  const {
    Component = TouchableOpacity,
    checked = false,
    iconRight = false,
    title,
    titleProps = {},
    center = false,
    right = false,
    containerStyle,
    textStyle,
    wrapperStyle,
    onPress,
    onLongPress,
    checkedTitle,
    fontFamily,
    checkedColor = theme.colors.primary,
    ...attributes
  } = rest;
  const accessibilityState = {
    checked: !!checked,
  };

  return (
    <Component
      accessibilityRole="checkbox"
      accessibilityState={accessibilityState}
      testID="checkbox"
      {...attributes}
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
        {!iconRight && <CheckBoxIcon {...props} checkedColor={checkedColor} />}

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
                      color: theme.colors.grey1,
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

        {iconRight && <CheckBoxIcon {...props} checkedColor={checkedColor} />}
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

export { CheckBox };
export default withTheme(CheckBox, 'CheckBox');
