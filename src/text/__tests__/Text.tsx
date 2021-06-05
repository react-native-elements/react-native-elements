import React from 'react';
import Text from '../Text';
import { renderWithTheme } from '../../../.ci/helper';
import { FullTheme, colors } from '../../config';

describe('Text Component', () => {
  it('should render without issues', () => {
    const { getByRole } = renderWithTheme(<Text />);
    const { props } = getByRole('text');
    expect(props).not.toBeNull();
  });
  it('should have font size of 51.4 when h1', () => {
    const { getByRole } = renderWithTheme(<Text variant="h1" />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(51.4, 0);
  });

  it('should have font size of 43.7 when h2', () => {
    const { getByRole } = renderWithTheme(<Text variant="h2" />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(43.7, 0);
  });

  it('should have font size of 36 when h3', () => {
    const { getByRole } = renderWithTheme(<Text variant="h3" />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(36, 0);
  });

  it('should have font size of 28.3 when h4', () => {
    const { getByRole } = renderWithTheme(<Text variant="h4" />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(28.3, 0);
  });
  it('should render caption variant', () => {
    const { getByRole } = renderWithTheme(<Text variant="caption" />);
    const { props } = getByRole('text');
    expect(props.style.color).not.toBe(colors.black);
  });

  it('should have text as children', () => {
    const { getByRole } = renderWithTheme(<Text>Children Text</Text>);
    const { props } = getByRole('text');
    expect(props.children).toBe('Children Text');
  });

  it('should apply style prop as an array', () => {
    const { getByRole } = renderWithTheme(
      <Text style={[{ color: 'red' }, { fontSize: 30 }]}>Children Text</Text>
    );
    const { props } = getByRole('text');
    expect(props.style).toEqual({
      color: 'red',
      fontSize: 30,
    });
  });

  it('should use values from the theme', () => {
    const localTheme: Partial<FullTheme> = {
      Text: {
        variant: 'h4',
        style: {
          opacity: 0.5,
        },
      },
    };
    const { getByTestId } = renderWithTheme(
      <Text testID="test-id">Hey</Text>,
      localTheme
    );
    const { props } = getByTestId('test-id');
    expect(props.style.opacity).toBe(0.5);
  });

  it('local props should override style props on theme', () => {
    const localTheme: Partial<FullTheme> = {
      Text: {
        style: {
          fontSize: 14,
        },
      },
    };
    const { getByRole } = renderWithTheme(
      <Text variant="h2">Hey</Text>,
      localTheme
    );
    const { props } = getByRole('text');

    expect(props.style.fontSize).toBeCloseTo(43.7, 0);
  });
});
