import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import isEmpty from 'lodash.isempty';
import DummyNavButton from './DummyNavButton';
import NavButton from './NavButton';
import Title from './Title';
import { colors, ViewPropTypes, getStatusBarHeight } from '../config';

const androidStatusBarHeight = 24;

function alignStyle(placement) {
  switch(placement) {
    case 'left':
      return 'flex-start';
    case 'right': 
      return 'flex-end';
    default:
      return 'center';
  }
}

function generateChild(value, type, placement) {
  if (React.isValidElement(value)) {
    return <View key={type}>{value}</View>;
  } else if (typeof value === 'object' && !isEmpty(value)) {
    return type === 'center' ? (
      <View key={type} style={[styles.centerComponentContainer, {
        alignItems: alignStyle(placement)
      }]}>
        <Title {...value} />
      </View>
    ) : (
      <NavButton {...value} key={type} />
    );
  }
  return type === 'center' ? null : <DummyNavButton key={type} />;
}

function populateChildren(propChildren, align) {
  const childrenArray = [];

  const leftComponent = generateChild(propChildren.leftComponent, 'left');
  const centerComponent = generateChild(propChildren.centerComponent, 'center', align);
  const rightComponent = generateChild(propChildren.rightComponent, 'right');

  childrenArray.push(leftComponent, centerComponent, rightComponent);

  return childrenArray;
}

const Header = props => {
  const {
    children,
    statusBarProps,
    leftComponent,
    centerComponent,
    rightComponent,
    backgroundColor,
    outerContainerStyles,
    innerContainerStyles,
    align,
    ...attributes
  } = props;

  let propChildren = [];

  if (leftComponent || centerComponent || rightComponent) {
    propChildren = populateChildren({
      leftComponent,
      centerComponent,
      rightComponent,
    }, align);
  }

  return (
    <View
      {...attributes}
      style={[
        styles.outerContainer,
        backgroundColor && { backgroundColor },
        outerContainerStyles,
      ]}
    >
      <StatusBar barStyle="light-content" {...statusBarProps} />
      <View style={[styles.innerContainer, innerContainerStyles]}>
        {propChildren.length > 0 ? propChildren : children}
      </View>
    </View>
  );
};

Header.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  leftComponent: PropTypes.object,
  centerComponent: PropTypes.object,
  rightComponent: PropTypes.object,
  backgroundColor: PropTypes.string,
  outerContainerStyles: ViewPropTypes.style,
  innerContainerStyles: ViewPropTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  statusBarProps: PropTypes.object,
};

Header.defaultProps = {
  align: 'center'
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outerContainer: {
    backgroundColor: colors.primary,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    height: Platform.OS === 'ios' ? 70 : 70 - androidStatusBarHeight,
    ...Platform.select({
      ios: {
        paddingTop: getStatusBarHeight()
      }
    })
  },
  centerComponentContainer: {
    flex: 1,
    marginHorizontal: Platform.OS === 'ios' ? 15 : 16,
  }
});

export default Header;
