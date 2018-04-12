import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Text from '../text/Text';
import Icon from '../icons/Icon';
import { colors, ViewPropTypes, getStatusBarHeight } from '../config';

const ALIGN_STYLE = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

const Children = ({ style, placement, children }) => (
  <View style={[style, placement && { alignItems: ALIGN_STYLE[placement] }]}>
    {children == null ? null : React.isValidElement(children) ? (
      children
    ) : children.title ? (
      <Text {...children}>{children.title}</Text>
    ) : children.icon ? (
      <Icon
        {...children}
        containerStyle={[
          { alignItems: ALIGN_STYLE[placement] },
          children.containerStyle,
        ]}
        name={children.icon}
      />
    ) : null}
  </View>
);

const Header = ({
  statusBarProps,
  left,
  center,
  right,
  leftContainerStyle,
  centerContainerStyle,
  rightContainerStyle,
  backgroundColor,
  containerStyle,
  placement,
  ...attributes
}) => (
  <View
    {...attributes}
    style={[
      styles.container,
      backgroundColor && { backgroundColor },
      containerStyle,
    ]}
  >
    <StatusBar barStyle="light-content" {...statusBarProps} />
    <Children
      style={[styles.rightLeftContainer, leftContainerStyle]}
      placement="left"
    >
      {left}
    </Children>
    <Children
      style={[styles.centerContainer, centerContainerStyle]}
      placement={placement}
    >
      {center}
    </Children>
    <Children
      style={[styles.rightLeftContainer, rightContainerStyle]}
      placement="right"
    >
      {right}
    </Children>
  </View>
);

Header.propTypes = {
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  left: PropTypes.object,
  center: PropTypes.object,
  right: PropTypes.object,
  leftContainerStyle: ViewPropTypes.style,
  centerContainerStyle: ViewPropTypes.style,
  rightContainerStyle: ViewPropTypes.style,
  backgroundColor: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  statusBarProps: PropTypes.object,
};

Header.defaultProps = {
  placement: 'center',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 3,
    paddingHorizontal: Platform.OS === 'ios' ? 15 : 16,
  },
  rightLeftContainer: {
    flex: 1,
  },
});

export default Header;
