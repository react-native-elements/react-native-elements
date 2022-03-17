import React from 'react';
import SocialIcon from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Icon } from '../../Icon';

describe('SocialIcon component', () => {
  it('should apply values from theme', () => {
    const theme = {
      SocialIcon: {
        type: 'facebook',
      },
    };
    const { queryByTestId } = renderWithWrapper(<SocialIcon />, '', theme);
    const rootComponent = queryByTestId('RNE_SocialIcon');
    const iconComponent = rootComponent.findByType(Icon);
    expect(iconComponent.props.name).toBe('facebook');
  });
});
