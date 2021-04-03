---
id: dropdown
title: Dropdown
---

import Props from './props/dropdown.md'

A dropdown component acts as wrapper and hides the descriptive data inside itself, can be seen by pressing it.

<div className="component-preview component-preview--grid component-preview--grid-10">
  <figure>
    <img src="/img/dropdown.gif" alt="Dropdown" />
    <figcaption>Dropdown</figcaption>
  </figure>
</div>

## Usage

```js
import { Dropdown } from 'react-native-elements';
```

```js
const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s11.favim.com/orig/7/772/7729/77295/profile-pics-pretty-girl-cute-Favim.com-7729542.jpg',
      subtitle: 'Cousin'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/03/pjimage-2-1585013198.jpg',
      subtitle: 'Brother'
    },
    {
        name: 'Mathew Jackson',
        avatar_url: 'http://3doz1i2eztq711nqzp2is66b-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Father.jpg',
        subtitle: 'Father'
      },
      {
        name: 'Casey Jackson',
        avatar_url: 'https://penfieldbuildingblocks.org/wp-content/uploads/2018/08/the-mother-child-relationship.jpg',
        subtitle: 'Mom'
      },
  ]

  const College = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s11.favim.com/orig/7/772/7729/77295/profile-pics-pretty-girl-cute-Favim.com-7729542.jpg',
    badge:"error"
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/03/pjimage-2-1585013198.jpg',
      badge:"success"

    },
  //  ... other Items 
  ]

const Questions = [
    {
        title:"Your First Pet Name?",
    },
    {
        title:"What city your parent born?"
    },
    {
        title:"Your favourite dish?"
    },
    {
        title:"Your favourite show?"
    },
    
]

<Dropdown containerStyle={{backgroundColor:'white'}} initalNumberOfelement={6} >
  <Dropdown.Head activeOpacity={0.5}  >
    <Dropdown.Content>
      <Dropdown.Title>
        Family
      </Dropdown.Title>
      <Dropdown.Subtitle style={{color:"grey"}}>
        4 Contacts
      </Dropdown.Subtitle>
    </Dropdown.Content>
    <Dropdown.Chevron />
  </Dropdown.Head>
  {list.map((l, i) => (
    <Dropdown.Item    key={i} > 
      <Avatar rounded source={{uri: l.avatar_url}} />
      <Dropdown.Content>
        <Dropdown.Title>
          {l.name}
        </Dropdown.Title>
        <Dropdown.Subtitle>
          {l.subtitle}
        </Dropdown.Subtitle>
      </Dropdown.Content>
    </Dropdown.Item>
    ))
  }
</Dropdown>

<View style={{paddingVertical:10}}></View>

<Dropdown containerStyle={{backgroundColor:'white'}} initalNumberOfelement={4} >
  <Dropdown.Head activeOpacity={0.5}  >
    <Dropdown.Content>
      <Dropdown.Title>
      College
      </Dropdown.Title>
      <Dropdown.Subtitle style={{color:"grey"}}>
      8 Contacts
      </Dropdown.Subtitle>
    </Dropdown.Content>
    <Dropdown.Chevron />
  </Dropdown.Head>
  {College.map((l, i) => (
    <Dropdown.Item   key={i} > 
      <Avatar rounded source={{uri: l.avatar_url}} />
      <Dropdown.Content>
        <Dropdown.Title>
          {l.name}
        </Dropdown.Title>
      </Dropdown.Content>
      <Badge status={l.badge} />
    </Dropdown.Item>
    ))
  }
</Dropdown>

<View style={{paddingVertical:10}}></View>

<Dropdown containerStyle={{backgroundColor:'white'}} initalNumberOfelement={4} >
  <Dropdown.Head activeOpacity={0.5}  >
    <Dropdown.Content>
      <Dropdown.Title>
        {this.state.selectQuestion}
      </Dropdown.Title>
      </Dropdown.Content>
    <Dropdown.Chevron />
  </Dropdown.Head>
  {Questions.map((l, i) => (
    <Dropdown.Item onPress={()=>{this.setState({selectQuestion:l.title})}} bottomDivider  key={i} > 
      <Dropdown.Content>
        <Dropdown.Title>
          {l.title}
        </Dropdown.Title>
      </Dropdown.Content>
    </Dropdown.Item>
    ))
  }
</Dropdown>

```

---
<Props />

---
