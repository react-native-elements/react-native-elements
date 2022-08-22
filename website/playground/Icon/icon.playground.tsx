import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Icon } from '@rneui/base';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const IconPlayground = () => {
  const params = useView({
    componentName: 'Icon',
    props: {
      brand: {
        type: PropTypes.Boolean,
        value: false,
      },

      color: {
        type: PropTypes.String,
        value: '#0CC',
      },
      Component: {
        type: PropTypes.ReactNode,
        value: null,
        description:
          'View if no onPress method is defined, TouchableHighlight if onPress method is defined',
      },

      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      disabled: {
        type: PropTypes.Boolean,
        value: false,
      },
      disabledStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },

      iconProps: {
        type: PropTypes.Object,
        value: `{}`,
        description: '{...Icon props}',
      },
      iconStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },

      name: {
        type: PropTypes.String,
        value: 'devices',
      },

      onLongPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongPress()")`,
      },
      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("onPress()")`,
      },
      raised: {
        type: PropTypes.Boolean,
        value: false,
      },
      reverse: {
        type: PropTypes.Boolean,
        value: false,
      },
      reverseColor: {
        type: PropTypes.String,
        value: null,
      },
      size: {
        type: PropTypes.Number,
        value: 40,
      },
      solid: {
        type: PropTypes.Boolean,
        value: false,
      },
      type: {
        type: PropTypes.String,
        value: 'material',
      },
      underlayColor: {
        type: PropTypes.String,
        value: null,
      },
    },
    scope: {
      Icon,
    },
    imports: {
      '@rneui/base': {
        named: ['Icon'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default IconPlayground;
