import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Divider from '../Divider';
import { getTheme } from '../../config';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: PropTypes.object },
};

describe('Divider Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Divider />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with style', () => {
    const component = shallow(
      <Divider style={{ backgroundColor: 'blue' }} />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().style.length).toBe(2);
    expect(component.props().style[1].backgroundColor).toBe('blue');
  });
});
