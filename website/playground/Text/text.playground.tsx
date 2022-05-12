import * as React from 'react';
import { Text } from '@rneui/base';
import Playground from '../../src/components/Playground';
import { useView, PropTypes } from 'react-view';

const TextPlayground = () => {
  const params = useView({
    componentName: 'Text',
    props: {
      h1: {
        value: true,
        type: PropTypes.Boolean,
        description: 'Heading 1',
      },
      h1Style: {
        value: `{}`,
        type: PropTypes.Object,
        description: 'Styling for h1',
      },
      h2: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Heading 2',
      },
      h2Style: {
        value: `{}`,
        type: PropTypes.Object,
        description: 'Styling for h2',
      },
      h3: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Heading 3',
      },
      h3Style: {
        value: `{}`,
        type: PropTypes.Object,
        description: 'Styling for h3',
      },
      h4: {
        value: false,
        type: PropTypes.Boolean,
        description: 'Heading 4',
      },
      h4Style: {
        value: `{}`,
        type: PropTypes.Object,
        description: 'Styling for h4',
      },
      style: {
        value: `{}`,
        type: PropTypes.Object,
        description: 'Styling of the text',
      },
      children: {
        value: 'This is a Text.',
        type: PropTypes.String,
        description: 'Text Content',
      },
    },
    scope: {
      Text,
    },
    imports: {
      '@rneui/base': {
        named: ['Text'],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default TextPlayground;
