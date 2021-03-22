import React, { useState } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Toast from '../Toast';
import { act, create } from 'react-test-renderer';
import { Animated } from 'react-native';

describe('Toast container component', () => {
  jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

  let component;

  beforeEach(() => {
    component = null;
  });

  it('should render toast container properly and match snapshot', () => {
    const WrapperComponentWithState = () => {
      const [messages, setMessages] = useState([
        {
          id: 0,
          text: 'Im info text',
          type: 'info',
        },
        {
          id: 1,
          text: 'Im error text',
          type: 'error',
        },
        {
          id: 2,
          text: 'Im warning text',
          type: 'warning',
        },
        {
          id: 3,
          text: 'Im success text',
          type: 'success',
        },
      ]);

      return <Toast messages={messages} setMessage={setMessages} />;
    };

    component = shallow(<WrapperComponentWithState />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render toast container with no messages', () => {
    const WrapperComponentWithState = () => {
      const [messages, setMessages] = useState([]);

      return <Toast messages={messages} setMessage={setMessages} />;
    };

    component = create(<WrapperComponentWithState />);

    expect(component.root.children.length).toBe(1);

    const toastComponent = component.root.children[0];

    expect(toastComponent.findAllByType(Animated.View).length).toBe(0);
  });

  it('should render toast container with handling messages', async () => {
    const WrapperComponentWithState = () => {
      const [messages, setMessages] = useState([
        {
          id: 0,
          text: 'Message 1',
          type: 'info',
        },
        {
          id: 1,
          text: 'Message 2',
          type: 'success',
        },
      ]);

      return <Toast messages={messages} setMessage={setMessages} />;
    };

    act(() => {
      component = create(<WrapperComponentWithState />);
    });

    expect(component.root.findAllByType(Animated.View).length).toBe(2);

    act(() => {
      jest.runAllTimers();
    });

    expect(component.root.findAllByType(Animated.View).length).toBe(0);
  });

  it('should throw error with wrong props', async () => {
    expect(() => shallow(<Toast />)).toThrowError();
    expect(() => shallow(<Toast messages={[1, 2, 3]} />)).toThrowError();
    expect(() => shallow(<Toast setMessage={() => null} />)).toThrowError();
  });
});
