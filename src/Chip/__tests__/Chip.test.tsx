import React from 'react';
import { Chip } from '../index';
import { renderWithTheme } from '../../../.ci/testHelper';

describe('Chip Component', () => {
  it('should render without issues', () => {
    const { getByA11yRole } = renderWithTheme(<Chip />);
    const component = getByA11yRole('button');
    expect(component.props.style.borderRadius).toBe(30);
  });

  it.each`
    type
    ${'solid'}
    ${'outline'}
  `('should render $type', ({ type }) => {
    const { toJSON, queryByText } = renderWithTheme(
      <Chip title={type} type={type} />
    );
    expect(queryByText(type)).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });
});
