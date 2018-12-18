import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableHighlight,
  View,
  StyleSheet,
  Text as NativeText,
} from 'react-native';

import getIconType from '../helpers/getIconType';
import { ViewPropTypes, withTheme } from '../config';

const Icon = props => {
  const {
    type,
    name,
    size,
    color,
    iconStyle,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseRatio,
    reverseColor,
    disabled,
    disabledStyle,
    onPress,
    Component = onPress ? TouchableHighlight : View,
    ...attributes
  } = props;

  const IconComponent = getIconType(type);
  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }

    return raised ? 'white' : 'transparent';
  };

  return (
    <View style={containerStyle && containerStyle}>
      <Component
        {...attributes}
        underlayColor={reverse ? color : underlayColor || color}
        style={StyleSheet.flatten([
          (reverse || raised) && styles.button,
          (reverse || raised) && {
            borderRadius: (size * reverseRatio + 4) / 2,
            height: size * reverseRatio + 4,
            width: size * reverseRatio + 4,
          },
          raised && styles.raised,
          {
            backgroundColor: getBackgroundColor(),
            alignItems: 'center',
            justifyContent: 'center',
          },
          disabled && styles.disabled,
          disabled && disabledStyle,
        ])}
        {...onPress && { disabled }}
        onPress={onPress}
      >
        <IconComponent
          testID="iconIcon"
          style={StyleSheet.flatten([
            { backgroundColor: 'transparent' },
            iconStyle && iconStyle,
          ])}
          size={size}
          name={name}
          color={reverse ? reverseColor : color}
        />
      </Component>
    </View>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  Component: PropTypes.func,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  iconStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
  reverseRatio: PropTypes.number,
  reverseColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
};

Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseRatio: 2,
  reverseColor: 'white',
  disabled: false,
  type: 'material',
};

const styles = StyleSheet.create({
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  disabled: {
    backgroundColor: '#D1D5D8',
  },
});

export { Icon };
export default withTheme(Icon, 'Icon');
