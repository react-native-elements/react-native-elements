import { info, usage } from '@rneui/doc-gen';
import React from 'react';
import { ButtonGroup, Icon } from '..';

info(
  'ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.',
  'Use a ButtonGroup to offer choices that are closely related but mutually exclusive.',
  'This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://reactnative.dev/docs/touchablehighlight.html).'
);

usage(
  'Icon',
  '',
  () =>
    function () {
      const [selectedIndex, setSelectedIndex] = React.useState(0);
      return (
        <ButtonGroup
          buttonStyle={{ padding: 10 }}
          selectedButtonStyle={{ backgroundColor: '#e2e2e2' }}
          buttons={[
            <Icon name="format-align-left" />,
            <Icon name="format-align-center" />,
            <Icon name="format-align-right" />,
          ]}
          selectedIndex={selectedIndex}
          onPress={setSelectedIndex}
        />
      );
    }
);

usage(
  'Multi Select',
  '',
  () =>
    function () {
      const [selectedIndex, setSelectedIndex] = React.useState([]);
      return (
        <ButtonGroup
          selectMultiple
          buttonStyle={{ padding: 10 }}
          selectedButtonStyle={{ backgroundColor: '#e2e2e2' }}
          buttons={[
            <Icon name="format-bold" />,
            <Icon name="format-italic" />,
            <Icon name="format-underline" />,
          ]}
          selectedIndexes={selectedIndex}
          onPress={setSelectedIndex}
        />
      );
    }
);
