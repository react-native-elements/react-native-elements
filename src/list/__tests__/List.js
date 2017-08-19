import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from '../List';
import ListItem from '../ListItem';

describe('List component', () => {
  it('should render without issues', () => {
    const component = shallow(<List />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(
      <List containerStyle={{ backgroundColor: 'peru' }}>
        <ListItem />
      </List>
    );

    expect(component.find('ListItem').length).toBe(1);
  });
});
