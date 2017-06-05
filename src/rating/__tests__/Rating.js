import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Rating from '../Rating';

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
