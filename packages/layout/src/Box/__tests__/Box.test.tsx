import React from 'react';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Box } from '..';

describe('Button Component', () => {
  it('should match snapshot', () => {
    const { toJSON } = renderWithWrapper(<Box m={2} />, 'RNE_BUTTON_WRAPPER');
    expect(toJSON()).toMatchSnapshot();
  });
});
