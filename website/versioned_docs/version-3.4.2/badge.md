---
id: badge
title: Badge
---

import Props from './props/badge.md'

Badges are small components typically used to communicate a numerical value or
indicate the status of an item to the user.

<div className="component-preview component-preview--grid component-preview--grid-3">
  <figure>
  <img src="/img/badge/badge--standard.jpg" alt="Standard" />
    <figcaption>Standard</figcaption>
  </figure>
  <figure>
    <img src="/img/badge/badge--mini.jpg" alt="Mini Badge" />
    <figcaption>Mini Badge</figcaption>
  </figure>
  <figure>
  <img src="/img/badge/badge--indicator.jpg" alt="Badge as Indicator" />
    <figcaption>Badge as Indicator</figcaption>
  </figure>
</div>

### Mini Badge

This type of badge shows when no `value` prop is provided. This form is
effective for showing statuses.

### withBadge Higher-Order Component

The withBadge HOC allows you to easily add badges to icons and other components.

## Usage

```js
import { Text, View } from 'react-native'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

// Standard badge
<Badge value="99+" status="error" />
<Badge value={<Text>My Custom Badge</Text>} />

// Mini badge
<Badge status="success" />
<Badge status="error" />
<Badge status="primary" />
<Badge status="warning" />

// Avatar with mini badge
<View>
  <Avatar
    rounded
    source={{
      uri: 'https://randomuser.me/api/portraits/men/41.jpg',
    }}
    size="large"
  />

  <Badge
    status="success"
    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
  />
</View>

// withBadge HOC

const BadgedIcon = withBadge(1)(Icon)
<BadgedIcon type="ionicon" name="ios-chatbubbles" />

// Using the decorator proposal
@connect(state => ({
  notifications: state.notifications,
}))
@withBadge(props => props.notifications.length)
export default class MyDecoratedIcon extends React.Component {
  render() {
    return (
      <Icon type="ionicon" name="md-cart" />
    );
  }
}
```

---

<Props />

---
