import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text as NativeText,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';

import { ViewPropTypes, withTheme } from '../config';
import Text from '../text/Text';
import normalize from '../helpers/normalizeText';

const ButtonGroup = props => {
  const { theme, ...rest } = props;

  const {
    component: Component,
    buttons,
    onPress,
    selectedIndex,
    selectedIndexes,
    selectMultiple,
    containerStyle,
    innerBorderStyle,
    lastBorderStyle,
    buttonStyle,
    textStyle,
    selectedTextStyle,
    selectedButtonStyle,
    underlayColor = theme.colors.primary,
    activeOpacity,
    onHideUnderlay,
    onShowUnderlay,
    setOpacityTo,
    containerBorderRadius,
    disableSelected,
    ...attributes
  } = rest;

  let innerBorderWidth = 1;

  if (innerBorderStyle && innerBorderStyle.hasOwnProperty('width')) {
    innerBorderWidth = innerBorderStyle.width;
  }

  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        styles.container,
        containerStyle && containerStyle,
      ])}
    >
      {buttons.map((button, i) => {
        const isSelected = selectedIndex === i || selectedIndexes.includes(i);

        return (
          <View
            key={i}
            style={StyleSheet.flatten([
              // FIXME: This is a workaround to the borderColor and borderRadius bug
              // react-native ref: https://github.com/facebook/react-native/issues/8236
              styles.button,
              i < buttons.length - 1 && {
                borderRightWidth: i === 0 ? 0 : innerBorderWidth,
                borderRightColor:
                  (innerBorderStyle && innerBorderStyle.color) ||
                  theme.colors.grey4,
              },
              i === 1 && {
                borderLeftWidth: innerBorderWidth,
                borderLeftColor:
                  (innerBorderStyle && innerBorderStyle.color) ||
                  theme.colors.grey4,
              },
              i === buttons.length - 1 && {
                ...lastBorderStyle,
                borderTopRightRadius: containerBorderRadius,
                borderBottomRightRadius: containerBorderRadius,
              },
              i === 0 && {
                borderTopLeftRadius: containerBorderRadius,
                borderBottomLeftRadius: containerBorderRadius,
              },
            ])}
          >
            <Component
              activeOpacity={activeOpacity}
              setOpacityTo={setOpacityTo}
              onHideUnderlay={onHideUnderlay}
              onShowUnderlay={onShowUnderlay}
              underlayColor={underlayColor}
              disabled={disableSelected && isSelected ? true : false}
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: 40,
  },
  buttonText: theme => ({
    fontSize: normalize(13),
    color: theme.colors.grey2,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
  }),
};

ButtonGroup.propTypes = {
  button: PropTypes.object,
  component: PropTypes.any,
  onPress: PropTypes.func,
  buttons: PropTypes.array,
  containerStyle: ViewPropTypes.style,
  textStyle: NativeText.propTypes.style,
  selectedTextStyle: NativeText.propTypes.style,
  selectedButtonStyle: ViewPropTypes.style,
  underlayColor: PropTypes.string,
  selectedIndex: PropTypes.number,
  selectedIndexes: PropTypes.arrayOf(PropTypes.number),
  activeOpacity: PropTypes.number,
  onHideUnderlay: PropTypes.func,
  onShowUnderlay: PropTypes.func,
  setOpacityTo: PropTypes.any,
  innerBorderStyle: PropTypes.shape({
    color: PropTypes.string,
    width: PropTypes.number,
  }),
  lastBorderStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    NativeText.propTypes.style,
  ]),
  buttonStyle: ViewPropTypes.style,
  containerBorderRadius: PropTypes.number,
  disableSelected: PropTypes.bool,
  selectMultiple: PropTypes.bool,
  theme: PropTypes.object,
};

ButtonGroup.defaultProps = {
  selectedIndexes: [],
  selectMultiple: false,
  containerBorderRadius: 3,
  onPress: () => {},
  component: Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
};

export { ButtonGroup };
export default withTheme(ButtonGroup, 'ButtonGroup');
