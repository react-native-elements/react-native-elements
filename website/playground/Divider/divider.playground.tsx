import * as React from 'react';
import { Divider, defaultTheme as theme } from '@rneui/base';

import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const DividerPlayground = () => {
  const params = useView({
    componentName: 'Divider',
    props: {
      style: {
        type: PropTypes.Object,
        value: `{width:"80%",margin:20}`,
        description: 'Apply style to the divider.',
      },
      color: {
        type: PropTypes.String,
        value: theme.colors.primary,
        description: 'Apply color to the divider.',
      },
      inset: {
        type: PropTypes.Boolean,
        value: false,
        description: 'Applies inset to the divider if true. Default is left.',
      },
      insetType: {
        type: PropTypes.String,
        value: 'left',
        description:
          'Add inset to the divider in left, right, or in both direction. Choose among left, right, or middle.',
      },
      subHeader: {
        type: PropTypes.String,
        value: 'React native elements',
        description: 'Adds a sub-header next to divider.',
      },
      subHeaderStyle: {
        type: PropTypes.Object,
        value: `{}`,
        description: 'Adds styles to the sub header of divider.',
      },
      width: {
        type: PropTypes.Number,
        value: 1,
        description: 'Add width to the divider.',
      },
      orientation: {
        type: PropTypes.String,
        value: 'horizontal',
        description: 'Adds orientation to the divider.',
      },
    },
    scope: {
      Divider,
    },
    imports: {
      '@rneui/base': {
        named: ['Divider'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default DividerPlayground;
