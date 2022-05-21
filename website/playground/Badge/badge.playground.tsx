import * as React from 'react';
import { Badge } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const BadgePlayground = () => {
  const params = useView({
    componentName: 'Badge',
    props: {
      badgeStyle: {
        value: `{}`,

        type: PropTypes.Object,
      },
      containerStyle: {
        value: `{}`,
        defaultValue: {},
        type: PropTypes.Object,
      },
      onPress: {
        value: `() => {alert("onPress");}`,
        type: PropTypes.Function,
      },
      status: {
        value: 'primary',
        options: {
          primary: 'primary',
          success: 'success',
          warning: 'warning',
          error: 'error',
        },
        type: PropTypes.Enum,
        description: 'Defines the type of the button.',
      },
      textProps: {
        value: `{}`,
        type: PropTypes.Object,
      },
      textStyle: {
        value: `{color:"#EFE"}`,
        type: PropTypes.Object,
      },
      value: {
        type: PropTypes.String,
        value: 'Hello 👋',
      },
      Component: {
        defaultValue: null,
        type: PropTypes.Object,
      },
      options: {
        value: `{}`,
        type: PropTypes.Object,
      },
    },
    scope: {
      Badge,
    },
    imports: {
      '@rneui/base': {
        named: ['Badge'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default BadgePlayground;
