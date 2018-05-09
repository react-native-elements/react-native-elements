import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar-ios';

describe('iOS SearchBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with loading', () => {
    const component = shallow(
      <SearchBar
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
    const component = shallow(<SearchBar searchIcon={<View />} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom search icon', () => {
    const component = shallow(<SearchBar searchIcon={{ size: 50 }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without search icon', () => {
    const component = shallow(<SearchBar searchIcon={false} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom clear icon', () => {
    const component = shallow(<SearchBar clearIcon={{ color: 'black' }} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom clear icon component', () => {
    const component = shallow(<SearchBar clearIcon={<View />} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without clear icon', () => {
    const component = shallow(<SearchBar clearIcon={false} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom Cancel button title', () => {
    const component = shallow(<SearchBar cancelButtonTitle="Annuler" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should call onFocus when input is focused', () => {
    const onFocusMock = jest.fn();
    const component = shallow(<SearchBar onFocus={onFocusMock} />);
    component.find('Input').simulate('focus');
    expect(onFocusMock).toBeCalled();
  });

  it('should call onBlur when input is blured', () => {
    const onBlurMock = jest.fn();
    const component = shallow(<SearchBar onFocus={onBlurMock} />);
    component.find('Input').simulate('focus');
    component.find('Input').simulate('blur');
    expect(onBlurMock).toBeCalled();
  });

  it('should call onChangeText when input is changed', () => {
    const onChangeMock = jest.fn();
    const component = shallow(<SearchBar onChangeText={onChangeMock} />);
    component.find('Input').simulate('changeText', 'test');
    expect(onChangeMock).toBeCalled();
  });

  it('should render with a custom methods', () => {
    const onChangeTextMock = jest.fn();
    const onClearMock = jest.fn();
    const onCancelMock = jest.fn();
    const component = shallow(
      <SearchBar
        onChangeText={onChangeTextMock}
        onClear={onClearMock}
        onCancel={onCancelMock}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
