import React from 'react';
import {shallow} from 'enzyme';
import ListItem from '../ListItem';

describe('ListItem component', () => {
  it('should render without issues', () => {
    const component = shallow(<ListItem />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
