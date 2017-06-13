import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavButton from '../NavButton';

describe('NavButton Component', () => {
  it('should render without issues', () => {
    const component = shallow(<NavButton />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should accept props', () => {
    const component = shallow(<NavButton icon="home" />);

    expect(component.find('Icon').props().name).toBe('home');
  });
});
