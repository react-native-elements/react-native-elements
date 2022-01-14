import React from 'react';
import { View, TextInput, Image, Animated } from 'react-native';
import Input from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent } from '@testing-library/react-native';
import Icon from '../../Icon';
import { FullTheme } from '../../config';

describe('Input component', () => {
  it('should match snapshot', () => {
    const { toJSON, queryByTestId } = renderWithWrapper(<Input />);
    const component = queryByTestId('RNE__Input__view-wrapper');
    expect(component).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  describe('Props', () => {
    it('containerStyle', () => {
      const { queryByTestId } = renderWithWrapper(
        <Input containerStyle={{ width: 200 }} />
      );
      const component = queryByTestId('RNE__Input__view-wrapper');
      expect(component.props.style).toMatchObject({ width: 200 });
    });

    it('inputContainerStyle', () => {
      const { queryByTestId } = renderWithWrapper(
        <Input inputContainerStyle={{ width: 200 }} />
      );
      const component = queryByTestId('RNE__Input__view-wrapper');
      const inputTree = component.findByType(Animated.View);
      expect(inputTree.props.style.width).toBe(200);
    });

    it('inputStyle', () => {
      const { queryByTestId } = renderWithWrapper(
        <Input inputStyle={{ width: 200 }} />
      );
      const component = queryByTestId('RNE__Input__view-wrapper');
      const inputTree = component.findByType(TextInput);
      expect(inputTree.props.style.width).toBe(200);
    });

    it('disabled', () => {
      const { queryByTestId } = renderWithWrapper(<Input disabled={true} />);
      const component = queryByTestId('RNE__Input__view-wrapper');
      const inputTree = component.findByType(TextInput);
      expect(inputTree.props.editable).toBe(false);
    });

    describe('leftIcon and styles', () => {
      it('leftIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <Input leftIcon={{ type: 'feather', name: 'user' }} />
        );
        const component = queryByTestId('RNE__Input__view-wrapper');
        const iconTree = component.findByType(Icon);
        expect(iconTree).not.toBeNull();
        expect(iconTree.props).toMatchObject({ type: 'feather', name: 'user' });
      });

      it('leftIconContainerStyle', () => {
        const { queryByTestId } = renderWithWrapper(
          <Input
            leftIcon={{ type: 'feather', name: 'user' }}
            leftIconContainerStyle={{ width: 200 }}
          />
        );
        const component = queryByTestId('RNE__Input__view-wrapper');
        const iconTree = component.findByType(Icon);
        expect(iconTree).not.toBeNull();
        expect(iconTree.props).toMatchObject({ type: 'feather', name: 'user' });
        expect(iconTree.parent.props.style.width).toBe(200);
      });
    });
    describe('rightIcon and styles', () => {
      it('rightIcon', () => {
        const { queryByTestId } = renderWithWrapper(
          <Input rightIcon={{ type: 'feather', name: 'user' }} />
        );
        const component = queryByTestId('RNE__Input__view-wrapper');
        const iconTree = component.findByType(Icon);
        expect(iconTree).not.toBeNull();
        expect(iconTree.props).toMatchObject({ type: 'feather', name: 'user' });
      });

      it('rightIconContainerStyle', () => {
        const { queryByTestId } = renderWithWrapper(
          <Input
            rightIcon={{ type: 'feather', name: 'user' }}
            rightIconContainerStyle={{ width: 200 }}
          />
        );
        const component = queryByTestId('RNE__Input__view-wrapper');
        const iconTree = component.findByType(Icon);
        expect(iconTree).not.toBeNull();
        expect(iconTree.props).toMatchObject({ type: 'feather', name: 'user' });
        expect(iconTree.parent.props.style.width).toBe(200);
      });
    });

    describe('label and styles', () => {
      it('label', () => {
        const { queryByText } = renderWithWrapper(<Input label="My Label" />);
        const textTree = queryByText('My Label');
        expect(textTree).not.toBeNull();
      });

      it('labelStyle', () => {
        const { queryByText } = renderWithWrapper(
          <Input label="My Label" labelStyle={{ width: 200 }} />
        );
        const textTree = queryByText('My Label');
        expect(textTree).not.toBeNull();
        expect(textTree.props.style.width).toBe(200);
      });

      it('label as component', () => {
        const { queryByTestId } = renderWithWrapper(
          <Input label={<Image source={{ uri: 'http://google.com' }} />} />
        );
        const component = queryByTestId('RNE__Input__view-wrapper');
        const childLabelTree = component.findByType(Image);
        expect(childLabelTree).not.toBeNull();
        expect(childLabelTree.props.source.uri).toBe('http://google.com');
      });
    });

    describe('errorMessage and style', () => {
      it('errorMessage', () => {
        const { queryByText } = renderWithWrapper(
          <Input errorMessage="My Error Message" />
        );
        const textTree = queryByText('My Error Message');
        expect(textTree).not.toBeNull();
      });

      it('errorStyle', () => {
        const { queryByText } = renderWithWrapper(
          <Input errorMessage="My Error Message" errorStyle={{ width: 200 }} />
        );
        const textTree = queryByText('My Error Message');
        expect(textTree).not.toBeNull();
        expect(textTree.props.style.width).toBe(200);
      });
    });

    it('placeholder', () => {
      const { queryByTestId } = renderWithWrapper(
        <Input placeholder="My Placeholder" />
      );
      const component = queryByTestId('RNE__Input__text-input');
      expect(component.props.placeholder).toBe('My Placeholder');
    });

    it('inputComponent class', () => {
      class CustomComponent extends React.Component {
        render() {
          return (
            <View {...this.props} testID="myView">
              Custom!
            </View>
          );
        }
      }
      const { queryByTestId } = renderWithWrapper(
        <Input InputComponent={CustomComponent} />
      );
      expect(queryByTestId('myView')).not.toBeNull();
    });

    it('inputComponent forwardRef', () => {
      const CustomComponent = React.forwardRef<View>((props, ref) => {
        return (
          <View ref={ref} {...props} testID="myView">
            Custom!
          </View>
        );
      });
      const { queryByTestId } = renderWithWrapper(
        <Input InputComponent={CustomComponent} />
      );
      expect(queryByTestId('myView')).not.toBeNull();
    });

    it('should trigger onChange', () => {
      const changeText = jest.fn();
      const { queryByTestId } = renderWithWrapper(
        <Input onChangeText={changeText} />
      );
      const component = queryByTestId('RNE__Input__view-wrapper');
      fireEvent.changeText(component, 'myText');
      expect(changeText).toHaveBeenCalledTimes(1);
    });

    describe('Instance methods', () => {
      it('should focus the input', () => {
        const focus = jest.fn();
        const ref = React.createRef<TextInput>();
        const { queryByTestId } = renderWithWrapper(
          <Input ref={ref} testID="demo" onFocus={focus} />
        );
        const component = queryByTestId('RNE__Input__view-wrapper');
        fireEvent(component.findByType(TextInput), 'focus');
        expect(focus).toHaveBeenCalledTimes(1);
      });
    });

    it('should apply values from theme', () => {
      const testTheme: Partial<FullTheme> = {
        Input: {
          placeholder: 'Enter text',
        },
      };
      const { queryByTestId } = renderWithWrapper(<Input />, '', testTheme);
      const component = queryByTestId('RNE__Input__text-input');
      expect(component.props.placeholder).toBe(testTheme.Input.placeholder);
    });
  });
});
