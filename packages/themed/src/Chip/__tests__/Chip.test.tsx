import React from 'react';
import Chip from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Chip Component', () => {
  it.each`
    type
    ${'solid'}
    ${'outline'}
  `('should render $type', ({ type }) => {
    const { queryByText } = renderWithWrapper(
      <Chip title={type} type={type} />
    );
    expect(queryByText(type)).not.toBeNull();
  });
});
