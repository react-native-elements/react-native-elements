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
});
