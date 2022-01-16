import React from 'react';
import PricingCard from '../index';
import Icon from '../../Icon';
import Button from '../../Button';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { FullTheme } from '../..';

describe('PricingCard component', () => {
  it.skip('', () => {
    const component = renderWithWrapper(
      <PricingCard
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { queryByText } = renderWithWrapper(
      <PricingCard
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{
          title: 'GET STARTED',
          icon: 'flight-takeoff',
          titleStyle: { fontSize: 30 },
        }}
      />
    );
    expect(queryByText('GET STARTED').props.style).toMatchObject({
      fontSize: 30,
    });
  });

  it.skip('', () => {
    const component = renderWithWrapper(
      <PricingCard
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        titleStyle={{ fontFamily: 'arial' }}
        infoStyle={{ fontFamily: 'arial' }}
        pricingStyle={{ fontFamily: 'arial' }}
        containerStyle={{ backgroundColor: 'peru' }}
        wrapperStyle={{ backgroundColor: 'peru' }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const theme: Partial<FullTheme> = {
      PricingCard: {
        title: 'ALL YOU CAN EAT',
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

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <PricingCard
        button={<Button title="GET STARTED" testID="myButton" disabled />}
      />,
      'myButton'
    );
    expect(wrapper).not.toBeNull();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <PricingCard
        button={{
          title: 'GET STARTED',
          icon: { name: 'flight-takeoff', size: 30, color: 'red' },
          disabled: true,
        }}
      />
    );
    expect(wrapper.findByType(Icon).props).toMatchObject({
      name: 'flight-takeoff',
      size: 30,
      color: 'red',
    });
    expect(wrapper.findByType(Button).props).toMatchObject({
      title: 'GET STARTED',
      disabled: true,
    });
  });
});
