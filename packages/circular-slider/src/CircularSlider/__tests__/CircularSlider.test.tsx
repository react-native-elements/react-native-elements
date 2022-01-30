import React from 'react';
import CircularSlider from './../CircularSlider';
import { render } from '@testing-library/react-native';

test('CircularSlider Component', () => {
  const mockFn = jest.fn();
  const component = render(<CircularSlider value={80} onChange={mockFn} />);
  expect(component).toBeTruthy();
});
