import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DummyNavButton from '../DummyNavButton';
import '../../__tests__/setup';

describe('DummyNavButton Component', () => {
  it('should render without issues', () => {
    const component = shallow(<DummyNavButton />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
