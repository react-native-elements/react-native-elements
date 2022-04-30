import React from 'react';
import { Text } from '@rneui/themed';
import { Header, SubHeader } from '../components/header';
import { Menu, MenuItem } from '@rneui/base/dist/Menu/Menu';

type AvatarComponentProps = {};

const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header title="Avatars" view="avatar" />
      {/* <View
        style={
          {
            // display: 'flex',
            // flex: 1,
            // justifyContent: 'flex-end',
            // alignItems: 'flex-end',
            // backgroundColor: '#0f03',
          }
        }
      > */}
      {/* <Tooltip
          visible={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          withOverlay={false}
          withPointer={false}
          animationType="none"
          containerStyle={{
            borderRadius: 2,
            // transform: [{ translateX: -80 }],
            backgroundColor: 'white',
            elevation: 20,
          }}
          // closeOnlyOnBackdropPress
          // toggleOnPress
          popover={
            <Pressable>
              <Text>Yo</Text>
            </Pressable>
          }
        >
          <Text
            onPress={() => {
              setOpen((e) => !e);
            }}
          >
            Open
          </Text>
        </Tooltip> */}

      {/* // <Icon
//   style={{}}
//   name="menu"
//   onPress={() => {
//     setOpen((e) => !e);
//   }}
// /> */}
      <Menu
        visible={open}
        onClose={() => setOpen(false)}
        anchor={<Text onPress={() => setOpen((e) => !e)}>Yoyo</Text>}
      >
        <MenuItem icon={{ name: 'edit' }}>Edit</MenuItem>
        <MenuItem icon={{ name: 'save' }}>Save</MenuItem>
        <MenuItem icon={{ name: 'person' }}>Profile</MenuItem>
      </Menu>
      {/* </View> */}
    </>
  );
};

export default Avatars;
