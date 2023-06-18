import React from 'react';
import { Tab } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { lightColors } from '../../helpers';
import { fireEvent } from '@testing-library/react-native';

describe('Tab Component', () => {
  const items = ['Tab 1', 'Tab 2', 'Tab 3'];

  it('should match snapshot', () => {
    const { queryByRole } = renderWithWrapper(
      <Tab>
        <Tab.Item title="Tab 1" />
        <Tab.Item title="Tab 2" />
        <Tab.Item title="Tab 3" />
      </Tab>
    );
    expect(queryByRole('tablist')).toBeDefined();
  });

  it('should render primary variant ', () => {
    const { queryByRole } = renderWithWrapper(
      <Tab variant="primary">
        {items.map((i) => (
          <Tab.Item key={i} />
        ))}
      </Tab>
    );
    const TabItemComponent = queryByRole('tablist')!;

    expect(TabItemComponent.props.style).toContainEqual({
      backgroundColor: lightColors?.primary,
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
    const tabContainer = component.getByRole('tablist');
    expect(tabContainer).toBeDefined();

    const tabs = component.getAllByRole('tab');
    expect(tabs.length).toBe(items.length);
    tabs.forEach((tab, index) => {
      if (index === 0) return;
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
        <Tab.Item
          title={'World'}
          iconPosition="bottom"
          icon={{ name: 'book' }}
        />
      </Tab>
    );

    const tabs = queryAllByRole('tab');
    fireEvent(tabs[0], 'press');
    expect(tabs.length).toBe(2);
  });

  it('should render as scrollable', () => {
    const changeTab = jest.fn();
    const { queryAllByRole } = renderWithWrapper(
      <Tab scrollable onChange={changeTab}>
        <Tab.Item
          title={'Hello'}
          iconPosition="bottom"
          icon={{ name: 'book' }}
        />
        <Tab.Item
          title={'World'}
          iconPosition="bottom"
          icon={{ name: 'book' }}
        />
      </Tab>
    );

    const tabs = queryAllByRole('tab');
    fireEvent(tabs[1], 'press');
    expect(tabs.length).toBe(2);
  });

  it('should ignore conditionally unrendered children', () => {
    const { queryAllByRole } = renderWithWrapper(
      <Tab>
        <Tab.Item />
        {false && <Tab.Item />}
        <Tab.Item />
      </Tab>
    );
    expect(queryAllByRole('tab').length).toBe(2);
  });
});
