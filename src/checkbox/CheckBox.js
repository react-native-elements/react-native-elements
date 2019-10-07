import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  Text as NativeText,
} from 'react-native';

import TextElement from '../text/Text';
import CheckBoxIcon from './CheckBoxIcon';
import { fonts, ViewPropTypes, withTheme } from '../config';

const CheckBox = props => {
  const { theme, ...rest } = props;

  const {
    Component,
    checked,
    iconRight,
    title,
    titleProps,
    center,
    right,
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

  return (
    <Component
      {...attributes}
      testID="checkbox"
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
          : title && (
              <TextElement
                testID="checkboxTitle"
                style={StyleSheet.flatten([
                  styles.text(theme),
                  textStyle && textStyle,
                  fontFamily && { fontFamily },
                ])}
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
CheckBox.propTypes = {
  ...CheckBoxIcon.propTypes,
  Component: PropTypes.elementType,
  iconRight: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  center: PropTypes.bool,
  right: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  textStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  checkedTitle: PropTypes.string,
  fontFamily: PropTypes.string,
};

CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o',
  size: 24,
  Component: TouchableOpacity,
  titleProps: {},
};

const styles = {
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
  text: theme => ({
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
  }),
};

export { CheckBox };
export default withTheme(CheckBox, 'CheckBox');
