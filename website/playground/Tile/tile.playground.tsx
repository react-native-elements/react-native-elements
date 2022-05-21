import * as React from 'react';
import { Tile } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const TilePlayground = () => {
  const params = useView({
    componentName: 'Tile',
    props: {
      activeOpacity: {
        value: 0.5,
        type: PropTypes.Number,
      },
      caption: {
        value: 'Tile caption',
        type: PropTypes.String,
        description: '',
      },
      captionStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      contentContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      featured: {
        type: PropTypes.Boolean,
        value: false,
      },
      height: {
        type: PropTypes.Number,
        value: 300,
      },
      icon: {
        type: PropTypes.Object,
        value: ``,
        description:
          'object {name: string, color: string, size: number, type: string (default is material, or choose from supported icon sets), iconStyle: object(style)}',
      },
      iconContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      ImageComponent: { type: PropTypes.ReactNode, value: null },
      imageContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      imageProps: { type: PropTypes.Object, value: `{}` },
      // imageSrc: {
      //   type: PropTypes.ReactNode,
      //   value: `SampleImage`,
      // },

      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("imageProps()")`,
      },
      overlayContainerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      title: {
        type: PropTypes.String,
        value: '',
      },
      titleNumberOfLines: {
        type: PropTypes.Number,
        value: null,
      },
      titleStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },

      width: { type: PropTypes.Number, value: '400' },
    },
    scope: {
      Tile,
      // SampleImage,
    },
    imports: {
      '@rneui/base': {
        named: ['Tile'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default TilePlayground;
