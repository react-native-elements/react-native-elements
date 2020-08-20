import React from 'react';
import { Platform } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedIcon, { Icon } from '../Icon';

const theme = {
  colors: {
    black: 'black',
    white: 'white',
  },
};

describe('Icon component', () => {
  it('should render without issues', () => {
    const component = shallow(<Icon name="wifi" theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icon type', () => {
    const component = shallow(
      <Icon
        name="alert"
        type="octicon"
        reverse
        color="red"
        iconStyle={{ backgroundColor: 'peru', borderRadius: 30 }}
        onPress={jest.fn()}
        theme={theme}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(
      <Icon onPress={onPress} name="wifi" theme={theme} />
    );
    const touchable = component.childAt(0);
    touchable.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should apply default disabled styles', () => {
    const onPress = jest.fn();
    const component = shallow(
      <Icon onPress={onPress} name="wifi" disabled theme={theme} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply custom disabled styles', () => {
    const onPress = jest.fn();
    const component = shallow(
      <Icon
        onPress={onPress}
        name="wifi"
        disabled
        disabledStyle={{ backgroundColor: 'pink' }}
        theme={theme}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style', () => {
    const component = shallow(
      <Icon
        name="wifi"
        containerStyle={{ backgroundColor: 'blue' }}
        theme={theme}
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply reverse styles', () => {
    const component = shallow(<Icon name="wifi" reverse theme={theme} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set underlayColor to color when styles when underlayColor absent', () => {
    const component = shallow(
      <Icon name="wifi" underlayColor={null} theme={theme} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply raised styles', () => {
    const component = shallow(<Icon name="wifi" raised theme={theme} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('works on android with onPress', () => {
    Platform.OS = 'android';
    Platform.Version = 25;

    const component = shallow(
      <Icon name="wifi" onPress={jest.fn()} theme={theme} />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const localTheme = {
      Icon: {
        size: 26,
      },
      ...theme,
    };

    const component = create(
      <ThemeProvider theme={localTheme}>
        <ThemedIcon />
      </ThemeProvider>
    );

    expect(component.root.findByProps({ testID: 'iconIcon' }).props.size).toBe(
      26
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
