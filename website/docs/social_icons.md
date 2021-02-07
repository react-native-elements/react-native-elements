---
id: social_icon
title: SocialIcon
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/social_icons.md'

SocialIcons are visual cues to online and social media networks.

<img alt="Social Icons" src={useBaseUrl('img/social-icons.png')} />

## Usage

```js
import { SocialIcon } from 'react-native-elements'

// Icon
<SocialIcon
  type='twitter'
/>

<SocialIcon
  raised={false}
  type='gitlab'
/>

<SocialIcon
  light
  type='medium'
/>

<SocialIcon
  light
  raised={false}
  type='medium'
/>


// Button
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>

<SocialIcon
  button
  light
  type='instagram'
/>
```

---

<Props />

---
