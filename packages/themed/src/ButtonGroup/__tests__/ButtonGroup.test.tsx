import React from 'react';
import ButtonGroup from '../index';
import { fireEvent, renderWithWrapper } from '../../../.ci/testHelper';
import { Text, View } from 'react-native';
import { FullTheme } from '../../config';

const buttons = ['Button 1', 'Button 2', 'Button 3'];

describe('ButtonGroup Component', () => {
  it.skip('', () => {
    const component = renderWithWrapper(
      <ButtonGroup
        buttons={buttons}
        containerStyle={{ backgroundColor: 'yellow' }}
        buttonStyle={{ backgroundColor: 'blue' }}
        textStyle={{ color: 'pink' }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const onPress = jest.fn();
    const { queryAllByTestId } = renderWithWrapper(
      <ButtonGroup buttons={buttons} onPress={onPress} />
    );
    const buttonComponents = queryAllByTestId('RNE__ButtonGroupItem');
    fireEvent.press(buttonComponents[1]);
    expect(onPress).toBeCalledWith(1);
  });

  it.skip('', () => {
    const { queryAllByTestId } = renderWithWrapper(
      <ButtonGroup
        buttons={buttons}
        selectedIndex={1}
        selectedButtonStyle={{ backgroundColor: 'red' }}
        selectedTextStyle={{ fontSize: 12 }}
      />
    );
    const buttonComponent = queryAllByTestId('RNE__ButtonGroupItem')[1];
    expect(buttonComponent.findByType(View).props.style).toMatchObject({
      backgroundColor: 'red',
    });
    expect(buttonComponent.findByType(Text).props.style).toMatchObject({
      fontSize: 12,
    });
  });

  it.skip('', () => {
    const { queryByText } = renderWithWrapper(
      <ButtonGroup
        buttons={['React Native', 'Flutter']}
        innerBorderStyle={{ width: 300, color: 'red' }}
      />
    );
    expect(queryByText('React Native')).toBeTruthy();
    expect(queryByText('Flutter')).toBeTruthy();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <ButtonGroup buttons={buttons} innerBorderStyle={{ width: 0 }} />,
      'RNE__ButtonGroupContainer'
    );
    expect(wrapper.findAllByType(View)[0].props.style).toMatchObject({
      borderRightWidth: 0,
    });
  });

  describe('Select Multiple', () => {
    it.skip('', () => {
      const onPress = jest.fn();
      const { queryAllByTestId } = renderWithWrapper(
        <ButtonGroup
          buttons={buttons}
          innerBorderStyle={{ width: 0 }}
          selectMultiple
          selectedIndexes={[0]}
          onPress={onPress}
        />
      );
      const buttonComponents = queryAllByTestId('RNE__ButtonGroupItem');
      fireEvent.press(buttonComponents[2]);
      expect(onPress).toHaveBeenCalledWith([0, 2]);
    });

    it.skip('', () => {
      const onPress = jest.fn();
      const { queryAllByTestId } = renderWithWrapper(
        <ButtonGroup
          buttons={buttons}
          innerBorderStyle={{ width: 0 }}
          selectMultiple
          selectedIndexes={[0, 2]}
          onPress={onPress}
        />
      );
      const buttonComponents = queryAllByTestId('RNE__ButtonGroupItem');
      fireEvent.press(buttonComponents[2]);
      expect(onPress).toHaveBeenCalledWith([0]);
    });
  });

  describe('Disabled', () => {
    it.skip('', () => {
      const { queryAllByTestId } = renderWithWrapper(
        <ButtonGroup buttons={buttons} disabled />
      );
      const wrappers = queryAllByTestId('RNE__ButtonGroupItem');
      buttons.forEach((_, index) => {
        expect(wrappers[index].props.accessibilityState.disabled).toBeTruthy();
      });
    });

    it.skip('', () => {
      const { queryAllByTestId } = renderWithWrapper(
        <ButtonGroup buttons={buttons} disabled={[1]} />
      );
      const wrappers = queryAllByTestId('RNE__ButtonGroupItem');
      expect(wrappers[0].props.accessibilityState.disabled).toBeFalsy();
      expect(wrappers[1].props.accessibilityState.disabled).toBeTruthy();
      expect(wrappers[2].props.accessibilityState.disabled).toBeFalsy();
    });

    it.skip('', () => {
      const { queryAllByTestId } = renderWithWrapper(
        <ButtonGroup
          buttons={buttons}
          disabled
          selectedIndex={1}
          disabledStyle={{ backgroundColor: 'red' }}
          disabledTextStyle={{ color: 'pink' }}
          disabledSelectedStyle={{ backgroundColor: 'blue' }}
          disabledSelectedTextStyle={{ color: 'green' }}
        />
      );
      const wrappers = queryAllByTestId('RNE__ButtonGroupItem');
      expect(wrappers[0].findByType(View).props.style).toMatchObject({
        backgroundColor: 'red',
      });
      expect(wrappers[0].findByType(Text).props.style).toMatchObject({
        color: 'pink',
      });
      expect(wrappers[1].findByType(View).props.style).toMatchObject({
        backgroundColor: 'blue',
      });
      expect(wrappers[1].findByType(Text).props.style).toMatchObject({
        color: 'green',
      });
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <ButtonGroup
        buttons={buttons}
        containerStyle={{ backgroundColor: 'yellow' }}
        buttonStyle={{ backgroundColor: 'blue' }}
        textStyle={{ color: 'pink' }}
        vertical
        innerBorderStyle={{}}
      />,
      'RNE__ButtonGroupContainer'
    );
    expect(wrapper.props.style).toMatchObject({
      flexDirection: 'column',
      height: null,
    });
  });

  it('should apply props from theme', () => {
    const testTheme: Partial<FullTheme> = {
      ButtonGroup: {
        selectedTextStyle: {
          color: 'red',
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <ButtonGroup buttons={buttons} selectedIndex={0} />,
      '',
      testTheme
    );
    expect(wrapper.findAllByType(Text)[0].props.style).toMatchObject({
      color: 'red',
    });
  });
});
