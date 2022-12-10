import React from 'react';
import { CheckBox } from '..';
import { usage, Stack, info } from '@rneui/doc-gen';

info(
  'CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice.'
);

usage(
  'Controlled CheckBox',
  "```tsx live\nfunction RNECheckBox() {const [open, setOpen] = React.useState(false);return (<Stack row align='center'><CheckBox checked={open} onPress={() => setOpen(!open)} /></Stack>);}\n ``` \n ### More examples",
  () => (
    <Stack row align="center">
      <CheckBox checked />
      <CheckBox checked checkedIcon="dot-circle-o" uncheckedIcon="circle-o" />
      <CheckBox
        center
        checked
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
      />
    </Stack>
  )
);
