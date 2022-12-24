import { Stack } from '@rneui/layout';
import { Badge, Button, Icon, Text, Tooltip } from '@rneui/themed';
import React from 'react';
import { ScrollView } from 'react-native';
import { Header } from '../components/header';
import colors from '../config/colors';

const TooltipComponent = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header title="Tooltip" view="tooltip" />
      <ScrollView style={{ marginTop: 30 }}>
        <Stack spacing={15} align="center">
          <Tooltip popover={'No pointer'} withPointer={false}>
            <Text>Without Pointer</Text>
          </Tooltip>

          <Tooltip
            popover={'this is controlled by button'}
            width={250}
            isVisible={open}
            onDismiss={() => setOpen(false)}
            backgroundColor={colors.primary}
          >
            <Text>Controlled Tooltip</Text>
          </Tooltip>

          <Button
            containerStyle={{ marginTop: 20 }}
            radius={'sm'}
            onPress={() => setOpen(true)}
          >
            Open Tooltip
          </Button>
          <Tooltip
            containerStyle={{ width: 145, height: 180 }}
            popover={
              'Some big text full of important stuff for the super duper user that our design has been created for'
            }
          >
            <Text>Large text</Text>
          </Tooltip>
          <Tooltip
            backgroundColor={colors.secondary}
            popover="Without Overlay"
            withOverlay={false}
            highlightColor={colors.secondary2}
          >
            <Text>Highlighted</Text>
          </Tooltip>
          <Tooltip
            backgroundColor={colors.secondary}
            width={200}
            popover="With toggle action"
            withOverlay={false}
            toggleAction="onLongPress"
          >
            <Text>Long Press</Text>
          </Tooltip>
          <Tooltip
            backgroundColor={colors.secondary}
            popover="Without Overlay"
            withOverlay={false}
          >
            <Text>No overlay</Text>
          </Tooltip>
          <Tooltip width={300} popover={<Text>Tooltip info goes here</Text>}>
            <Text>Large Width</Text>
          </Tooltip>
          <Stack row spacing={50}>
            <Tooltip width={200} popover="Over Icon">
              <Icon name="edit" />
            </Tooltip>
            <Tooltip width={200} popover="Over Badge">
              <Badge value="500" status="primary" />
            </Tooltip>
          </Stack>
        </Stack>
      </ScrollView>
    </>
  );
};

export default TooltipComponent;
