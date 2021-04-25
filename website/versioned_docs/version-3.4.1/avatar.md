---
id: avatar
title: Avatar
---

import Props from './props/avatar.md'

Avatars are found all over ui design from lists to profile screens. They are
commonly used to represent a user and can contain photos, icons, or even text.

<div class="component-preview component-preview--grid">
  <figure>
    <img src="/img/avatar/avatar--photo.jpg" alt="Standard Avatar" />
    <figcaption>Standard</figcaption>
  </figure>
  <figure>
    <img src="/img/avatar/avatar--title.jpg" alt="Avatar with Title" />
    <figcaption>Title</figcaption>
  </figure>
  <figure>
    <img src="/img/avatar/avatar--icon.jpg" alt="Avatar with Icon" />
    <figcaption>Icon</figcaption>
  </figure>
  <figure>
    <img src="/img/avatar/avatar--edit.jpg" alt="Standard Avatar with accessory" />
    <figcaption>Standard with accessory</figcaption>
  </figure>
</div>

## Usage

```js
import { Avatar } from 'react-native-elements';

// Standard Avatar
<Avatar
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>

// Avatar with Title
<Avatar rounded title="MD" />

// Avatar with Icon
<Avatar rounded icon={{ name: 'home' }} />

// Standard Avatar with accessory
<Avatar
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  }}
  >
  <Avatar.Accessory {...accessoryProps} />
</Avatar>
```

#### Avatar with initials

<img src="/img/avatar_with_initials.png" width="500" />

```js
import { Avatar } from "react-native-elements";

<Avatar
  size="small"
  rounded
  title="MT"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="medium"
  title="BP"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="large"
  title="LW"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  size="xlarge"
  rounded
  title="CR"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
```

#### Avatar with icons

<img src="/img/avatar_with_icons.png" width="500" />

```js
import { Avatar } from "react-native-elements";

<Avatar
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
/>
<Avatar
  size="small"
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
/>
<Avatar
  size="medium"
  overlayContainerStyle={{backgroundColor: 'blue'}}
  icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 3, marginTop: 100}}
/>
<Avatar
  size="large"
  icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
  overlayContainerStyle={{backgroundColor: 'white'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 4, marginTop: 75}}
/>
<Avatar
  size="xlarge"
  rounded
  icon={{name: 'home', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 5, marginRight: 60}}
/>
<Avatar
  size={200}
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
/>
```

#### Avatar with title placeholder

<img src="/img/avatar_with_title_placeholder.gif" width="500" />

```js
import { Avatar, ListItem } from 'react-native-elements';

<ListItem>
  <Avatar
    title={name[0]}
    source={{ uri: avatar_url }}
  />
  <ListItem.Content>
    <ListItem.Title>{name}</ListItem.Title>
    <ListItem.SubTitle>{role}</ListItem.Subtitle>
  </ListItem.Content>
  <ListItem.Chevron/>
/>;
```

---

<Props />

---
