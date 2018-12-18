import React from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import theme from '../../config/theme';

import ThemedBadge, { Badge } from '../Badge';

describe('Badge Component', () => {
  it('should render without issue', () => {
    const component = shallow(<Badge theme={theme} value={10} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render if element included', () => {
    const component = shallow(
      <Badge theme={theme} value={<Text title="foo" />} />
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

  it('should apply container style in the badge', () => {
    const component = shallow(
      <Badge
        theme={theme}
        value={10}
        containerStyle={{ backgroundColor: 'orange' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow badge style', () => {
    const component = shallow(
      <Badge
        theme={theme}
        value={10}
        badgeStyle={{ backgroundColor: 'pink' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow custom component', () => {
    const component = shallow(
      <Badge theme={theme} value={10} Component={TouchableWithoutFeedback} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have a touchable when onPress is passed in', () => {
    const component = shallow(
      <Badge theme={theme} value={10} onPress={jest.fn()} />
    );

    expect(component.length).toBe(1);
    expect(component.find(TouchableOpacity)).toBeTruthy();
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Mini badge', () => {
    it('primary', () => {
      const component = shallow(<Badge theme={theme} />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('success', () => {
      const component = shallow(<Badge theme={theme} status="success" />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('warning', () => {
      const component = shallow(<Badge theme={theme} status="warning" />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });

    it('error', () => {
      const component = shallow(<Badge theme={theme} status="error" />);

      expect(component.length).toBe(1);
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  it('should use values set by the theme', () => {
    const testTheme = {
      Badge: {
        textStyle: { color: 'red' },
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={testTheme}>
        <ThemedBadge value="red" />
      </ThemeProvider>
    );

    expect(component.root.findByType(Text).props.style).toMatchObject({
      color: 'red',
    });
  });
});
