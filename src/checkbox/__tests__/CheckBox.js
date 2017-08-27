import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CheckBox from '../CheckBox';
import { getTheme } from '../../config';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: PropTypes.object },
};

describe('CheckBox Component', () => {
  it('should render without issues', () => {
    const component = shallow(<CheckBox />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should use TouchableOpacity as default component', () => {
    const component = shallow(<CheckBox />, options);

    expect(component.find('TouchableOpacity').length).toBe(1);
  });

  it('should allow to pass custom component', () => {
    const View = jest.fn();
    const component = shallow(<CheckBox component={View} />, options);

    expect(component.find('View').length).toBe(1);
  });

  it('should render title in Text', () => {
    const component = shallow(
      <CheckBox title="Custom Text" checked />,
      options
    );

    expect(component.props().children.props.children[1].props.children).toBe(
      'Custom Text'
    );
  });

  it('should render with icon and checked', () => {
    const component = shallow(
      <CheckBox
        iconType="font-awesome"
        checkedColor="red"
        containerStyle={{ backgroundColor: 'red' }}
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon and iconRight', () => {
    const component = shallow(
      <CheckBox
        iconType="font-awesome"
        iconRight
        uncheckedColor="blue"
        right
        center
      />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
