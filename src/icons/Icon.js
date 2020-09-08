import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Color from 'color';

import getIconType from '../helpers/getIconType';
import getIconStyle from '../helpers/getIconStyle';
import { withTheme } from '../config';

const Icon = (props) => {
  const {
    type,
    name,
    size,
    color: colorProp,
    iconStyle,
    iconProps,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor: reverseColorProp,
    disabled,
    disabledStyle,
    onPress,
    Component = onPress
      ? Platform.select({
          android: TouchableNativeFeedback,
          default: TouchableHighlight,
        })
      : View,
    solid,
    brand,
    theme,
    ...attributes
  } = props;
  const color = colorProp || theme.colors.black;
  const reverseColor = reverseColorProp || theme.colors.white;

  const IconComponent = getIconType(type);
  const iconSpecificStyle = getIconStyle(type, { solid, brand });
  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }

    return raised ? theme.colors.white : 'transparent';
  };

  const buttonStyles = {
    borderRadius: size + 4,
    height: size * 2 + 4,
    width: size * 2 + 4,
  };

  if (Platform.OS === 'android' && !attributes.background) {
    if (Platform.Version >= 21) {
      attributes.background = TouchableNativeFeedback.Ripple(
        Color(color).alpha(0.2).rgb().string(),
        true
      );
    }
  }

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        (reverse || raised) && styles.button,
        (reverse || raised) && buttonStyles,
        raised && styles.raised,
        iconStyle && iconStyle.borderRadius
          ? {
              borderRadius: iconStyle.borderRadius,
            }
          : {},
        containerStyle && containerStyle,
      ])}
    >
      <Component
        {...attributes}
        {...(onPress && {
          onPress,
          disabled,
          underlayColor: reverse ? color : underlayColor,
          activeOpacity: 0.3,
        })}
      >
        <View
          style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
              backgroundColor: getBackgroundColor(),
              alignItems: 'center',
              justifyContent: 'center',
            },
            disabled && styles.disabled,
            disabled && disabledStyle,
          ])}
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
            {...iconSpecificStyle}
            {...iconProps}
          />
        </View>
      </Component>
    </View>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  Component: PropTypes.elementType,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
  reverseColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  solid: PropTypes.bool,
  brand: PropTypes.bool,
};

Icon.defaultProps = {
  underlayColor: 'transparent',
  reverse: false,
  raised: false,
  size: 24,
  disabled: false,
  type: 'material',
  solid: false,
  brand: false,
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
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
