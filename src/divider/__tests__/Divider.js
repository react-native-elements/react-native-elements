import React from 'react';
import {shallow} from 'enzyme';
import Divider from '../Divider';

describe('Divider Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Divider />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
  it('should render with style', () => {
    const component = shallow(<Divider style={{ backgroundColor: 'blue' }} />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
    expect(component.props().style.length).toBe(2);
    expect(component.props().style[1].backgroundColor).toBe('blue');
  });
});
