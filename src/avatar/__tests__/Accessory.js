import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accessory from '../Accessory';

describe('Accessory Component', () => {
  jest.useFakeTimers();

  it('uses Icon', () => {
    const component = shallow(<Accessory />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('uses Image', () => {
    const component = shallow(
      <Accessory source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
