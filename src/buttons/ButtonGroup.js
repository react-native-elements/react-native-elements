import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Text as NativeText,
  StyleSheet,
  TouchableHighlight,
  Platform,
} from 'react-native';
import colors from '../config/colors';
import Text from '../text/Text';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const ButtonGroup = props => {
  const {
    component,
    buttons,
    onPress,
    selectedIndex,
    containerStyle,
    innerBorderStyle,
    lastBorderStyle,
    buttonStyle,
    textStyle,
    selectedTextStyle,
    selectedBackgroundColor,
    underlayColor,
    activeOpacity,
    onHideUnderlay,
    onShowUnderlay,
    setOpacityTo,
    containerBorderRadius,
    disableSelected,
    ...attributes
  } = props;

  const Component = component || TouchableHighlight;
  return (
    <View
      {...attributes}
      style={[styles.container, containerStyle && containerStyle]}
    >
      {buttons.map((button, i) => {
        const containerRadius = !isNaN(containerBorderRadius)
          ? containerBorderRadius
          : 3;
        return (
          <Component
            activeOpacity={activeOpacity}
            setOpacityTo={setOpacityTo}
            onHideUnderlay={onHideUnderlay}
            onShowUnderlay={onShowUnderlay}
            underlayColor={underlayColor || '#ffffff'}
            disabled={disableSelected && i === selectedIndex ? true : false}
            onPress={onPress ? () => onPress(i) : () => {}}
            key={i}
            style={[
              styles.button,
              // FIXME: This is a workaround to the borderColor and borderRadius bug
              // react-native ref: https://github.com/facebook/react-native/issues/8236
              i < buttons.length - 1 && {
                borderRightWidth:
                  i === 0
                    ? 0
                    : (innerBorderStyle && innerBorderStyle.width) || 1,
                borderRightColor:
                  (innerBorderStyle && innerBorderStyle.color) || colors.grey4,
              },
              i === 1 && {
                borderLeftWidth:
                  (innerBorderStyle && innerBorderStyle.width) || 1,
                borderLeftColor:
                  (innerBorderStyle && innerBorderStyle.color) || colors.grey4,
              },
              i === buttons.length - 1 && {
                ...lastBorderStyle,
                borderTopRightRadius: containerRadius,
                borderBottomRightRadius: containerRadius,
              },
              i === 0 && {
                borderTopLeftRadius: containerRadius,
                borderBottomLeftRadius: containerRadius,
              },
              selectedIndex === i && {
                backgroundColor: selectedBackgroundColor || 'white',
              },
            ]}
          >
            <View style={[styles.textContainer, buttonStyle && buttonStyle]}>
              {button.element
                ? <button.element />
                : <Text
                    style={[
                      styles.buttonText,
                      textStyle && textStyle,
                      selectedIndex === i && { color: colors.grey1 },
                      selectedIndex === i && selectedTextStyle,
                    ]}
                  >
                    {button}
                  </Text>}
            </View>
          </Component>
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
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    height: 40,
  },
  buttonText: {
    fontSize: normalize(13),
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
  },
});

ButtonGroup.propTypes = {
  button: PropTypes.object,
  component: PropTypes.any,
  onPress: PropTypes.func,
  buttons: PropTypes.array,
  containerStyle: ViewPropTypes.style,
  textStyle: NativeText.propTypes.style,
  selectedTextStyle: NativeText.propTypes.style,
  underlayColor: PropTypes.string,
  selectedIndex: PropTypes.number,
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
  selectedBackgroundColor: PropTypes.string,
  containerBorderRadius: PropTypes.number,
  disableSelected: PropTypes.bool,
};

export default ButtonGroup;
