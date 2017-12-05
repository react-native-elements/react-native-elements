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
import { List as Component, ListItem } from '../../src';

const children = [
  <ListItem key="v0" title="item 1" />,
  <ListItem key="v1" title="item 2" />,
  <ListItem key="v2" title="item 3" />,
];

const props = {
  'no props': {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: Component,
    children,
    props: {
      containerStyle: { borderWidth: 5 },
    },
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
    Lists: { sectionComponents: { List: { samples } } },
  },
  options
);
