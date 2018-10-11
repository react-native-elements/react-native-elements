import React from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import theme from '../../config/theme';

import ThemedBadge, { Badge } from '../badge';

describe('Badge Component', () => {
  it('should render without issue', () => {
    const component = shallow(<Badge theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show error if value and child are included', () => {
    const component = shallow(
      <Badge theme={theme} value="Hello">
        <Text />
      </Badge>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render if element included', () => {
    const component = shallow(
      <Badge theme={theme}>
        <Text title="foo" />
      </Badge>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
    expect(component.props().children.props.children.props.title).toBe('foo');
  });

  it('should pass value props should still work', () => {
    const component = shallow(<Badge theme={theme} value="foo" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply text style in the badge', () => {
    const component = shallow(
      <Badge theme={theme} textStyle={{ color: 'orange' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style in the badge', () => {
    const component = shallow(
      <Badge theme={theme} containerStyle={{ backgroundColor: 'orange' }} />
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
    const component = shallow(<Badge theme={theme} wrapperStyle={{}} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow custom component', () => {
    const component = shallow(
      <Badge theme={theme} value="23" component={TouchableWithoutFeedback} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have a touchable when onPress is passed in', () => {
    const component = shallow(
      <Badge theme={theme} value="23" onPress={jest.fn()} />
    );

    expect(component.length).toBe(1);
    expect(component.find(TouchableOpacity)).toBeTruthy();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should use values set by the theme', () => {
    const theme = {
      Badge: {
        textStyle: { color: 'red' },
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ThemedBadge value="red" />
      </ThemeProvider>
    );

    expect(component.root.findByType(Text).props.style).toMatchObject({
      color: 'red',
    });
  });
});
