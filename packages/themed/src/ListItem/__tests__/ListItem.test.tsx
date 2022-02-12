import React from 'react';
import ListItem from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('ListItem component', () => {
  it.skip('should apply values from theme', () => {
    const theme: Partial<FullTheme> = {
      ListItemTitle: {
        style: {
          color: 'red',
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <ListItem>
        <ListItem.Title />
      </ListItem>,
      'listItemTitle',
      theme
    );

    expect(wrapper.props.style.color).toBe('red');
  });
});
