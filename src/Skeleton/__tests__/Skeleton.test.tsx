import React from 'react';
import { Skeleton } from '..';
import { render } from '@testing-library/react-native';
import { test, expect } from '@jest/globals';

test('Skeleton Component', () => {
  const component = render(<Skeleton />);
  expect(component).toBeTruthy();
});
