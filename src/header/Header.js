import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from '../icons/Icon';

const DummyNavButton = () => (
  <View style={styles.dummyNavBtn} />
);

const Title = (props) => {
  const {
    text,
  ...attributes,
  } = props;

  return (
    <Text
      numberOfLines={1}
      {...attributes}
    >
      {text}
    </Text>
  );
};

const NavButton = (props) => {
  const {
    icon,
  ...attributes,
  } = props;

  return (
    <Icon
      name={icon}
      {...attributes}
    />
  );
};

function populateDefaultChildren(defaultChildren) {
  const childrenArray = [];

  childrenArray.push(defaultChildren.leftButtonConfig ?
    <NavButton {...defaultChildren.leftButtonConfig} key="nav1" /> :
    <DummyNavButton key="nav1" />
  );
  childrenArray.push(defaultChildren.titleConfig ?
    <Title {...defaultChildren.titleConfig} key="nav2" /> :
    null
  );
  childrenArray.push(defaultChildren.rightButtonConfig ?
    <NavButton {...defaultChildren.rightButtonConfig} key="nav3" /> :
    <DummyNavButton key="nav3" />
  );

  return childrenArray;
}

const Header = (props) => {
  const {
    children,
    statusBarProps,
    leftButtonConfig,
    titleConfig,
    rightButtonConfig,
    outerContainerStyles,
    innerContainerStyles,
    ...attributes,
  } = props;

  let defaultChildren = [];

  if (leftButtonConfig || titleConfig || rightButtonConfig) {
    defaultChildren = populateDefaultChildren({
      leftButtonConfig,
      titleConfig,
      rightButtonConfig,
    });
  }

  return (
    <View style={[styles.outerContainer, outerContainerStyles]} {...attributes}>
      <StatusBar {...statusBarProps} />
      <View style={[styles.innerContainer, innerContainerStyles]}>
        {defaultChildren.length > 0 ? defaultChildren : children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dummyNavBtn: {
    height: 24,
    width: 24,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  outerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 15,
    height: 70,
  },
});

export default Header;
