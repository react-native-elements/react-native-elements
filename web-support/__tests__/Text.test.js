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
import { Text as Component } from '../../src';

const props = {
  'no props': {
    component: Component,
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h1: {
    component: Component,
    props: { h1: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h2: {
    component: Component,
    props: { h2: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h3: {
    component: Component,
    props: { h3: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h4: {
    component: Component,
    props: { h4: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Component,
    props: { fontFamily: 'Courier New' },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  style: {
    component: Component,
    props: { style: { color: '#071' } },
    children: 'Text',
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
    Misc: { sectionComponents: { Text: { samples } } },
  },
  options
);
