import * as React from 'react';
import { FAB } from '@rneui/base';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const FabPlayground = () => {
  const params = useView({
    componentName: 'FAB',
    props: {
      style: {
        type: PropTypes.Object,
        value: `{width:"80%",margin:20}`,
      },
      placement: {
        type: PropTypes.Enum,
        options: { left: 'left', right: 'right' },
        value: 'left',
      },
      color: {
        type: PropTypes.String,
        value: '',
      },
      size: {
        type: PropTypes.Enum,
        options: { small: 'small', large: 'large' },
        value: 'small',
      },
      visible: {
        type: PropTypes.Boolean,
        value: false,
      },
      upperCase: {
        type: PropTypes.Boolean,
        value: false,
      },
      overlayColor: {
        type: PropTypes.String,
        value: '#454545',
      },
      title: {
        type: PropTypes.String,
        value: 'Create',
      },
      icon: {
        type: PropTypes.Object,
        value: `{ name: 'edit', color: '#fff' }`,
      },
    },
    scope: {
      FAB,
    },
    imports: {
      '@rneui/base': {
        named: ['FAB'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default FabPlayground;
