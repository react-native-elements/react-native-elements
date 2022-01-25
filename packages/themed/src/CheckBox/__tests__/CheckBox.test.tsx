import React from 'react';
import CheckBox from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Pressable, View, Text, Image } from 'react-native';
import { FullTheme } from '../../config';

describe('CheckBox Component', () => {
  it.skip('', () => {
    const component = renderWithWrapper(<CheckBox checked />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(<CheckBox checked />);
    expect(wrapper.findAllByType(Pressable).length).toBe(1);
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <CheckBox checked Component={View} />
    );
    expect(wrapper.findByType(View)).toBeTruthy();
  });

  it.skip('', () => {
    const component = renderWithWrapper(
      <CheckBox title="Custom Text" checked checkedTitle="Custom Text" />
    );
    expect(component.queryByText('Custom Text')).toBeTruthy();
  });

  it.skip('', () => {
    const { wrapper, queryByText } = renderWithWrapper(
      <CheckBox
        title="Custom Text"
        checked
        wrapperStyle={{ backgroundColor: 'red' }}
      />,
      'RNE__CheckBox__Wrapper'
    );
    expect(queryByText('Custom Text')).toBeTruthy();
    expect(wrapper.findByType(View).props.style).toMatchObject({
      backgroundColor: 'red',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <CheckBox
        title="Custom Text"
        checked
        textStyle={{ color: 'red' }}
        fontFamily="serif"
      />,
      'RNE__CheckBox__Title'
    );
    expect(wrapper.props.style).toMatchObject({
      color: 'red',
      fontFamily: 'serif',
    });
  });

  it.skip('', () => {
    const CustomText = 'Custom Component!';
    const { queryByText, queryByTestId } = renderWithWrapper(
      <CheckBox
        checked
        title={
          <View>
            <Text testID="custom-text">{CustomText}</Text>
          </View>
        }
      />
    );
    expect(queryByText(CustomText)).toBeTruthy();
    expect(queryByTestId('custom-text')).toBeTruthy();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <CheckBox checked iconType="font-awesome" checkedColor="red" />,
      'RNE__Checkbox__Icon'
    );
    expect(wrapper.props.style[2]).toMatchObject({
      fontFamily: 'FontAwesome',
      fontWeight: 'normal',
      fontStyle: 'normal',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <CheckBox
        checked
        checkedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/jcY95H/checked.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
      />
    );
    expect(wrapper.findByType(Image).props.source).toMatchObject({
      uri: 'https://image.ibb.co/jcY95H/checked.png',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <CheckBox
        checked={false}
        uncheckedIcon={
          <Image
            source={{ uri: 'https://image.ibb.co/fda0Cx/no_check.png' }}
            style={{ width: 30, height: 30 }}
          />
        }
      />
    );
    expect(wrapper.findByType(Image).props.source).toMatchObject({
      uri: 'https://image.ibb.co/fda0Cx/no_check.png',
    });
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <CheckBox checked title="Demo Text" titleProps={{ numberOfLines: 2 }} />,
      'RNE__CheckBox__Title'
    );
    expect(wrapper.props.children).toBe('Demo Text');
    expect(wrapper.props.numberOfLines).toBe(2);
  });

  it('should use values from theme', () => {
    const testTheme: Partial<FullTheme> = {
      CheckBox: {
        title: 'George is Cool',
      },
    };
    const { wrapper } = renderWithWrapper(
      <CheckBox checked />,
      'RNE__CheckBox__Title',
      testTheme
    );
    expect(wrapper.props.children).toBe('George is Cool');
  });
});
