import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
import Grid from '../Grid';

describe('Grid Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Grid />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(<Grid><Text>Hi</Text></Grid>);

    expect(component.find('Text').length).toBe(1);
  });
});
