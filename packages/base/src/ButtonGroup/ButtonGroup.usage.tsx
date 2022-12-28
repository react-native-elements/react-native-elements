import { info, usage } from '@rneui/doc-gen';
import React from 'react';
import { ButtonGroup, Icon } from '..';

info(
  'CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice.'
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
