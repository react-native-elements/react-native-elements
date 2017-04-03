import React from 'react';
import {shallow} from 'enzyme';
import List from '../List';
import ListItem from '../ListItem';

describe('List component', () => {
  it('should render without issues', () => {
    const component = shallow(<List />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(<List><ListItem /></List>);

    expect(component.find('ListItem').length).toBe(1);
  });
});
