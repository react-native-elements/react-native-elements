import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedOverlay, { Overlay } from '../Overlay';

describe('Overlay', () => {
  it('should render without issues', () => {
    const component = shallow(
      <Overlay isVisible>
        <Text>I'm in an Overlay</Text>
      </Overlay>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be able to render fullscreen', () => {
    const component = shallow(
      <Overlay isVisible fullScreen>
        <Text>I'm in an Overlay</Text>
      </Overlay>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should click the backdrop and use default onPress handler', () => {
    const wrapper = shallow(
      <Overlay isVisible>
        <Text>I'm in an Overlay</Text>
      </Overlay>
    );

    wrapper
      .dive()
      .find({ testID: 'RNE__Overlay__backdrop' })
      .simulate('press');
  });

  it('should click the backdrop and use passed handler', () => {
    const onBackdropPress = jest.fn();

    const wrapper = shallow(
      <Overlay isVisible onBackdropPress={onBackdropPress}>
        <Text>I'm in an Overlay</Text>
      </Overlay>
    );

    wrapper
      .dive()
      .find({ testID: 'RNE__Overlay__backdrop' })
      .simulate('press');

    expect(onBackdropPress).toHaveBeenCalled();
  });

  it('should apply values from theme', () => {
    const theme = {
      Overlay: {
        backdropStyle: {
          backgroundColor: 'green',
        },
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedOverlay isVisible>
          <Text>I'm in an Overlay</Text>
        </ThemedOverlay>
      </ThemeProvider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
