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
import { PricingCard as Component } from '../../src';

const props = {
  'required props: title, price, color, button, & info': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'onButtonPress & required props': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
      onButtonPress: () => {
        console.log('button pressed');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'containerStyle & required props': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
      containerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'wrapperStyle & required props': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
      wrapperStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'titleFont & required props': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
      titleFont: 'Courier New',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'pricingFont & required props': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
      pricingFont: 'Courier New',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'infoFont & required props': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
      infoFont: 'Courier New',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'buttonFont & required props': {
    component: Component,
    props: {
      title: 'Title',
      price: 'price',
      color: '#071',
      button: {
        title: 'buttonTitle',
        icon: 'pets',
        buttonStyle: { borderWidth: 2 },
      },
      info: ['info0', 'info1'],
      buttonFont: 'Courier New',
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
    Cards: { sectionComponents: { PricingCard: { samples } } },
  },
  options
);
