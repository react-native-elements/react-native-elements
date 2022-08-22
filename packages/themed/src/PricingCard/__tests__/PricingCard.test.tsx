import React from 'react';
import PricingCard from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { CreateThemeOptions } from '../..';

describe('PricingCard component', () => {
  it('should apply values from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        PricingCard: {
          title: 'ALL YOU CAN EAT',
        },
      },
    };
    const { queryByText } = renderWithWrapper(
      <PricingCard
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />,
      '',
      theme
    );
    expect(queryByText('ALL YOU CAN EAT')).not.toBeNull();
  });
});
