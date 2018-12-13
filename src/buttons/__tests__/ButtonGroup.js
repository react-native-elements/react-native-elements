import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedButtonGroup, { ButtonGroup } from '../ButtonGroup';
import Text from '../../text/Text';

const buttons = ['Button 1', 'Button 2', 'Button 3'];

describe('ButtonGroup Component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <ButtonGroup
        theme={theme}
        buttons={buttons}
        containerStyle={{ backgroundColor: 'yellow' }}
        buttonStyle={{ backgroundColor: 'blue' }}
        textStyle={{ color: 'pink' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have default onPress event', () => {
    const wrapper = shallow(<ButtonGroup theme={theme} buttons={buttons} />);

    wrapper
      .find({ testID: 'buttonGroupItem' })
      .at(2)
      .simulate('press');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render selectedIndex', () => {
    const component = shallow(
      <ButtonGroup
        theme={theme}
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
        theme={theme}
        buttons={[{ element: 'Text' }, { element: 'View' }]}
        innerBorderStyle={{ width: 300, color: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render lastButtonStyle', () => {
    const component = shallow(
      <ButtonGroup
        theme={theme}
        buttons={buttons}
        lastBorderStyle={{ backgroundColor: 'red' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without inner borders', () => {
    const component = shallow(
      <ButtonGroup
        theme={theme}
        buttons={buttons}
        innerBorderStyle={{ width: 0 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should select an item', () => {
    const onPress = jest.fn();

    const wrapper = shallow(
      <ButtonGroup
        theme={theme}
        buttons={buttons}
        innerBorderStyle={{ width: 0 }}
        onPress={onPress}
      />
    );

    wrapper
      .find({ testID: 'buttonGroupItem' })
      .at(2)
      .simulate('press');
    expect(onPress).toHaveBeenCalledWith(2);
  });

  describe('Disabled', () => {
    it('should disable all items', () => {
      const wrapper = shallow(
        <ButtonGroup theme={theme} buttons={buttons} disabled />
      );

      const wrappers = wrapper.find({ testID: 'buttonGroupItem' });

      buttons.forEach((_, index) => {
        expect(wrappers.at(index).props().disabled).toBeTruthy();
      });

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should disable only some items', () => {
      const wrapper = shallow(
        <ButtonGroup theme={theme} buttons={buttons} disabled={[1]} />
      );

      const wrappers = wrapper.find({ testID: 'buttonGroupItem' });

      expect(wrappers.at(0).props().disabled).toBeFalsy();
      expect(wrappers.at(1).props().disabled).toBeTruthy();
      expect(wrappers.at(2).props().disabled).toBeFalsy();
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should apply disabled styles', () => {
      const wrapper = shallow(
        <ButtonGroup
          theme={theme}
          buttons={buttons}
          disabled
          selectedIndex={1}
          disabledStyle={{ backgroundColor: 'red' }}
          disabledTextStyle={{ color: 'pink' }}
          disabledSelectedStyle={{ backgroundColor: 'blue' }}
          disabledSelectedTextStyle={{ color: 'green' }}
        />
      );

      const wrappers = wrapper.find({ testID: 'buttonGroupItem' });

      expect(
        wrappers
          .at(0)
          .find(View)
          .props().style.backgroundColor
      ).toBe('red');

      expect(
        wrappers
          .at(0)
          .find(Text)
          .props().style.color
      ).toBe('pink');

      expect(
        wrappers
          .at(1)
          .find(View)
          .props().style.backgroundColor
      ).toBe('blue');

      expect(
        wrappers
          .at(1)
          .find(Text)
          .props().style.color
      ).toBe('green');
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Select Multiple', () => {
    it('should select an additional item', () => {
      const onPress = jest.fn();

      const wrapper = shallow(
        <ButtonGroup
          theme={theme}
          buttons={buttons}
          innerBorderStyle={{ width: 0 }}
          selectMultiple
          selectedIndexes={[0]}
          onPress={onPress}
        />
      );

      wrapper
        .find({ testID: 'buttonGroupItem' })
        .at(2)
        .simulate('press');
      expect(onPress).toHaveBeenCalledWith([0, 2]);
    });

    it('should deselect a selected item', () => {
      const onPress = jest.fn();

      const wrapper = shallow(
        <ButtonGroup
          theme={theme}
          buttons={buttons}
          innerBorderStyle={{ width: 0 }}
          selectMultiple
          selectedIndexes={[0, 2]}
          onPress={onPress}
        />
      );

      wrapper
        .find({ testID: 'buttonGroupItem' })
        .at(2)
        .simulate('press');
      expect(onPress).toHaveBeenCalledWith([0]);
    });
  });

  it('should apply values from theme', () => {
    const testTheme = {
      ButtonGroup: {
        selectedTextStyle: {
          color: 'red',
        },
      },
    };

    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedButtonGroup buttons={buttons} selectedIndex={0} />
      </ThemeProvider>
    );

    expect(
      component.root.findAllByProps({ testID: 'buttonGroupItemText' })[0].props
        .style
    ).toMatchObject({
      color: 'red',
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
