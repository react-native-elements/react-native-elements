import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '../Search';

describe('Search component', () => {
  it('should render without issues', () => {
    const component = shallow(<Search />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icons', () => {
    const component = shallow(
      <Search
        clearIcon={{
          name: '3d-rotation',
          color: 'red',
        }}
        showLoadingIcon
        loadingIcon={{
          style: { flex: 1 },
        }}
        lightTheme
        containerStyle={{ height: 70 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without icon', () => {
    const component = shallow(
      <Search underlineColorAndroid="red" noIcon round />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
