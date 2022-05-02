import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { SpeedDial } from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Speed Dial Action', () => {
  it('should have onPress event', () => {
    const onPress = jest.fn();
    const { getByText } = renderWithWrapper(
      <SpeedDial.Action
        icon={{ name: 'delete', color: '#fff' }}
        title="Delete"
        onPress={onPress}
      />
    );
    const title = getByText('Delete');
    fireEvent(title, 'press');
    expect(onPress).toHaveBeenCalled();
  });
});
