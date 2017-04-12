import React from 'react';
import { Text } from 'react-native';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge from '../badge';

describe('Badge Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Badge badge={{}} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should throw Error if badge is not sent', () => {
    expect(() => {
      shallow(<Badge />);
    }).toThrow('badge prop is required');
  });

  it('should render badge.element if included', () => {
    const foo = (<Text title='foo' />);
    const component = shallow(<Badge badge={{ element: foo }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().title).toBe('foo');
  });
});
