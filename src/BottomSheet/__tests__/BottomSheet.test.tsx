import React from 'react';
import BottomSheet from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { SafeAreaView } from 'react-native-safe-area-context';

describe('BottomSheet Component', () => {
  it('Should use Theme', () => {
    const { wrapper } = renderWithWrapper(
      <BottomSheet
        isVisible={true}
        scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
      />,
      '',
      {
        components: {
          BottomSheet: {
            containerStyle: { backgroundColor: 'rgba(1, 0.5, 0.25, 1.0)' },
          },
        },
      }
    );
    expect(wrapper.findByType(SafeAreaView).props.style).toMatchObject({
      backgroundColor: 'rgba(1, 0.5, 0.25, 1.0)',
    });
  });
});
