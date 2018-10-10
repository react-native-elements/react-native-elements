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
    reverseColor,
    disabled,
    disabledStyle,
    onPress,
    component: Component = onPress ? TouchableHighlight : View,
    ...attributes
  } = props;

  let Icon = getIconType(type || 'material');

  return (
    <View style={containerStyle && containerStyle}>
      <Component
        {...attributes}
        underlayColor={reverse ? color : underlayColor || color}
        style={StyleSheet.flatten([
          (reverse || raised) && styles.button,
          (reverse || raised) && {
            borderRadius: size + 4,
            height: size * 2 + 4,
            width: size * 2 + 4,
          },
          raised && styles.raised,
          {
            backgroundColor: reverse ? color : raised ? 'white' : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          },
          disabled && styles.disabled,
          disabled && disabledStyle,
        ])}
        {...onPress && { disabled }}
        onPress={onPress}
      >
        <Icon
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
  component: PropTypes.func,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  iconStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
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
  reverseColor: 'white',
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  disabled: {
    backgroundColor: '#D1D5D8',
  },
});

export { Icon };
export default withTheme(Icon, 'Icon');
