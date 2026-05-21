import React from 'react';
import TabView from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { describe, it, expect, jest } from '@jest/globals';

describe('Tab Component', () => {
  it('should render', () => {
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
});
