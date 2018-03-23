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
import { fonts, colors, ViewPropTypes } from '../config';

const CheckBox = props => {
  const {
    component,
    checked,
    iconRight,
    title,
    center,
    right,
    containerStyle,
    textStyle,
    onPress,
    onLongPress,
    checkedTitle,
    fontFamily,
    ...attributes
  } = props;

  const Component = component;

  return (
    <Component
      {...attributes}
      onLongPress={onLongPress}
      onPress={onPress}
      style={[
        styles.container,
        title && styles.containerHasTitle,
        containerStyle && containerStyle,
      ]}
    >
      <View
        style={[
          styles.wrapper,
          right && { justifyContent: 'flex-end' },
          center && { justifyContent: 'center' },
        ]}
      >
        {!iconRight && <CheckBoxIcon {...props} />}

        {React.isValidElement(title)
          ? title
          : title && (
              <TextElement
                style={[
                  styles.text,
                  textStyle && textStyle,
                  fontFamily && { fontFamily },
                ]}
              >
                {checked ? checkedTitle || title : title}
              </TextElement>
            )}

        {iconRight && <CheckBoxIcon {...props} />}
      </View>
    </Component>
  );
};

CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  checkedColor: colors.primary,
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o',
  size: 24,
  component: TouchableOpacity,
};

CheckBox.propTypes = {
  ...CheckBoxIcon.propTypes,
  component: PropTypes.any,
  iconRight: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  center: PropTypes.bool,
  right: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  textStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  checkedTitle: PropTypes.string,
  fontFamily: PropTypes.string,
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
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: colors.grey1,
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        ...fonts.android.bold,
      },
    }),
  },
});

export default CheckBox;
