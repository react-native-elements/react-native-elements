import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Text as NativeText } from 'react-native';
import getIconType from '../helpers/getIconType';
import ViewPropTypes from '../config/ViewPropTypes';

class Icon extends React.PureComponent {
  render() {
    const {
      type,
      name,
      size,
      color,
      iconStyle,
      component,
      underlayColor,
      reverse,
      raised,
      containerStyle,
      reverseColor,
      onPress,
      ...attributes
    } = this.props;

    let Component = View;
    if (onPress) {
      Component = TouchableHighlight;
    }
    if (component) {
      Component = component;
    }
    let Icon;
    if (!type) {
      Icon = getIconType('material');
    } else {
      Icon = getIconType(type);
    }

    const styles = this.context.theme.icon;

    return (
      <Component
        underlayColor={reverse ? color : underlayColor || color}
        style={[
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
          containerStyle && containerStyle,
        ]}
        onPress={onPress}
        {...attributes}
      >
        <Icon
          style={[{ backgroundColor: 'transparent' }, iconStyle && iconStyle]}
          size={size}
          name={name}
          color={reverse ? reverseColor : color}
        />
      </Component>
    );
  }
}

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
};

Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white',
};

Icon.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Icon;
