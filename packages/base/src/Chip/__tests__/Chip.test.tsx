import React from 'react';
import { Chip } from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { fireEvent } from '@testing-library/react-native';

describe('Chip Component', () => {
  it('should match snapshot', () => {
    const { getByRole } = renderWithWrapper(<Chip />);
    const component = getByRole('button');
    expect(component.props.style.borderRadius).toBe(30);
  });

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

  it('should have onPress function when specified', () => {
    const handlePress = jest.fn();
    const { getByRole } = renderWithWrapper(<Chip onPress={handlePress} />);
    fireEvent(getByRole('button'), 'press');
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
