import * as React from 'react';
import { Tab } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const TabPlayground = () => {
  const params = useView({
    componentName: 'Tab',
    props: {
      children: {
        value: ` 
          <Tab.Item title="Recent" />
          <Tab.Item title="favourite" />
          <Tab.Item title="cart" />
         `,
        type: PropTypes.ReactNode,
      },
      value: {
        type: PropTypes.Number,
        value: 0,
      },
      onChange: {
        type: PropTypes.Function,
        value: `() => console.log("onChange()")`,
      },
      disableIndicator: {
        type: PropTypes.Boolean,
        value: false,
      },
      indicatorStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      variant: {
        type: PropTypes.Enum,
        options: { primary: 'primary', default: 'default' },
        value: 'default',
      },
    },
    scope: {
      Tab,
    },
    imports: {
      '@rneui/base': {
        named: ['Tab'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default TabPlayground;
