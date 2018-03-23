---
id: version-0.19.0-testing
title: Testing
original_id: testing
---

We are using tests to make sure components keep their functionality between versions and edits.
They're many testing libraries for JavaScript and React Native, depending on what type of testing you're doing.

The type of tests we use on React Native Elements are [Snapshot](#snapshot-testing)
and [Functional](#functional-testing) tests.

## Snapshot Testing

Snapshot testing sounds exactly like what it does! It takes snapshot of the structure of a rendered
component the props, and their values and saves it. Whenever a change is made it'll compare it to the original snapshot -
just to be super sure the change you wanted to make had the desired outcome.
If the outcomes is what you expected, then you need to **update the snapshot**, so that your changes will be the new
standard to compare to for changes in the future.

To update the snapshots run this command:

```bash
# yarn
yarn test -u

# npm
npm run test -u
```

For Snapshot Testing, we use [Jest](https://facebook.github.io/jest/).

You can read more about snapshot testing [here](https://facebook.github.io/jest/docs/en/snapshot-testing.html).

## Functional Testing

Functional tests ensures that a component functions the way it should(_simplified_). This is important
for making changes to components, as it makes sure we don't break how something worked previously.

For example:

```md
If a user touches on a button in the button group, then the button selected should be highlighted
and the previous one un-highlighted.
```

For Functional Testing, we use [Enzyme](http://airbnb.io/enzyme/).

You can read more about functional testing [here](https://www.guru99.com/functional-testing.html).
