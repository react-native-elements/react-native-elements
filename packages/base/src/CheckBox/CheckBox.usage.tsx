import React from 'react';
import { CheckBox } from '..';
import { usage, Stack, info } from '@rneui/doc-gen';

info(
  'CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice.'
);

usage(
  'Simple',
  '',
  () =>
    function () {
      const [checked, setChecked] = React.useState(true);
      const toggleCheckbox = () => setChecked(!checked);
      return (
        <Stack row align="center" spacing={1}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            // Use ThemeProvider to make change for all checkbox
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
          />
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
          />
          <CheckBox
            checked={false}
            disabled
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
          />
        </Stack>
      );
    }
);

usage('Label', '', () => (
  <Stack row align="center" spacing={4}>
    <CheckBox checked title="Label" />
    <CheckBox checked disabled title="Label" />
  </Stack>
));

usage(
  'Radio',
  '',
  () =>
    function () {
      const [selectedIndex, setIndex] = React.useState(0);

      return (
        <Stack row align="center" spacing={4}>
          <CheckBox
            checked={selectedIndex === 0}
            onPress={() => setIndex(0)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            checked={selectedIndex === 1}
            onPress={() => setIndex(1)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        </Stack>
      );
    }
);

usage('Size', '', () => (
  <Stack row align="center" spacing={4}>
    <CheckBox checked size={18} />
    <CheckBox checked size={24} />
    <CheckBox checked size={32} />
  </Stack>
));

usage(
  'Custom icon',
  '',
  () =>
    function () {
      const [checked, setState] = React.useState(true);
      const toggleCheckbox = () => setState(!checked);
      return (
        <Stack row align="center">
          <CheckBox
            checked={checked}
            checkedIcon="heart"
            uncheckedIcon="heart-o"
            checkedColor="red"
            onPress={toggleCheckbox}
          />
          <CheckBox
            checked={checked}
            checkedIcon="bookmark"
            uncheckedIcon="bookmark-o"
            checkedColor="heart"
            onPress={toggleCheckbox}
          />
        </Stack>
      );
    }
);
