import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';

import { withTheme } from '../config';
import { normalizeText, color } from '../helpers';

import Text from '../text/Text';

const ButtonGroup = props => {
  const { theme, ...rest } = props;

  const {
    Component,
    buttons,
    onPress,
    selectedIndex,
    selectedIndexes,
    selectMultiple,
    containerStyle,
    innerBorderStyle,
    buttonStyle,
    textStyle,
    selectedTextStyle,
    selectedButtonStyle,
    underlayColor = theme.colors.primary,
    activeOpacity,
    onHideUnderlay,
    onShowUnderlay,
    setOpacityTo,
    disabled,
    disabledStyle,
    disabledTextStyle,
    disabledSelectedStyle,
    disabledSelectedTextStyle,
    vertical,
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
      {buttons.map((button, i) => {
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
                    onPress(selectedIndexes.filter(index => index !== i));
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
                  isDisabled && isSelected && styles.disabledSelected(theme),
                  isDisabled && isSelected && disabledSelectedStyle,
                ])}
              >
                {button.element ? (
                  <button.element />
                ) : (
                  <Text
                    testID="buttonGroupItemText"
                    style={StyleSheet.flatten([
                      styles.buttonText(theme),
                      textStyle && textStyle,
                      isSelected && { color: '#fff' },
                      isSelected && selectedTextStyle,
                      isDisabled && styles.disabledText(theme),
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

const styles = {
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
  buttonText: theme => ({
    fontSize: normalizeText(13),
    color: theme.colors.grey2,
    ...Platform.select({
      android: {},
      default: {
        fontWeight: '500',
      },
    }),
  }),
  disabled: {
    backgroundColor: 'transparent',
  },
  disabledText: theme => ({
    color: color(theme.colors.disabled)
      .darken(0.3)
      .toString(),
  }),
  disabledSelected: theme => ({
    backgroundColor: theme.colors.disabled,
  }),
};

ButtonGroup.propTypes = {
  button: PropTypes.object,
  Component: PropTypes.elementType,
  onPress: PropTypes.func,
  buttons: PropTypes.array,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  selectedTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  selectedButtonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  underlayColor: PropTypes.string,
  selectedIndex: PropTypes.number,
  selectedIndexes: PropTypes.arrayOf(PropTypes.number),
  activeOpacity: PropTypes.number,
  onHideUnderlay: PropTypes.func,
  onShowUnderlay: PropTypes.func,
  setOpacityTo: PropTypes.func,
  innerBorderStyle: PropTypes.shape({
    color: PropTypes.string,
    width: PropTypes.number,
  }),
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  selectMultiple: PropTypes.bool,
  theme: PropTypes.object,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledSelectedStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  disabledSelectedTextStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  selectedIndex: null,
  selectedIndexes: [],
  selectMultiple: false,
  disabled: false,
  Component: Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  }),
  onPress: () => null,
  vertical: false,
};

export { ButtonGroup };
export default withTheme(ButtonGroup, 'ButtonGroup');
