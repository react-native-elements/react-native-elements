import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import withTheme from '../withTheme';

describe('withTheme', () => {
  it('passes theme props to function component', () => {
    const Component = withTheme(() => <Text testID="myText" />);
    const { queryByTestId } = render(<Component />);
    const wrapper = queryByTestId('myText')!.parent!.parent!;
    expect(Object.keys(wrapper.props)).toContain('theme');
  });

  it('passes theme props to class component', () => {
    class Component extends React.Component {
      render() {
        return <Text testID="myText" />;
      }
    }
    const WrappedComponent = withTheme(Component);
    const { queryByTestId } = render(<WrappedComponent />);
    const wrapper = queryByTestId('myText')!.parent!.parent!;
    expect(Object.keys(wrapper.props)).toContain('theme');
  });

  it('should have static methods', () => {
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

  it('should render class components', () => {
    class Component extends React.Component {
      hello = () => {
        return 'Hey';
      };
      render() {
        return <Text testID="myText" />;
      }
    }
    const WrappedComponent = withTheme(Component);
    const { queryByTestId } = render(<WrappedComponent />);
    const instanceMethods = queryByTestId('myText')!.parent!.parent!.instance;
    expect(instanceMethods.hello()).toBe('Hey');
  });
});
