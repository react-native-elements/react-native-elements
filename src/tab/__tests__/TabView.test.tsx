import React from 'react';
import TabView from '../TabView';
import { renderWithTheme } from '../../../.ci/testHelper';

describe('Tab Component', () => {
  it('should render without issues', () => {
    const onValueChange = jest.fn();
    const { queryByTestId } = renderWithTheme(
      <TabView onChange={onValueChange} value={0}>
        <TabView.Item />
        <TabView.Item />
        <TabView.Item />
      </TabView>
    );
    expect(queryByTestId('tabView-test')).toBeDefined();
  });
});
