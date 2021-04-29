---
id: pricing
title: Pricing
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/pricing.md'

Pricing is a convenience component used to display features and pricing tables
in a beautiful and engaging way.

<img alt="Pricing Component" src={useBaseUrl('img/pricing.png')} />

## Usage

```js
import { PricingCard } from 'react-native-elements';

<PricingCard
  color="#4f9deb"
  title="Free"
  price="$0"
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>;
```

---

<Props />

---
