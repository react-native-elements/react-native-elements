import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import parseSamples, {
  assignRef,
  genRefId,
} from 'enzyme-styleguidist-sample-parser';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import options, {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../../../samples';
import Rating from '../Rating';

const props = {
  'no props': {
    component: Rating,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  onFinishRating: {
    component: Rating,
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
    component: Rating,
    props: { type: 'rocket' },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  'ratingColor, ratingImage, & ratingBackgroundColor': {
    component: Rating,
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
    component: Rating,
    props: { ratingCount: 3 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  imageSize: {
    component: Rating,
    props: { imageSize: 100 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  showRating: {
    component: Rating,
    props: { showRating: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  readonly: {
    component: Rating,
    props: { readonly: true },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  startingValue: {
    component: Rating,
    props: { startingValue: 3.3 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fractions: {
    component: Rating,
    props: { fractions: 2 },
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  style: {
    component: Rating,
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

describe('Rating Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Rating />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render rating label', () => {
    const component = shallow(<Rating showRating />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render custom images', () => {
    const component = shallow(
      <Rating
        type="custom"
        ratingImage={{
          uri: 'https://image.freepik.com/free-icon/smiley_318-121680.jpg',
        }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render custom color', () => {
    const component = shallow(
      <Rating
        type="custom"
        ratingImage={{
          uri: 'https://image.freepik.com/free-icon/smiley_318-121680.jpg',
        }}
        ratingColor="green"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render custom background color', () => {
    const component = shallow(
      <Rating
        type="custom"
        ratingImage={{
          uri: 'https://image.freepik.com/free-icon/smiley_318-121680.jpg',
        }}
        ratingColor="green"
        ratingBackgroundColor="darkgreen"
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render 10 images', () => {
    const component = shallow(<Rating ratingCount={10} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render images with the size of 30', () => {
    const component = shallow(<Rating imageSize={30} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render in readonly mode', () => {
    const component = shallow(<Rating readonly />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with an initial value of 3.3', () => {
    const component = shallow(<Rating showRating startingValue={3.3} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render value with 2 decimal places', () => {
    const component = shallow(<Rating showRating fractions={2} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
