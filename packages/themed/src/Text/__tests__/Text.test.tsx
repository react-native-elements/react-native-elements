import React from 'react';
import Text from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Text Component', () => {
  it('should render', () => {
    const { getByRole } = renderWithWrapper(<Text />);
    const { props } = getByRole('text');
    expect(props).not.toBeNull();
  });

  it('should use values from the theme', () => {
    const theme: Partial<FullTheme> = {
      Text: {
        h4: true,
        style: {
          opacity: 0.5,
        },
      },
    };
    const { getByTestId } = renderWithWrapper(
      <Text testID="test-id">Hey</Text>,
      '',
      theme
    );
    const { props } = getByTestId('test-id');
    expect(props.style.opacity).toBe(0.5);
  });

  it('local props should override style props on theme', () => {
    const theme: Partial<FullTheme> = {
      Text: {
        style: {
          fontSize: 14,
        },
      },
    };
    const { getByRole } = renderWithWrapper(<Text h2>Hey</Text>, '', theme);
    const { props } = getByRole('text');

    expect(props.style.fontSize).toBeCloseTo(43.7, 0);
  });
});
