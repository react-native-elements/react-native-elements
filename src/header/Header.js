import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View } from 'react-native';
import isEmpty from 'lodash.isempty';
import DummyNavButton from './DummyNavButton';
import NavButton from './NavButton';
import Title from './Title';
import { ViewPropTypes } from '../config';

function generateChild(value, type) {
  if (React.isValidElement(value)) {
    return (
      <View key={type}>
        {value}
      </View>
    );
  } else if (typeof value === 'object' && !isEmpty(value)) {
    return type === 'center'
      ? <Title {...value} key={type} />
      : <NavButton {...value} key={type} />;
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

class Header extends React.PureComponent {
  render() {
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
    } = this.props;

    let propChildren = [];

    if (leftComponent || centerComponent || rightComponent) {
      propChildren = populateChildren({
        leftComponent,
        centerComponent,
        rightComponent,
      });
    }

    const styles = this.context.theme.header;

    return (
      <View
        style={[
          styles.outerContainer,
          { backgroundColor },
          outerContainerStyles,
        ]}
        {...attributes}
      >
        <StatusBar {...statusBarProps} />
        <View style={[styles.innerContainer, innerContainerStyles]}>
          {propChildren.length > 0 ? propChildren : children}
        </View>
      </View>
    );
  }
}

Header.propTypes = {
  leftComponent: PropTypes.object,
  centerComponent: PropTypes.object,
  rightComponent: PropTypes.object,
  backgroundColor: PropTypes.string,
  outerContainerStyles: ViewPropTypes.style,
  innerContainerStyles: ViewPropTypes.style,
  children: PropTypes.element,
  statusBarProps: PropTypes.object,
};

Header.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Header;
