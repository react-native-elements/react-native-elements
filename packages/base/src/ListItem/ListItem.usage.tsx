import { info, meta, usage } from '@rneui/doc-gen';
import React from 'react';
import { Avatar, Button, Icon, ListItem } from '..';

info(
  'ListItems are used to display rows of information, such as a contact list, playlist, or menu.',
  'They are very customizable and can contain switches, avatars, badges, icons, and more.'
);

meta({
  name: 'ListItem',
});

usage(
  'Default',
  '',
  () => (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>John Doe</ListItem.Title>
        <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  ),
  {
    showCode: true,
  }
);

usage('Icon', '', () => (
  <>
    <ListItem>
      <Icon name="inbox" type="material-community" color="grey" />
      <ListItem.Content>
        <ListItem.Title>Inbox</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
    <ListItem>
      <Icon name="trash-can-outline" type="material-community" color="grey" />
      <ListItem.Content>
        <ListItem.Title>Trash</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  </>
));

usage('Avatar', '', () => (
  <>
    <ListItem bottomDivider>
      <Avatar
        rounded
        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
      />
      <ListItem.Content>
        <ListItem.Title>John Doe</ListItem.Title>
        <ListItem.Subtitle>President</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    <ListItem bottomDivider>
      <Avatar
        rounded
        icon={{
          name: 'person-outline',
          type: 'material',
          size: 26,
        }}
        containerStyle={{ backgroundColor: '#c2c2c2' }}
      />
      <ListItem.Content>
        <ListItem.Title>Alba King</ListItem.Title>
        <ListItem.Subtitle>Vice President</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    <ListItem>
      <Avatar rounded title="A" containerStyle={{ backgroundColor: 'grey' }} />
      <ListItem.Content>
        <ListItem.Title>Adam Eva</ListItem.Title>
        <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  </>
));

usage('LinearGradient', '', ({ LinearGradient }) => (
  <ListItem
    linearGradientProps={{
      colors: ['#FF9800', '#F44336'],
      start: { x: 1, y: 0 },
      end: { x: 0.2, y: 0 },
    }}
    ViewComponent={LinearGradient} // Only if no expo
  >
    <Avatar
      rounded
      source={{ uri: 'https://randomuser.me/api/portraits/men/33.jpg' }}
    />
    <ListItem.Content>
      <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
        Chris Jackson
      </ListItem.Title>
      <ListItem.Subtitle style={{ color: 'white' }}>
        Vice Chairman
      </ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron color="white" />
  </ListItem>
));

usage(
  'Accordion',
  'Use as a collapsible list item refer props for [ListItem.Accordion](./listItem_accordion#props)',
  () =>
    function RNEListItemAccordion() {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <>
          <ListItem.Accordion
            content={
              <ListItem.Content>
                <ListItem.Title>Top Users</ListItem.Title>
                <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
              </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <ListItem>
              <Avatar
                rounded
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/32.jpg',
                }}
              />
              <ListItem.Content>
                <ListItem.Title>John Doe</ListItem.Title>
                <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem>
              <Avatar
                rounded
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                }}
              />
              <ListItem.Content>
                <ListItem.Title>Albert</ListItem.Title>
                <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </ListItem.Accordion>
        </>
      );
    }
);

usage(
  'Swipeable',
  'Try swiping list item, refer props for [ListItem.Swipeable](./listItem_swipeable#props)',
  () => (
    <ListItem.Swipeable
      leftWidth={80}
      rightWidth={90}
      minSlideWidth={40}
      leftContent={(action) => (
        <Button
          containerStyle={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#f4f4f4',
          }}
          type="clear"
          icon={{
            name: 'archive-outline',
            type: 'material-community',
          }}
          onPress={action}
        />
      )}
      rightContent={(action) => (
        <Button
          containerStyle={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#f4f4f4',
          }}
          type="clear"
          icon={{ name: 'delete-outline' }}
          onPress={action}
        />
      )}
    >
      <Icon name="label-important-outline" type="material" />
      <ListItem.Content>
        <ListItem.Title>Email from John Doe</ListItem.Title>
        <ListItem.Subtitle>Hey, I'm John Doe</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  )
);

usage(
  'Checkbox',
  'Refer props for [ListItem.CheckBox](./listItem_checkbox#props)',
  () =>
    function () {
      const [checked, setChecked] = React.useState([false, false]);
      return (
        <>
          <ListItem bottomDivider>
            <ListItem.CheckBox
              // Use ThemeProvider to change the defaults of the checkbox
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checked={checked[0]}
              onPress={() => setChecked([!checked[0], checked[1]])}
            />
            <ListItem.Content>
              <ListItem.Title>User 1</ListItem.Title>
              <ListItem.Subtitle>CA, US</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.CheckBox
              // Use ThemeProvider to change the defaults of the checkbox
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checked={checked[1]}
              onPress={() => setChecked([checked[0], !checked[1]])}
            />
            <ListItem.Content>
              <ListItem.Title>User 2</ListItem.Title>
              <ListItem.Subtitle>HR, India</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </>
      );
    }
);
