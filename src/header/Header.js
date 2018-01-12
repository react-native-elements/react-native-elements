import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, StyleSheet, View } from 'react-native';
import isEmpty from 'lodash.isempty';
import DummyNavButton from './DummyNavButton';
import NavButton from './NavButton';
import Title from './Title';
import ViewPropTypes from '../config/ViewPropTypes';

function generateChild(value, type) {
  if (React.isValidElement(value)) {
    return <View key={type}>{value}</View>;
  } else if (typeof value === 'object' && !isEmpty(value)) {
    return type === 'center' ? (
      <Title {...value} key={type} />
    ) : (
      <NavButton {...value} key={type} />
    );
  }
  return type === 'center' ? null : <DummyNavButton key={type} />;
}

function populateChildren(propChildren) {
  const childrenArray = [];

  const leftComponent = generateChild(propChildren.leftComponent, 'left');
  const centerComponent = generateChild(propChildren.centerComponent, 'center');
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
    ...attributes
  } = props;

  let propChildren = [];

  if (leftComponent || centerComponent || rightComponent) {
    propChildren = populateChildren({
      leftComponent,
      centerComponent,
      rightComponent,
    });
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
      <StatusBar {...statusBarProps} />
      <View style={[styles.innerContainer, innerContainerStyles]}>
        {propChildren.length > 0 ? propChildren : children}
      </View>
    </View>
  );
};

Header.propTypes = {
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

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  outerContainer: {
    backgroundColor: '#476DC5',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 15,
    height: 70,
  },
});

export default Header;
