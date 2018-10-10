import React from 'react';
import { TextInput } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../config';

import ThemedSearchBar, { SearchBar } from '../SearchBar';

describe('SearchBar wrapper component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render a default SearchBar if wrong platform', () => {
    const component = shallow(<SearchBar platform="wrong-platform" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render an iOS SearchBar', () => {
    const component = shallow(<SearchBar platform="ios" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render an Android SearchBar', () => {
    const component = shallow(<SearchBar platform="android" />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme = {
      SearchBar: {
        placeholder: 'Enter search term',
      },
    };

    const component = create(
      <ThemeProvider theme={theme}>
        <ThemedSearchBar platform="android" />
      </ThemeProvider>
    );

    expect(component.root.findByType(TextInput).props.placeholder).toBe(
      'Enter search term'
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
