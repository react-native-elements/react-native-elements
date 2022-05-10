import * as React from 'react';
import { PricingCard } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const PricingPlayground = () => {
  const params = useView({
    componentName: 'PricingCard',
    props: {
      button: {
        type: PropTypes.Object,
        value: `{ title: 'GET STARTED', icon: 'flight-takeoff' }`,
      },
      color: {
        type: PropTypes.String,
        value: '#4f9deb',
      },
      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      info: {
        type: PropTypes.Array,
        value: `['1 User', 'Basic Support', 'All Core Features']`,
      },
      infoStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      onButtonPress: {
        type: PropTypes.Function,
        value: `() => console.log("onButtonPress()")`,
      },
      price: {
        type: PropTypes.String,
        value: '$100',
      },
      pricingStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },

      title: {
        type: PropTypes.String,
        value: 'Pro+',
      },
      titleStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      wrapperStyle: {
        type: PropTypes.Object,
        value: `{padding:10}`,
      },
    },
    scope: {
      PricingCard,
    },
    imports: {
      '@rneui/base': {
        named: ['PricingCard'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default PricingPlayground;
