import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Overlay } from '@rneui/base';
import Modal from 'modal-react-native-web';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const OverlayPlayground = () => {
  const params = useView({
    componentName: 'Overlay',
    props: {
      backdropStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      children: {
        type: PropTypes.ReactNode,
        value: `<Text>Some content</Text><TouchableOpacity onPress={()=>setIsVisible(!isVisible)}><Text>Click to close</Text></TouchableOpacity>`,
        propHook: ({ getInstrumentOnChange, fnBodyAppend }) => ({
          JSXAttribute(path) {
            if (path.get('name').node.name === 'onPress') {
              fnBodyAppend(
                path.get('value'),
                getInstrumentOnChange('false', 'isVisible')
              );
            }
          },
        }),
      },
      isVisible: {
        type: PropTypes.Boolean,

        defaultValue: false,

        stateful: true,
      },
      fullScreen: {
        type: PropTypes.Boolean,
        value: false,
      },
      ModalComponent: {
        type: PropTypes.Object,
        value: `Modal`,
      },
      onBackdropPress: {
        type: PropTypes.Function,
        value: `() => setIsVisible(!isVisible)`,
        propHook: {
          what: `false`,
          into: `isVisible`,
        },
      },
      overlayStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
    },
    scope: {
      Overlay,
      Modal,
      Text,
      TouchableOpacity,
    },
    imports: {
      '@rneui/base': {
        named: ['Overlay', 'Text', 'TouchableOpacity'],
      },
      'modal-react-native-web': {
        default: 'Modal',
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default OverlayPlayground;
