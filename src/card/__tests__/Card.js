import React from 'react';
import { TextInput, TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedCard, { Card } from '../Card';

describe('Card Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Card theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card title without image', () => {
    const component = shallow(
      <Card
        theme={theme}
        title="Card Title"
        containerStyle={{ backgroundColor: 'red' }}
        dividerStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card title with image', () => {
    const component = shallow(
      <Card
        theme={theme}
        title="HELLO WORLD"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        containerStyle={{ backgroundColor: 'red' }}
        titleStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have Card with featured title', () => {
    const component = shallow(
      <Card
        theme={theme}
        title="foo title"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        imageWrapperStyle={{ backgroundColor: 'red' }}
        imageStyle={{ backgroundColor: 'red' }}
        wrapperStyle={{ backgroundColor: 'red' }}
        featuredTitle="featured title"
        featuredSubtitle="featured sub title"
        featuredTitleStyle={{ backgroundColor: 'red' }}
        featuredSubtitleStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have custom component as title', () => {
    const component = shallow(<Card theme={theme} title={<TextInput />} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const testTheme = {
      Card: {
        title: 'Yea b',
      },
    };

    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedCard />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'cardTitle' }).props.children
    ).toBe('Yea b');
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should have a pressable image', () => {
    const onPress = jest.fn();
    const component = shallow(
      <Card
        theme={theme}
        title="HELLO WORLD"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        containerStyle={{ backgroundColor: 'red' }}
        titleStyle={{ backgroundColor: 'red' }}
        imageOnPress={onPress}
      />
    );

    const touchable = component.find(TouchableHighlight);
    touchable.simulate('press');

    expect(component.find(TouchableHighlight)).toBeTruthy();
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have an underlay when pressable image is pressed', () => {
    const onPress = jest.fn();
    const component = shallow(
      <Card
        theme={theme}
        title="HELLO WORLD"
        image={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        containerStyle={{ backgroundColor: 'red' }}
        titleStyle={{ backgroundColor: 'red' }}
        imageOnPress={onPress}
        imageOnPressProps={{ underlayColor: 'rgba(42, 42, 42, 0.42)' }}
      />
    );

    const touchable = component.find(TouchableHighlight);
    touchable.simulate('press');

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
