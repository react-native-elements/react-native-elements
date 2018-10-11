import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import theme from '../../config/theme';

import SearchBar from '../SearchBar-ios';

describe('iOS SearchBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with loading', () => {
    const component = shallow(
      <SearchBar
        theme={theme}
        showLoading
        loadingProps={{
          style: { flex: 1 },
        }}
        containerStyle={{ height: 70 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom search icon component', () => {
    const component = shallow(
      <SearchBar theme={theme} searchIcon={<View />} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom search icon', () => {
    const component = shallow(
      <SearchBar theme={theme} searchIcon={{ size: 50 }} />
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

  it('should render with a custom Cancel button title', () => {
    const component = shallow(
      <SearchBar theme={theme} cancelButtonTitle="Annuler" />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onFocus when input is focused', () => {
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
    component.find({ testID: 'searchInput' }).simulate('focus');
    component.find({ testID: 'searchInput' }).simulate('blur');
    expect(onBlurMock).toBeCalled();
  });

  it('should call onChangeText when input is changed', () => {
    const onChangeMock = jest.fn();
    const component = shallow(
      <SearchBar theme={theme} onChangeText={onChangeMock} />
    );
    component.find({ testID: 'searchInput' }).simulate('changeText', 'test');
    expect(onChangeMock).toBeCalled();
  });

  it('should render with a custom methods', () => {
    const onChangeTextMock = jest.fn();
    const onClearMock = jest.fn();
    const onCancelMock = jest.fn();
    const component = shallow(
      <SearchBar
        theme={theme}
        onChangeText={onChangeTextMock}
        onClear={onClearMock}
        onCancel={onCancelMock}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
