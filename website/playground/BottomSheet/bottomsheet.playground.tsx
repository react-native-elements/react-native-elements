import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { BottomSheet, Text } from '@rneui/base';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const BottomSheetPlayground = () => {
  const params = useView({
    componentName: 'BottomSheet',
    props: {
      children: {
        type: PropTypes.ReactNode,
        value: `<Text>Some Content</Text>`,
      },
      isVisible: {
        type: PropTypes.Boolean,
        value: false,
      },
      modalProps: {
        type: PropTypes.Object,
        value: `{ presentationStyle: "fullScreen" , }`,
        description: 'Modal Props -> https://reactnative.dev/docs/modal',
      },
    },
    scope: {
      BottomSheet,
      Text,
    },
    imports: {
      '@rneui/base': {
        named: ['BottomSheet', 'Text'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default BottomSheetPlayground;
