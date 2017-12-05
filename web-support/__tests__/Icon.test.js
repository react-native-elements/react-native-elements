import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
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
import { Icon as Component } from '../../src';

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  name: {
    component: Component,
    props: { name: 'pets' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  type: {
    component: Component,
    props: { name: 'sms', type: 'octicons' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  size: {
    component: Component,
    props: { name: 'pets', size: 50 },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  color: {
    component: Component,
    props: { name: 'pets', color: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  iconStyle: {
    component: Component,
    props: { name: 'pets', iconStyle: { transform: [{ rotateZ: '-45deg' }] } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  component: {
    component: Component,
    props: { name: 'pets', component: TouchableWithoutFeedback },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      getJsxString: () => {
        return `  const TouchableWithoutFeedback = RN.TouchableWithoutFeedback;
  <Icon 
  name='pets'
    component={TouchableWithoutFeedback}
  />`;
      },
    },
  },
  onPress: {
    component: Component,
    props: {
      name: 'pets',
      onPress: () => {
        console.log('pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  onLongPress: {
    component: Component,
    props: {
      name: 'pets',
      onLongPress: () => {
        console.log('pressed, long');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  underlayColor: {
    component: Component,
    props: {
      name: 'pets',
      onPress: () => {
        console.log('pressed');
      },
      underlayColor: 'yellow',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  reverse: {
    component: Component,
    props: { name: 'pets', reverse: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  raised: {
    component: Component,
    props: { name: 'pets', raised: true },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  containerStyle: {
    component: Component,
    props: { name: 'pets', containerStyle: { padding: 50 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
  reverseColor: {
    component: Component,
    props: { name: 'pets', reverse: true, reverseColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
  },
};
const samples = {
  props,
};

parseSamples(
  {
    Icons: { sectionComponents: { Icon: { samples } } },
  },
  options
);
