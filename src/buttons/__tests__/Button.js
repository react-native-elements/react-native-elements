import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../Button';

describe('Button Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Button />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
