import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge from '../badge';
import getTheme from '../../config/getTheme';

const options = {
  context: { theme: getTheme() },
  childContextTypes: { theme: PropTypes.object },
};

describe('Badge Component', () => {
  it('should render without issue', () => {
    const component = shallow(<Badge />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show error if value and child are included', () => {
    const component = shallow(
      <Badge value="Hello">
        <Text />
      </Badge>,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render if element included', () => {
    const component = shallow(
      <Badge>
        <Text title="foo" />
      </Badge>,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().children.props.children.props.title).toBe('foo');
  });

  it('should pass value props should still work', () => {
    const component = shallow(<Badge value="foo" />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply text style in the badge', () => {
    const component = shallow(
      <Badge textStyle={{ color: 'orange' }} />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style in the badge', () => {
    const component = shallow(
      <Badge containerStyle={{ backgroundColor: 'orange' }} />,
      options
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow adding custom element', () => {
    const component = shallow(<Badge element={<Text>Hello</Text>} />, options);

    expect(component.find('Text').props().children).toBe('Hello');
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow wrapper style', () => {
    const component = shallow(<Badge wrapperStyle={{}} />, options);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
