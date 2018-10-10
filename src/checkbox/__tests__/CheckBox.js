import React from 'react';
import { Image } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedCheckBox, { CheckBox } from '../CheckBox';

describe('CheckBox Component', () => {
  it('should render without issues', () => {
    const component = shallow(<CheckBox theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should use TouchableOpacity as default component', () => {
    const component = shallow(<CheckBox theme={theme} />);

    expect(component.find('TouchableOpacity').length).toBe(1);
  });

  it('should allow to pass custom component', () => {
    const View = jest.fn();
    const component = shallow(<CheckBox theme={theme} component={View} />);

    expect(component.find(View).exists()).toBe(true);
  });

  it('should render title in Text', () => {
    const component = shallow(
      <CheckBox theme={theme} title="Custom Text" checked />
    );

    expect(component.props().children.props.children[1].props.children).toBe(
      'Custom Text'
    );
  });

  it('should render with icon and checked', () => {
    const component = shallow(
      <CheckBox
        theme={theme}
        iconType="font-awesome"
        checkedColor="red"
        containerStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon and iconRight', () => {
    const component = shallow(
      <CheckBox
        theme={theme}
        iconType="font-awesome"
        iconRight
        uncheckedColor="blue"
        center
        right
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow custom checked Icon', () => {
    const component = shallow(
      <CheckBox
        theme={theme}
        checked={true}
        checkedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/jcY95H/checked.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
        uncheckedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/fda0Cx/no_check.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should allow custom checked Icon', () => {
    const component = shallow(
      <CheckBox
        theme={theme}
        checked={false}
        checkedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/jcY95H/checked.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
        uncheckedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/fda0Cx/no_check.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should use values from theme', () => {
    const theme = {
      CheckBox: {
        title: 'George is Cool',
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ThemedCheckBox />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'checkboxTitle' }).props.children
    ).toBe('George is Cool');
  });
});
