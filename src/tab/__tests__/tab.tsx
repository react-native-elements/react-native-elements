import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Tab } from '../tab';
import theme from '../../config/theme';
import { render } from '@testing-library/react-native';

describe('Tab Component', () => {
  beforeEach(() => {
    let useEffect = jest.spyOn(React, 'useEffect');
    useEffect.mockImplementation((f) => f());
    const app = shallow(<Tab theme={theme} variant="default" />);
    expect(app.length).toBe(1);
  });
  it('should render without issues', () => {
    const onValueChange = jest.fn();
    const component = shallow(
      <Tab theme={theme} onChange={onValueChange} value={0} variant="primary">
        <Tab.Item theme={theme} title="Tab 1" />
        <Tab.Item theme={theme} title="Tab 2" />
        <Tab.Item theme={theme} title="Tab 3" />
      </Tab>
    );
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should contain the required accessibility properties', () => {
    const items = ['Tab 1', 'Tab 2', 'Tab 3'];
    const component = render(
      <Tab variant="default">
        {items.map((i) => (
          <Tab.Item key={i} title={i} />
        ))}
      </Tab>
    );
    const tabContainer = component.getByA11yRole('tablist');
    expect(tabContainer).toBeDefined();

    const tabs = component.getAllByA11yRole('tab');
    expect(tabs.length).toBe(items.length);
    tabs.forEach((tab) => {
      expect(tab.props.accessibilityState.selected).toBe(false);
      expect(items.includes(tab.props.accessibilityValue.text)).toBe(true);
    });
  });
});
