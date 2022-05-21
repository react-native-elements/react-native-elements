import React from 'react';
import Tab from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent } from '@testing-library/react-native';

describe('Tab Component', () => {
  it('should render', () => {
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
