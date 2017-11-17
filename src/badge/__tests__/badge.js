import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge from '../badge';

describe('Badge Component', () => {
  it('should render without issue', () => {
    const component = shallow(<Badge />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show error if value and child are included', () => {
    const component = shallow(
      <Badge value="Hello">
        <Text />
      </Badge>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render if element included', () => {
    const component = shallow(
      <Badge>
        <Text title="foo" />
      </Badge>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().children.props.children.props.title).toBe('foo');
  });

  it('should pass value props should still work', () => {
    const component = shallow(<Badge value="foo" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply text style in the badge', () => {
    const component = shallow(<Badge textStyle={{ color: 'orange' }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style in the badge', () => {
    const component = shallow(
      <Badge containerStyle={{ backgroundColor: 'orange' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow adding custom element', () => {
    const component = shallow(<Badge element={<Text>Hello</Text>} />);

    expect(component.find('Text').props().children).toBe('Hello');
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow wrapper style', () => {
    const component = shallow(<Badge wrapperStyle={{}} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
