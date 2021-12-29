import React from 'react';
import Tab from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import theme from '../../config/theme';
import { fireEvent } from '@testing-library/react-native';

describe('Tab Component', () => {
  const items = ['Tab 1', 'Tab 2', 'Tab 3'];

  it('should match snapshot', () => {
    const { queryByA11yRole } = renderWithWrapper(
      <Tab>
        <Tab.Item title="Tab 1" />
        <Tab.Item title="Tab 2" />
        <Tab.Item title="Tab 3" />
      </Tab>
    );
    expect(queryByA11yRole('tablist')).toBeDefined();
  });

  it('should render primary variant ', () => {
    const { queryByA11yRole } = renderWithWrapper(
      <Tab variant="primary">
        {items.map((i) => (
          <Tab.Item key={i} />
        ))}
      </Tab>
    );
    const TabItemComponent = queryByA11yRole('tablist');

    expect(TabItemComponent.props.style).toContainEqual({
      backgroundColor: theme?.colors?.primary,
    });
  });

  it('should contain the required accessibility properties', () => {
    const component = renderWithWrapper(
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

  it('should render with icon props', () => {
    const changeTab = jest.fn();
    const { queryAllByRole } = renderWithWrapper(
      <Tab onChange={changeTab}>
        <Tab.Item
          title={'Hello'}
          iconPosition="bottom"
          icon={{ name: 'book' }}
        />
      </Tab>
    );

    const tabs = queryAllByRole('tab');
    fireEvent(tabs[0], 'press');
    expect(tabs.length).toBe(1);
  });
});
