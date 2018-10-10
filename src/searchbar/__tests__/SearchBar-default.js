import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import toJson from 'enzyme-to-json';

import theme from '../../config/theme';

import SearchBar from '../SearchBar-default';

describe('Default SearchBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icons', () => {
    const component = shallow(
      <SearchBar
        theme={theme}
        clearIcon={{
          name: '3d-rotation',
          color: 'red',
        }}
        showLoading
        loadingProps={{
          style: { flex: 1 },
        }}
        lightTheme
        containerStyle={{ height: 70 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it.only('should call onFocus when input is focused', () => {
    const onFocusMock = jest.fn();
    const component = shallow(
      <SearchBar theme={theme} onFocus={onFocusMock} />
    );

    component.find({ testID: 'searchInput' }).simulate('focus');
    expect(onFocusMock).toBeCalled();
  });

  it('should call onBlur when input is blured', () => {
    const onBlurMock = jest.fn();
    const component = shallow(<SearchBar theme={theme} onFocus={onBlurMock} />);
    component.find('ThemedInput').simulate('focus');
    component.find('ThemedInput').simulate('blur');
    expect(onBlurMock).toBeCalled();
  });

  it('should call onChangeText when input is changed', () => {
    const onChangeMock = jest.fn();
    const component = shallow(
      <SearchBar theme={theme} onChangeText={onChangeMock} />
    );
    component.find('ThemedInput').simulate('changeText', 'test');
    expect(onChangeMock).toBeCalled();
  });

  it('should render with a custom search icon component', () => {
    const component = shallow(
      <SearchBar theme={theme} searchIcon={<View />} round />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom search icon', () => {
    const component = shallow(
      <SearchBar theme={theme} searchIcon={{ size: 50 }} lightTheme />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without search icon', () => {
    const component = shallow(<SearchBar theme={theme} searchIcon={false} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom clear icon', () => {
    const component = shallow(
      <SearchBar theme={theme} clearIcon={{ color: 'black' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom clear icon component', () => {
    const component = shallow(<SearchBar theme={theme} clearIcon={<View />} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without clear icon', () => {
    const component = shallow(<SearchBar theme={theme} clearIcon={false} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom methods', () => {
    const onChangeTextMock = jest.fn();
    const onClearMock = jest.fn();
    const component = shallow(
      <SearchBar
        theme={theme}
        onChangeText={onChangeTextMock}
        onClear={onClearMock}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
