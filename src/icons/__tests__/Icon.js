import React from 'react';
import {shallow} from 'enzyme';
import Icon from '../Icon';

describe('Icon component', () => {
  it('should render without issues', () => {
    const component = shallow(<Icon name="wifi"/>);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
