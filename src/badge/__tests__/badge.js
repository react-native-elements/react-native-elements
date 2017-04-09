import React from 'react';
import { Text } from 'react-native';
import {shallow} from 'enzyme';
import Badge from '../Badge';

describe('Badge Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Badge badge={{}} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should throw Error is badge is not sent', () => {
    expect(() => {
      shallow(<Badge />);
    }).toThrow('badge prop is required');
  });
  
  it('should render badge.element if included', () => {
    const foo = (<Text title='foo' />);
    const component = shallow(<Badge badge={{ element: foo }} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
    expect(component.props().title).toBe('foo');
  });
});
