import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from '../List';
import ListItem from '../ListItem';
import { getTheme } from '../../config/';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: PropTypes.object },
};

describe('List component', () => {
  it('should render without issues', () => {
    const component = shallow(<List />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(
      <List containerStyle={{ backgroundColor: 'peru' }}>
        <ListItem />
      </List>,
      options
    );

    expect(component.find('ListItem').length).toBe(1);
  });
});
