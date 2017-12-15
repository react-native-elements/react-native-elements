import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import parseSamples, {
  assignRef,
  genRefId,
} from 'enzyme-styleguidist-sample-parser';
import options, {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../samples';
import { Header as Component } from '../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  statusBarProps: {
    component: Component,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  leftComponent: {
    component: Component,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      buildJsx: () => {
        return <Component leftComponent={<Text>sample component</Text>} />;
      },
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
      buildJsx: () => {
        return <Component leftComponent={<Text>sample component</Text>} />;
      },
    },
  },
  'leftComponent icon': {
    component: Component,
    props: { leftComponent: { icon: 'directions-bike' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  centerComponent: {
    component: Component,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      buildJsx: () => {
        return <Component centerComponent={<Text>sample component</Text>} />;
      },
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
      buildJsx: () => {
        return <Component centerComponent={<Text>sample component</Text>} />;
      },
    },
  },
  'centerComponent text': {
    component: Component,
    props: { centerComponent: { text: 'text sample' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightComponent: {
    component: Component,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      buildJsx: () => {
        return <Component rightComponent={<Text>sample component</Text>} />;
      },
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
      buildJsx: () => {
        return <Component rightComponent={<Text>sample component</Text>} />;
      },
    },
  },
  'rightComponent icon': {
    component: Component,
    props: { rightComponent: { icon: 'pets' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  backgroundColor: {
    component: Component,
    props: { backgroundColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  outerContainerStyles: {
    component: Component,
    props: { outerContainerStyles: { borderWidth: 5 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  innerContainerStyles: {
    component: Component,
    props: { innerContainerStyles: { borderWidth: 5 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Misc: { sectionComponents: { Header: { samples } } },
  },
  options
);
