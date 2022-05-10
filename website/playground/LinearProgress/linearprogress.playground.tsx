import * as React from 'react';
import { LinearProgress } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const LinearProgressPlayground = () => {
  const params = useView({
    componentName: 'LinearProgress',
    props: {
      value: {
        type: PropTypes.Number,
        value: 0,
      },
      variant: {
        type: PropTypes.Enum,
        options: { determinate: 'determinate', indeterminate: 'indeterminate' },
        value: 'indeterminate',
      },
      style: {
        type: PropTypes.Object,
        value: `{width: "90%"}`,
      },
      color: {
        type: PropTypes.String,
        value: 'secondary',
      },
      trackColor: {
        type: PropTypes.String,
        value: '',
      },
    },
    scope: {
      LinearProgress,
    },
    imports: {
      '@rneui/base': {
        named: ['LinearProgress'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default LinearProgressPlayground;
