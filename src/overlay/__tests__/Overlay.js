import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Overlay from '../Overlay';

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

    expect(component.getNode()).toBeFalsy();
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
});
