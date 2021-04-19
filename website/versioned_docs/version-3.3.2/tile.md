---
id: tile
title: Tile
---

import Props from './props/tile.md'

Tiles like Cards, are a convenient way to display related content about a single
subject.

> This component was inspired from [Shoutem UI](https://github.com/shoutem/ui)
> by [Shoutem](https://github.com/shoutem). Check out
> [Shoutem](http://shoutem.github.io/) if you haven't already!

## Usage

### Featured Tile

![screen shot 2017-01-15 at 9 50 15 pm](https://cloud.githubusercontent.com/assets/6476108/21969491/beea4630-db6c-11e6-8913-7cc8813e35d6.png)

```js
import { Tile } from 'react-native-elements';

<Tile
  imageSrc={require('./img/path')}
  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
  featured
  caption="Some Caption Text"
/>;
```

### Featured Tile with Icon

![screen shot 2017-01-15 at 9 50 22 pm](https://cloud.githubusercontent.com/assets/6476108/21969581/6004e408-db6d-11e6-9379-556a0c5e967a.png)

```js
import { Tile } from 'react-native-elements';

<Tile
  imageSrc={require('./img/path')}
  icon={{ name: 'play-circle', type: 'font-awesome' }}
  featured
/>;
```

### Tile with Icon

![screen shot 2017-01-15 at 9 50 34 pm](https://cloud.githubusercontent.com/assets/6476108/21969683/fce073f0-db6d-11e6-8d03-6e42c15627a9.png)

```js
import { Tile } from 'react-native-elements';

<Tile
  imageSrc={require('./img/path')}
  title="Lorem ipsum dolor sit amet, consectetur"
  icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
  contentContainerStyle={{ height: 70 }}
>
  <View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
    <Text>Caption</Text>
    <Text>Caption</Text>
  </View>
</Tile>;
```

---

<Props />

---
