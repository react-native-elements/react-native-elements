import React from 'react';
import { TabView } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Tab Component', () => {
  it('should match snapshot', () => {
    const onValueChange = jest.fn();
    const { queryByTestId } = renderWithWrapper(
      <TabView onChange={onValueChange} value={0}>
        <TabView.Item />
        <TabView.Item />
        <TabView.Item />
      </TabView>
    );
    expect(queryByTestId('tabView-test')).toBeDefined();
  });
  it('should disableSwipe', () => {
    const onValueChange = jest.fn();
    const { queryByTestId } = renderWithWrapper(
      <TabView disableSwipe onChange={onValueChange} value={0}>
        <TabView.Item />
        <TabView.Item />
        <TabView.Item />
      </TabView>
    );
    expect(queryByTestId('tabView-test')).toBeDefined();
  });
  it('should disableTransition', () => {
    const onValueChange = jest.fn();
    const { queryByTestId } = renderWithWrapper(
      <TabView disableTransition onChange={onValueChange} value={0}>
        <TabView.Item />
        <TabView.Item />
        <TabView.Item />
      </TabView>
    );
    expect(queryByTestId('tabView-test')).toBeDefined();
  });
  it('should ignore conditionally unrendered children', () => {
    const { queryAllByTestId } = renderWithWrapper(
      <TabView>
        <TabView.Item testID="TabView.Item" />
        {false && <TabView.Item testID="TabView.Item" />}
        <TabView.Item testID="TabView.Item" />
      </TabView>
    );
    expect(queryAllByTestId('TabView.Item').length).toBe(2);
  });
});
