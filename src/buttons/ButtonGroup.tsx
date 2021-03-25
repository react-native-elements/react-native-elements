import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import { withTheme } from '../config';
import { normalizeText, color, RneFunctionComponent } from '../helpers';
import Text from '../text/Text';

export type ButtonGroupProps = {
  button?: object;
  Component?: typeof React.Component;
  onPress?(...args: any[]): void;
  buttons?: (string | React.ReactElement<{}>)[];
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  selectedButtonStyle?: StyleProp<ViewStyle>;
  underlayColor?: string;
  selectedIndex?: number | null;
  selectedIndexes?: number[];
  activeOpacity?: number;
  onHideUnderlay?(): void;
  onShowUnderlay?(): void;
  setOpacityTo?: (value: number) => void;
  innerBorderStyle?: {
    color?: string;
    width?: number;
  };
  buttonStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  selectMultiple?: boolean;
  disabled?: boolean | number[];
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTextStyle?: StyleProp<TextStyle>;
  disabledSelectedStyle?: StyleProp<ViewStyle>;
  disabledSelectedTextStyle?: StyleProp<TextStyle>;
  vertical?: boolean;
};

const ButtonGroup: RneFunctionComponent<ButtonGroupProps> = (props) => {
  const { theme, ...rest } = props;
  const {
    Component = Platform.select<typeof React.Component>({
      android: TouchableNativeFeedback,
      default: TouchableOpacity,
    }),
    buttons,
    onPress = () => null,
    selectedIndex = null,
    selectedIndexes = [],
    selectMultiple = false,
    containerStyle,
    innerBorderStyle,
    buttonStyle,
    buttonContainerStyle,
    textStyle,
    selectedTextStyle,
    selectedButtonStyle,
    underlayColor = theme.colors.primary,
    activeOpacity,
    onHideUnderlay,
    onShowUnderlay,
    setOpacityTo,
    disabled = false,
    disabledStyle,
    disabledTextStyle,
    disabledSelectedStyle,
    disabledSelectedTextStyle,
    vertical = false,
    ...attributes
  } = rest;
  let innerBorderWidth = 1;
  if (
    innerBorderStyle &&
    Object.prototype.hasOwnProperty.call(innerBorderStyle, 'width')
  ) {
    innerBorderWidth = innerBorderStyle.width;
  }
  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        styles.container,
        vertical && styles.verticalContainer,
        containerStyle && containerStyle,
      ])}
    >
      {buttons.map((button: any, i: number) => {
        const isSelected = selectedIndex === i || selectedIndexes.includes(i);
        const isDisabled =
          disabled === true ||
          (Array.isArray(disabled) && disabled.includes(i));
        return (
          <View
            key={i}
            style={StyleSheet.flatten([
              styles.button,
              vertical && styles.verticalComponent,
              i !== buttons.length - 1 &&
                (vertical
                  ? {
                      borderBottomWidth: innerBorderWidth,
                      borderBottomColor:
                        (innerBorderStyle && innerBorderStyle.color) ||
                        theme.colors.grey4,
                    }
                  : {
                      borderRightWidth: innerBorderWidth,
                      borderRightColor:
                        (innerBorderStyle && innerBorderStyle.color) ||
                        theme.colors.grey4,
                    }),
              buttonContainerStyle,
            ])}
          >
            <Component
              testID="buttonGroupItem"
              activeOpacity={activeOpacity}
              setOpacityTo={setOpacityTo}
              onHideUnderlay={onHideUnderlay}
              onShowUnderlay={onShowUnderlay}
              underlayColor={underlayColor}
              disabled={isDisabled}
              onPress={() => {
                if (selectMultiple) {
                  if (selectedIndexes.includes(i)) {
                    onPress(selectedIndexes.filter((index) => index !== i));
                  } else {
                    onPress([...selectedIndexes, i]);
                  }
                } else {
                  onPress(i);
                }
              }}
              style={styles.button}
            >
              <View
                style={StyleSheet.flatten([
                  styles.textContainer,
                  buttonStyle && buttonStyle,
                  isSelected && {
                    backgroundColor: theme.colors.primary,
                  },
                  isSelected && selectedButtonStyle && selectedButtonStyle,
                  isDisabled && styles.disabled,
                  isDisabled && disabledStyle,
                  isDisabled &&
                    isSelected && {
                      backgroundColor: theme.colors.disabled,
                    },
                  isDisabled && isSelected && disabledSelectedStyle,
                ])}
              >
                {button.element ? (
                  <button.element />
                ) : (
                  <Text
                    testID="buttonGroupItemText"
                    style={StyleSheet.flatten([
                      {
                        fontSize: normalizeText(13),
                        color: theme.colors.grey2,
                        ...Platform.select({
                          android: {},
                          default: {
                            fontWeight: '500',
                          },
                        }),
                      },
                      textStyle && textStyle,
                      isSelected && { color: '#fff' },
                      isSelected && selectedTextStyle,
                      isDisabled && {
                        color: color(theme.colors.disabled)
                          .darken(0.3)
                          .toString(),
                      },
                      isDisabled && disabledTextStyle,
                      isDisabled && isSelected && disabledSelectedTextStyle,
                    ])}
                  >
                    {button}
                  </Text>
                )}
              </View>
            </Component>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: 40,
  },
  verticalContainer: {
    flexDirection: 'column',
    height: null,
  },
  verticalComponent: {
    height: 40,
  },
  disabled: {
    backgroundColor: 'transparent',
  },
});

export { ButtonGroup };
export default withTheme(ButtonGroup, 'ButtonGroup');
