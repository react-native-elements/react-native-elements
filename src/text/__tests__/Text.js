import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import TextThemed, { TextElement as Text } from '../Text';

describe('Text Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Text />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have font size of 50 when h1', () => {
    const component = shallow(<Text h1 />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBe(50);
  });

  it('should have font size of 42.5 when h2', () => {
    const component = shallow(<Text h2 />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBe(42.5);
  });

  it('should have font size of 35 when h3', () => {
    const component = shallow(<Text h3 />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBe(35);
  });

  it('should have font size of 27.5 when h4', () => {
    const component = shallow(<Text h4 />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBe(27.5);
  });

  it('should have text as children', () => {
    const component = shallow(<Text>Children Text</Text>);

    expect(component.props().children).toBe('Children Text');
  });

  it('should apply style prop as an array', () => {
    const component = shallow(
      <Text style={[{ color: 'red' }, { fontSize: 30 }]}>Children Text</Text>
    );
    expect(component.props().style).toEqual({
      color: 'red',
      fontSize: 30,
    });
  });

  it('should use values from the theme', () => {
    const theme = {
      Text: {
        h4: true,
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TextThemed>Hey</TextThemed>
      </ThemeProvider>
    );

    expect(component.root.findByType(TextThemed).children[0].props.h4).toBe(
      true
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('local props should override style props on theme', () => {
    const theme = {
      Text: {
        style: {
          fontSize: 14,
        },
      },
    };

    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <TextThemed h2>Hey</TextThemed>
      </ThemeProvider>
    );

    expect(
      component.root.findByType(TextThemed).children[0].children[0].props.style
        .fontSize
    ).toBe(42.5);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
