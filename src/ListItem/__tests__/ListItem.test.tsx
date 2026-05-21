import React from 'react';
import ListItem from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions, FullTheme } from '../../config';
import { describe, it, expect } from '@jest/globals';

describe('ListItem component', () => {
  it('should apply values from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        ListItemTitle: {
          style: {
            color: 'red',
          },
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
