import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';
import { TouchableHighlight } from 'react-native';

import { ThemeProvider } from '../../config';

import ThemedRating, { Rating } from '../Rating';

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

  it('should apply values from theme', () => {
    const theme = {
      Rating: {
        ratingColor: 'red',
        type: 'custom',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedRating showRating startingValue={3} />
      </ThemeProvider>
    );

    expect(
      component.root.findAllByProps({ testID: 'ratingItem' })[0].props.style
        .backgroundColor
    ).toBe('red');

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should rate on star click', () => {
    const component = shallow(<Rating startingValue={3} />);

    expect(component.instance().getCurrentRating()).toBe(3);
    component
      .find(TouchableHighlight)
      .first()
      .props()
      .onPress();
    expect(component.instance().getCurrentRating()).toBe(1);
  });
});
