import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import Col from '../Col';

describe('Col Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Col />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(<Col><Text>Hi</Text></Col>);

    expect(component.find('Text').length).toBe(1);
  });
});
