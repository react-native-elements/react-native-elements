import * as React from 'react';
import { Image } from '@rneui/base';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const ImagePlayground = () => {
  const params = useView({
    componentName: 'Image',
    props: {
      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      ImageComponent: {
        type: PropTypes.ReactNode,
        value: null,
        description: 'Specify a different component as the Image component.',
      },
      onLongPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongPress()")`,
      },
      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("onPress()")`,
      },
      PlaceholderContent: {
        type: PropTypes.ReactNode,
        value: null,
      },
      placeholderStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      transition: {
        type: PropTypes.Boolean,
        value: false,
      },
      transitionDuration: {
        type: PropTypes.Number,
        value: 1000,
      },
      source: {
        type: PropTypes.Object,
        value: `{uri: "https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png"}`,
      },
      style: {
        type: PropTypes.Object,
        value: `{ width: 200, height: 200 }`,
      },
    },
    scope: {
      Image,
    },
    imports: {
      '@rneui/base': {
        named: ['Image'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default ImagePlayground;
