import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SwipeDeck from '../SwipeDeck';

describe('SwipeDeck Component', () => {
  it('should render without issues', () => {
    const component = shallow(<SwipeDeck />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
