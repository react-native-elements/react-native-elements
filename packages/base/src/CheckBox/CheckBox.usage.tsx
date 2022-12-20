import React from 'react';
import { CheckBox } from '..';
import { usage, Stack, info } from '@rneui/doc-gen';

info(
  'CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice.'
);

usage(
  'Simple CheckBox',
  '',
  () =>
    function CheckBoxComponent() {
      const [state, setState] = React.useState(false);
      const toggleCheckbox = () => setState(!state);
      return (
        <Stack row align="center">
          <CheckBox checked={state} onPress={toggleCheckbox} />
          <CheckBox
            checked
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={toggleCheckbox}
          />
          <CheckBox
            center
            checked
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="add"
            checkedColor="red"
            onPress={toggleCheckbox}
          />
        </Stack>
      );
    },
  {
    showCode: false,
    live: true,
  }
);
