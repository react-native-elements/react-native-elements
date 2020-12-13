import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import theme from '../../config/theme';

import Card from '../Card';

describe('Card Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Card theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card title without image', () => {
    const component = shallow(
      <Card theme={theme}>
        <Card.Title>Card Title</Card.Title>
      </Card>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card title with image', () => {
    const component = shallow(
      <Card theme={theme}>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Card.Image uri="https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" />
      </Card>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card with featured title', () => {
    const component = shallow(
      <Card theme={theme}>
        <Card.FeaturedTitle>featured title</Card.FeaturedTitle>
        <Card.FeaturedSubtitle>featured sub title</Card.FeaturedSubtitle>
        <Card.Image uri="https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" />
      </Card>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
