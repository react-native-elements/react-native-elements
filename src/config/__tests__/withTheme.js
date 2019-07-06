import React from 'react';
import { Text } from 'react-native';
import { create } from 'react-test-renderer';

import withTheme from '../withTheme';

describe('withTheme', () => {
  it('passes theme props to function component', () => {
    const Component = withTheme(() => <Text />);
    const wrapper = create(<Component />);

    expect(Object.keys(wrapper.root.children[0].props)).toContain('theme');
  });

  it('passes theme props to class component', () => {
    class Component extends React.Component {
      render() {
        return <Text />;
      }
    }

    const WrappedComponent = withTheme(Component);
    const wrapper = create(<WrappedComponent />);

    expect(Object.keys(wrapper.root.children[0].children[0].props)).toContain(
      'theme'
    );
  });

  it('passes statics on to wrapped component', () => {
    class Component extends React.Component {
      static navigationOptions = {
        title: 'Hey',
      };

      render() {
        return <Text />;
      }
    }

    const WrappedComponent = withTheme(Component);
    expect(WrappedComponent.navigationOptions).toEqual({
      title: 'Hey',
    });
  });

  it('passes instance methods on to wrapped component', () => {
    class Component extends React.Component {
      hello = () => {};

      render() {
        return <Text />;
      }
    }

    const WrappedComponent = withTheme(Component);
    const wrapper = create(<WrappedComponent />);

    expect(typeof wrapper.root.children[0].children[0].instance.hello).toBe(
      'function'
    );
  });
});
