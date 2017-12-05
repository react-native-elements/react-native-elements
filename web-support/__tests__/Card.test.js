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
import { Card as Component } from '../../src';

const children = [
  <View key="v0" style={{ width: 50, height: 50, backgroundColor: '#071' }} />,
  <View key="v1" style={{ width: 50, height: 50, backgroundColor: '#293' }} />,
  <View key="v2" style={{ width: 50, height: 50, backgroundColor: '#4b5' }} />,
];

const props = {
  noProps: {
    component: Component,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  flexDirection: {
    component: Component,
    props: { flexDirection: 'row' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {
      script: `const View = RN.View;\n`,
    },
  },
  containerStyle: {
    component: Component,
    props: { containerStyle: { borderWidth: 5 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {
      script: `const View = RN.View;\n`,
    },
  },
  wrapperStyle: {
    component: Component,
    props: { wrapperStyle: { borderWidth: 5 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  title: {
    component: Component,
    props: { title: 'Current Events' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  titleStyle: {
    component: Component,
    props: { title: 'Current Events', titleStyle: { padding: 50 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  featuredTitle: {
    component: Component,
    props: { image: 'hero.jpg', featuredTitle: 'Current Events' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  featuredTitleStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      featuredTitle: 'Current Events',
      featuredTitleStyle: { color: '#4b5' },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  featuredSubtitle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      featuredTitle: 'Current Events',
      featuredSubtitle: 'something',
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  featuredSubtitleStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      featuredTitle: 'Current Events',
      featuredSubtitle: 'something',
      featuredSubtitleStyle: { color: '#4b5' },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  dividerStyle: {
    component: Component,
    props: {
      title: 'Current Events',
      dividerStyle: { backgroundColor: '#4b5', height: 5 },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  fontFamily: {
    component: Component,
    props: {
      title: 'Current Events',
      fontFamily: 'Courier New',
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  imageStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      imageStyle: { opacity: 0.3 },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  imageProps: {
    component: Component,
    props: {
      image: 'hero.jpg',
      imageProps: { resizeMode: 'contain' },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  imageWrapperStyle: {
    component: Component,
    props: {
      image: 'hero.jpg',
      imageWrapperStyle: { borderWidth: 5 },
    },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Cards: { sectionComponents: { Card: { samples } } },
  },
  options
);
