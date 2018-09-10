import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import renderNode from '../helpers/renderNode';
import nodeType from '../helpers/nodeType';

const PlaceholderContent = ({
  renderPlaceholderContent,
  title,
  titleSize,
  titleStyle,
  icon,
  iconSize,
  iconStyle
}) => (
  (renderPlaceholderContent &&
      renderNode(undefined, renderPlaceholderContent)
  ) || (title &&
    <Text style={[styles.title, { fontSize: titleSize }, titleStyle]}>
      {title}
    </Text>
  ) || (icon &&
    <Icon
      style={iconStyle && iconStyle}
      color={icon.color || 'white'}
      name={icon.name || 'user'}
      size={icon.size || iconSize}
      type={icon.type && icon.type}
    />
  ) || null
);

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center',
  }
});

PlaceholderContent.propTypes = {
  renderPlaceholderContent: nodeType,
  title: PropTypes.string,
  titleSize: PropTypes.number,
  titleStyle: Text.propTypes.style,
  icon: PropTypes.object,
  iconSize: PropTypes.number,
  iconStyle: Text.propTypes.style
};

export default PlaceholderContent;
