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
import { Rating as Component } from '../../src';

const props = {
  'no props': {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onFinishRating: {
    component: Component,
    props: {
      onFinishRating: rating => {
        console.log(rating);
      },
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  type: {
    component: Component,
    props: { type: 'rocket' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  'ratingColor, ratingImage, & ratingBackgroundColor': {
    component: Component,
    props: {
      type: 'custom',
      ratingImage: 'water.png',
      ratingColor: 'blue',
      ratingBackgroundColor: '#aaa',
    },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  ratingCount: {
    component: Component,
    props: { ratingCount: 3 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  imageSize: {
    component: Component,
    props: { imageSize: 100 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  showRating: {
    component: Component,
    props: { showRating: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  readonly: {
    component: Component,
    props: { readonly: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  startingValue: {
    component: Component,
    props: { startingValue: 3.3 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fractions: {
    component: Component,
    props: { fractions: 2 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  style: {
    component: Component,
    props: { style: { backgroundColor: 'red', padding: 5 } },
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
    Input: { sectionComponents: { Rating: { samples } } },
  },
  options
);
