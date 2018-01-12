import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonGroup from '../ButtonGroup';

const buttons = ['Button 1', 'Button 2', 'Button 3'];
const buttonsElement = [{ element: 'Text' }, { element: 'View' }];

describe('ButtonGroup Component', () => {
  it('should render without issues', () => {
    const component = shallow(<ButtonGroup buttons={buttons} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(
      <ButtonGroup
        buttons={buttons}
        onPress={onPress}
        containerStyle={{ backgroundColor: 'yellow' }}
        buttonStyle={{ backgroundColor: 'blue' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render selectedIndex', () => {
    const component = shallow(
      <ButtonGroup
        buttons={buttons}
        selectedIndex={1}
        selectedButtonStyle={{ backgroundColor: 'red' }}
        selectedTextStyle={{ fontSize: 12 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with button.element', () => {
    const component = shallow(
      <ButtonGroup
        buttons={buttonsElement}
        innerBorderStyle={{ width: 300, color: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render lastButtonStyle', () => {
    const component = shallow(
      <ButtonGroup
        buttons={buttons}
        lastBorderStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
