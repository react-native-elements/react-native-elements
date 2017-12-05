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
import { FormLabel as Component } from '../../src';

const props = {
  containerStyle: {
    component: Component,
    children: 'enter something',
    props: { containerStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  labelStyle: {
    component: Component,
    children: 'enter something',
    props: { labelStyle: { backgroundColor: '#2ff', padding: 5 } },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Component,
    children: 'enter something',
    props: { fontFamily: 'Courier New' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Forms: { sectionComponents: { FormLabel: { samples } } },
  },
  options
);
