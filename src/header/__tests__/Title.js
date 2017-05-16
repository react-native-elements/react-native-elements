import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Title from '../Title';

describe('Title Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Title />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should accept props', () => {
    const component = shallow(<Title text="Test title" />);

    expect(component.find('TextElement').props().children).toBe('Test title');
  });
});
