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
import Card from '../Card';

const children = [
  <View key="v0" style={{ width: 50, height: 50, backgroundColor: '#071' }} />,
  <View key="v1" style={{ width: 50, height: 50, backgroundColor: '#293' }} />,
  <View key="v2" style={{ width: 50, height: 50, backgroundColor: '#4b5' }} />,
];

const props = {
  noProps: {
    component: Card,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  flexDirection: {
    component: Card,
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
    component: Card,
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
    component: Card,
    props: { wrapperStyle: { borderWidth: 5 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  title: {
    component: Card,
    props: { title: 'Current Events' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  titleStyle: {
    component: Card,
    props: { title: 'Current Events', titleStyle: { padding: 50 } },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  featuredTitle: {
    component: Card,
    props: { image: 'hero.jpg', featuredTitle: 'Current Events' },
    children,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: { script: `const View = RN.View;\n` },
  },
  featuredTitleStyle: {
    component: Card,
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
    component: Card,
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
    component: Card,
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
    component: Card,
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
    component: Card,
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
    component: Card,
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
    component: Card,
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
    component: Card,
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

describe('Card Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Card />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card title without image', () => {
    const component = shallow(
      <Card
        title="Card Title"
        containerStyle={{ backgroundColor: 'red' }}
        fontFamily="arial"
        dividerStyle={{ backgroundColor: 'red' }}
        flexDirection="row"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card title with image', () => {
    const component = shallow(
      <Card
        title="HELLO WORLD"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        containerStyle={{ backgroundColor: 'red' }}
        titleStyle={{ backgroundColor: 'red' }}
        fontFamily="arial"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card with featured title', () => {
    const component = shallow(
      <Card
        title="foo title"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        imageWrapperStyle={{ backgroundColor: 'red' }}
        imageStyle={{ backgroundColor: 'red' }}
        wrapperStyle={{ backgroundColor: 'red' }}
        featuredTitle="featured title"
        featuredSubtitle="featured sub title"
        featuredTitleStyle={{ backgroundColor: 'red' }}
        featuredSubtitleStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
