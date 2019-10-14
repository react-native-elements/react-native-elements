import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedIcon, { Icon } from '../Icon';

describe('Icon component', () => {
  it('should render without issues', () => {
    const component = shallow(<Icon name="wifi" />);

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
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<Icon onPress={onPress} name="wifi" />);
    const touchable = component.childAt(0);
    touchable.simulate('press');
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should apply default disabled styles', () => {
    const onPress = jest.fn();
    const component = shallow(<Icon onPress={onPress} name="wifi" disabled />);
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
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply container style', () => {
    const component = shallow(
      <Icon name="wifi" containerStyle={{ backgroundColor: 'blue' }} />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply reverse styles', () => {
    const component = shallow(<Icon name="wifi" reverse />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should set underlayColor to color when styles when underlayColor absent', () => {
    const component = shallow(<Icon name="wifi" underlayColor={null} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply raised styles', () => {
    const component = shallow(<Icon name="wifi" raised />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('works on android with onPress', () => {
    jest.mock('Platform', () => ({
      OS: 'android',
      Version: 25,
      select(obj) {
        return obj.android;
      },
    }));

    const component = shallow(<Icon name="wifi" onPress={jest.fn()} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme = {
      Icon: {
        size: 26,
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedIcon />
      </ThemeProvider>
    );

    expect(component.root.findByProps({ testID: 'iconIcon' }).props.size).toBe(
      26
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
