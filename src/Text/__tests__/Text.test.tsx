import React from 'react';
import Text from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Text Component', () => {
  it('should match snapshot', () => {
    const { getByRole } = renderWithWrapper(<Text />);
    const { props } = getByRole('text');
    expect(props).not.toBeNull();
  });
  it('should have font size of 51.4 when h1', () => {
    const { getByRole } = renderWithWrapper(<Text h1 />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(51.4, 0);
  });

  it('should have font size of 43.7 when h2', () => {
    const { getByRole } = renderWithWrapper(<Text h2 />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(43.7, 0);
  });

  it('should have font size of 36 when h3', () => {
    const { getByRole } = renderWithWrapper(<Text h3 />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(36, 0);
  });

  it('should have font size of 28.3 when h4', () => {
    const { getByRole } = renderWithWrapper(<Text h4 />);
    const { props } = getByRole('text');
    expect(props.style.fontSize).toBeCloseTo(28.3, 0);
  });

  it('should have text as children', () => {
    const { getByRole } = renderWithWrapper(<Text>Children Text</Text>);
    const { props } = getByRole('text');
    expect(props.children).toBe('Children Text');
  });

  it('should apply style prop as an array', () => {
    const { getByRole } = renderWithWrapper(
      <Text style={[{ color: 'red' }, { fontSize: 30 }]}>Children Text</Text>
    );
    const { props } = getByRole('text');
    expect(props.style).toEqual({
      color: 'red',
      fontSize: 30,
    });
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
