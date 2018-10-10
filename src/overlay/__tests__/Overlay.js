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

  it('should render nothing if not visible', () => {
    const component = shallow(
      <Overlay isVisible={false}>
        <Text>I'm in an Overlay</Text>
      </Overlay>
    );

    expect(component.getElement()).toBeFalsy();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should be able to render fullscreen', () => {
    const component = shallow(
      <Overlay isVisible={true} fullScreen>
        <Text>I'm in an Overlay</Text>
      </Overlay>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme = {
      Overlay: {
        windowBackgroundColor: 'green',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedOverlay isVisible={true}>
          <Text>I'm in an Overlay</Text>
        </ThemedOverlay>
      </ThemeProvider>
    );

    expect(
      component.root.children[0].children[0].children[0].children[0].props.style
        .backgroundColor
    ).toBe('green');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
