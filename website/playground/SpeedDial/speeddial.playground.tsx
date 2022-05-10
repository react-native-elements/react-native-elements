import * as React from 'react';
import { SpeedDial } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const SpeedDialPlayground = () => {
  const params = useView({
    componentName: 'SpeedDial',
    props: {
      children: {
        value: `
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />`,
      },
      isOpen: {
        type: PropTypes.Boolean,
        value: true,
      },
      openIcon: {
        type: PropTypes.Object,
        value: `{ name: 'close', color: '#fff' }`,
      },
      onOpen: {
        type: PropTypes.Function,
        value: `() => console.log("onOpen()")`,
      },
      onClose: {
        type: PropTypes.Function,
        value: `() => console.log("onClose()")`,
      },
      transitionDuration: {
        type: PropTypes.Number,
        value: 150,
      },
      icon: {
        type: PropTypes.Object,
        value: `{ name: 'edit', color: '#fff' }`,
      },
    },
    scope: {
      SpeedDial,
    },
    imports: {
      '@rneui/base': {
        named: ['SpeedDial'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} containerStyle={{ height: '200px' }} />
    </React.Fragment>
  );
};

export default SpeedDialPlayground;
