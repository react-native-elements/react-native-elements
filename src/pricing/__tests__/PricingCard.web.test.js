import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
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
} from '../../../samples';
import PricingCard from '../PricingCard';

const props = {
  'required props: title, price, color, button, & info': {
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
      },
      info: ['info0', 'info1'],
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  'onButtonPress & required props': {
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
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
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
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
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
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
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
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
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
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
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
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
    component: PricingCard,
    props: {
      title: 'Title',
      price: '$71',
      color: '#071',
      button: {
        title: 'BUTTON TEXT',
        icon: 'pets',
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

describe('PricingCard component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <PricingCard
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with props', () => {
    const component = shallow(
      <PricingCard
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        titleFont="arial"
        infoFont="arial"
        pricingFont="arial"
        buttonFont="arial"
        containerStyle={{ backgroundColor: 'peru' }}
        wrapperStyle={{ backgroundColor: 'peru' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
