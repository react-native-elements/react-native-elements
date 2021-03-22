import React from 'react';
import { create, act } from 'react-test-renderer';
import { ToastProvider, useToast } from '../../';
import defaultConfig from '../config';
import { Button, StyleSheet } from 'react-native';
import { ToastPosition } from '../ToastProvider';
import Message from '../Message';
import { ToastTypes } from '../ToastProvider';

describe('Toast provider component', () => {
  jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

  let component;

  beforeEach(() => {
    component = null;
  });

  const deleteTypedFields = (obj) => {
    for (let key in ToastTypes) {
      delete obj[key];
    }
    return obj;
  };

  it('should render toast provider properly and match snapshot', () => {
    component = create(<ToastProvider />);
    expect(component.root).toBeTruthy();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should handle messages via toast provider', () => {
    const ButtonComponent = () => {
      const { showMessage } = useToast();

      return (
        <Button
          title={'Press me to show message'}
          onPress={() => showMessage("I'm random message")}
        />
      );
    };

    act(() => {
      component = create(
        <ToastProvider>
          <ButtonComponent />
        </ToastProvider>
      );
    });

    const button = component.root.findByType(Button);

    expect(
      component.root.findByProps({ testID: 'toast-container-test' }).props
        .children.length
    ).toBe(0);

    act(() => {
      button.props.onPress();
    });

    act(() => {
      expect(
        component.root.findByProps({ testID: 'toast-container-test' }).props
          .children.length
      ).toBe(1);
    });

    act(() => jest.runAllTimers());

    act(() => {
      expect(
        component.root.findByProps({ testID: 'toast-container-test' }).props
          .children.length
      ).toBe(0);
    });

    act(() => {
      button.props.onPress();
      button.props.onPress();
    });

    act(() => {
      expect(
        component.root.findByProps({ testID: 'toast-container-test' }).props
          .children.length
      ).toBe(2);
    });
  });

  it('should handle default props', () => {
    component = create(
      <ToastProvider>
        <Message
          message={{ id: 0, text: 'Default message', type: 'info' }}
          onHide={() => null}
        />
      </ToastProvider>
    );

    const toast = component.root.findByProps({
      testID: 'toast-container-test',
    });

    expect(toast.props.style).toEqual(
      StyleSheet.flatten([
        {
          top: defaultConfig.position === ToastPosition.top ? 0 : undefined,
          bottom:
            defaultConfig.position === ToastPosition.bottom ? 0 : undefined,
        },
        defaultConfig.containerToastStyle,
      ])
    );

    const message = component.root.findByProps({
      testID: 'messages-test',
    });

    expect(message.props.style).toMatchObject(
      deleteTypedFields(defaultConfig.containerMessageStyle)
    );

    const textMessage = component.root.findByProps({
      testID: 'messages-text-test',
    });

    expect(textMessage.props.style).toMatchObject({
      ...deleteTypedFields(defaultConfig.textMessageStyle),
      ...defaultConfig.textMessageProps,
    });
  });

  it('should handle external props', () => {
    const position = 'bottom';
    const containerToastStyle = {
      marginTop: 10,
      backgroundColor: 'black',
    };
    const containerMessageStyle = {
      padding: 10,
      borderRadius: 0,
    };
    const textMessageStyle = {
      color: 'red',
      fontSize: 10,
    };

    const textMessageProps = {
      numberOfLines: 2,
      onPress: () => 'hi buddy :)',
    };

    component = create(
      <ToastProvider
        position={position}
        containerToastStyle={containerToastStyle}
        containerMessageStyle={containerMessageStyle}
        textMessageStyle={textMessageStyle}
        textMessageProps={textMessageProps}
      >
        <Message
          message={{ id: 0, text: 'Default message', type: 'info' }}
          onHide={() => null}
        />
      </ToastProvider>
    );

    const toast = component.root.findByProps({
      testID: 'toast-container-test',
    });

    expect(toast.props.style).toEqual(
      StyleSheet.flatten([
        {
          top: position === ToastPosition.top ? 0 : undefined,
          bottom: position !== ToastPosition.top ? 0 : undefined,
        },
        defaultConfig.containerToastStyle,
        containerToastStyle,
      ])
    );

    const message = component.root.findByProps({
      testID: 'messages-test',
    });

    expect(message.props.style).toMatchObject({
      ...deleteTypedFields(defaultConfig.containerMessageStyle),
      ...deleteTypedFields(containerMessageStyle),
    });

    const textMessage = component.root.findByProps({
      testID: 'messages-text-test',
    });

    expect(textMessage.props).toMatchObject({
      style: {
        ...deleteTypedFields(defaultConfig.textMessageStyle),
        ...deleteTypedFields(textMessageStyle),
      },
      ...defaultConfig.textMessageProps,
      ...textMessageProps,
    });
  });
});
