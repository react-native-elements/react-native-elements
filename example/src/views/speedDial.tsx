import React from 'react';
import { Header } from '../components/header';
import { SpeedDial } from '@rneui/themed';

export default () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header title="Speed Dial" view="speeddial" />
      <SpeedDial
        isOpen={open}
        labelPressable
        placement="right"
        overlayColor="transparent"
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Added Event')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Event')}
        />
      </SpeedDial>
      <SpeedDial
        placement="left"
        isOpen={open}
        overlayColor="transparent"
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
        labelPressable
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Added Event')}
        />
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Added Event')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Event')}
        />
      </SpeedDial>
    </>
  );
};
