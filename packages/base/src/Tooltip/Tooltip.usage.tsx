import { info, Stack, usage } from '@rneui/doc-gen';
import React from 'react';
import { Text, Tooltip } from '..';

info('Tooltips display informative text when users tap on an element.');

usage('Uncontrolled', '', () => (
  <Stack row align="center">
    <Tooltip popover={<Text style={{ color: '#fff' }}>Tooltip text</Text>}>
      Click me
    </Tooltip>
  </Stack>
));

usage(
  'Controlled',
  '',
  () =>
    function RNETooltip() {
      const [open, setOpen] = React.useState(false);
      return (
        <Stack row align="center">
          <Tooltip
            isVisible={open}
            onShow={() => setOpen(true)}
            onDismiss={() => setOpen(false)}
            popover={<Text style={{ color: '#fff' }}>Tooltip text</Text>}
          >
            Click me
          </Tooltip>
        </Stack>
      );
    }
);
