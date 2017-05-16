import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../Button';
import colors from '../../config/colors';

describe('Button Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Button />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should show loading indicator', () => {
    const component = shallow(<Button loading />);

    expect(component.find('ActivityIndicator').length).toBe(1);
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<Button onPress={onPress} />);
    const innerComponent = component.find('TouchableHighlight');

    innerComponent.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });

  it('should render primary color', () => {
    const component = shallow(<Button primary />);

    expect(component.find('View').at(1).props().style[0].backgroundColor).toBe(
      colors.primary
    );
  });

  it('should render primary1 color', () => {
    const component = shallow(<Button primary1 />);
    const styles = component.find('View').at(1).props().style;
    let backgroundColorStyles = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('backgroundColor')) {
        backgroundColorStyles.push(styles[i].backgroundColor);
      }
    }

    expect(backgroundColorStyles[1]).toBe(colors.primary1);
  });

  it('should render primary2 color', () => {
    const component = shallow(<Button primary2 />);
    const styles = component.find('View').at(1).props().style;
    let backgroundColorStyles = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('backgroundColor')) {
        backgroundColorStyles.push(styles[i].backgroundColor);
      }
    }

    expect(backgroundColorStyles[1]).toBe(colors.primary2);
  });

  it('should render secondary color', () => {
    const component = shallow(<Button secondary />);
    const styles = component.find('View').at(1).props().style;
    let backgroundColorStyles = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('backgroundColor')) {
        backgroundColorStyles.push(styles[i].backgroundColor);
      }
    }

    expect(backgroundColorStyles[1]).toBe(colors.secondary);
  });

  it('should render secondary2 color', () => {
    const component = shallow(<Button secondary2 />);
    const styles = component.find('View').at(1).props().style;
    let backgroundColorStyles = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('backgroundColor')) {
        backgroundColorStyles.push(styles[i].backgroundColor);
      }
    }

    expect(backgroundColorStyles[1]).toBe(colors.secondary2);
  });

  it('should render secondary3 color', () => {
    const component = shallow(<Button secondary3 />);
    const styles = component.find('View').at(1).props().style;
    let backgroundColorStyles = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('backgroundColor')) {
        backgroundColorStyles.push(styles[i].backgroundColor);
      }
    }

    expect(backgroundColorStyles[1]).toBe(colors.secondary3);
  });

  it('should render custom background color', () => {
    const component = shallow(<Button backgroundColor="#777" />);
    const styles = component.find('View').at(1).props().style;
    let backgroundColorStyles = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('backgroundColor')) {
        backgroundColorStyles.push(styles[i].backgroundColor);
      }
    }

    expect(backgroundColorStyles[1]).toBe('#777');
  });

  it('should render title as text inside the button', () => {
    const component = shallow(<Button title="My Button" />);

    expect(
      component.find('View').at(1).props().children[2].props.children
    ).toBe('My Button');
  });

  it('should render with icon type', () => {
    const component = shallow(
      <Button icon={{ name: 'acrobat', type: 'zocial' }} />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with default icon', () => {
    const component = shallow(
      <Button
        icon={{
          name: 'wifi',
          size: 22,
          iconRight: true,
          style: { fontSize: 20 },
        }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with custom icon component', () => {
    const customIconComponent = () => {};

    const component = shallow(
      <Button
        icon={{
          name: 'wifi',
          size: 22,
          iconRight: true,
          style: { fontSize: 20 },
        }}
        iconComponent={customIconComponent}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
