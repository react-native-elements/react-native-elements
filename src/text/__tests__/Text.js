import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from '../Text';

describe('Text Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Text />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have font size of 50 when h1', () => {
    const component = shallow(<Text h1 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(50);
  });

  it('should have font size of 42.5 when h2', () => {
    const component = shallow(<Text h2 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(42.5);
  });

  it('should have font size of 35 when h3', () => {
    const component = shallow(<Text h3 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(35);
  });

  it('should have font size of 27.5 when h4', () => {
    const component = shallow(<Text h4 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(27.5);
  });

  it('should have text as children', () => {
    const component = shallow(<Text>Children Text</Text>);

    expect(component.props().children).toBe('Children Text');
  });

  it('should render fontFamily and style', () => {
    const component = shallow(
      <Text fontFamily="comic-sans" style={{ color: 'red' }}>
        Children Text
      </Text>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
