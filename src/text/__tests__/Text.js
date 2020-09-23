import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import { ThemeProvider } from '../../config';
import TextThemed, { TextElement as Text } from '../Text';

const theme = {
  colors: {
    black: 'black',
  },
};

describe('Text Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Text theme={theme} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have font size of 51.4 when h1', () => {
    const component = shallow(<Text h1 theme={theme} />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBeCloseTo(51.4, 0);
  });

  it('should have font size of 43.7 when h2', () => {
    const component = shallow(<Text h2 theme={theme} />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBeCloseTo(43.7, 0);
  });

  it('should have font size of 36 when h3', () => {
    const component = shallow(<Text h3 theme={theme} />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBeCloseTo(36, 0);
  });

  it('should have font size of 28.3 when h4', () => {
    const component = shallow(<Text h4 theme={theme} />);

    const fontSizeStyle = component.props().style.fontSize;
    expect(fontSizeStyle).toBeCloseTo(28.3, 0);
  });

  it('should have text as children', () => {
    const component = shallow(<Text theme={theme}>Children Text</Text>);

    expect(component.props().children).toBe('Children Text');
  });

  it('should apply style prop as an array', () => {
    const component = shallow(
      <Text style={[{ color: 'red' }, { fontSize: 30 }]} theme={theme}>
        Children Text
      </Text>
    );
    expect(component.props().style).toEqual({
      color: 'red',
      fontSize: 30,
    });
  });

  it('should use values from the theme', () => {
    const localTheme = {
      Text: {
        h4: true,
      },
      ...theme,
    };

    const component = renderer.create(
      <ThemeProvider theme={localTheme}>
        <TextThemed>Hey</TextThemed>
      </ThemeProvider>
    );

    expect(component.root.findByType(TextThemed).children[0].props.h4).toBe(
      true
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('local props should override style props on theme', () => {
    const localTheme = {
      Text: {
        style: {
          fontSize: 14,
        },
      },
      ...theme,
    };

    const component = renderer.create(
      <ThemeProvider theme={localTheme}>
        <TextThemed h2>Hey</TextThemed>
      </ThemeProvider>
    );

    expect(
      component.root.findByType(TextThemed).children[0].children[0].props.style
        .fontSize
    ).toBeCloseTo(43.7, 0);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
