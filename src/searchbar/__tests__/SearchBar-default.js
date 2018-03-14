import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from '../SearchBar-default';

describe('Default SearchBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icons', () => {
    const component = shallow(
      <SearchBar
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
  it('should call onChangeText when close icon is touched', () => {
    const onChangeTextMock = jest.fn();
    const component = shallow(
      <SearchBar textInputRef="ti" clearIcon onChangeText={onChangeTextMock} />
    );
    component.find('Icon[name="close"]').simulate('press');
    expect(onChangeTextMock).toBeCalled();
  });

  it('should render without icon', () => {
    const component = shallow(
      <SearchBar underlineColorAndroid="red" noIcon round />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom icon', () => {
    const component = shallow(
      <SearchBar icon={{ type: 'font-awesome', name: 'glass' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with a custom methods', () => {
    const onChangeTextMock = jest.fn();
    const onClearMock = jest.fn();
    const component = shallow(
      <SearchBar onChangeText={onChangeTextMock} onClear={onClearMock} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
