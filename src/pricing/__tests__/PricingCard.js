import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { create } from 'react-test-renderer';

import theme from '../../config/theme';
import { ThemeProvider } from '../../config';

import ThemedPricingCard, { PricingCard } from '../PricingCard';

describe('PricingCard component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <PricingCard
        theme={theme}
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without info', () => {
    const component = shallow(
      <PricingCard
        theme={theme}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render titleStyle', () => {
    const component = shallow(
      <PricingCard
        theme={theme}
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{
          title: 'GET STARTED',
          icon: 'flight-takeoff',
          titleStyle: { fontSize: 30 },
        }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with props', () => {
    const component = shallow(
      <PricingCard
        theme={theme}
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

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should apply values from theme', () => {
    const testTheme = {
      PricingCard: {
        title: 'ALL YOU CAN EAT',
      },
    };

    const component = create(
      <ThemeProvider theme={testTheme}>
        <ThemedPricingCard
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </ThemeProvider>
    );

    expect(
      component.root.findByProps({ testID: 'pricingCardTitle' }).props.children
    ).toBe('ALL YOU CAN EAT');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
