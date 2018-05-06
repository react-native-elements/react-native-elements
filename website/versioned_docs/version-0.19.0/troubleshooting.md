---
id: version-0.19.0-troubleshooting
title: Troubleshooting
original_id: troubleshooting
---

Although we try to make the experience of using React Native Elements
hassle-free, time to time you may encounter some problems along the way.

On this page you can find solutions to commonly encountered issues.

## |> Invariant Violation: Element type is invalid

This error occurs when trying to import a component that doesn't exist. This
usually happens for a few reasons:

### You incorrectly spelt a component

Spelling a component incorrectly though very simple, happens occasionally.

```
// Incorrect
import { Listitem } from 'react-native-elements'

// Correct
import { ListItem } from 'react-native-elements'
```

### Importing a component from the wrong version

This error occurs when you're trying to use a component from the wrong version.
At RNE they're some components that are only available in some versions.

```md
Example:

`<FormInput />` is only available in v0.19.1 and below. `<Input />` is only
available in `v1.0.0-beta1` and higher.
```

To fix this, follow these steps:

1. Check your `package.json` for the version of `react-native-elements` you are
   using.
2. View the documentation for your particular version on the website. See
   available versions
   [here](https://react-native-training.github.io/react-native-elements/versions.html)
   or click the version number next to the logo in the header.
3. Checking the list of components on the left side bar, make sure you're using
   the right component.

## |> "fontFamily <font-name> is not a system font

This is a general error in react native, where you in your code, or a package
you are using, is trying to use a font that is not bundled with the platform or
is not added to the project.

If you aren't using an custom fonts in your application, then it's likely that
the error comes from React Native Elements looking for
`react-native-vector-icons`.

To solve this, be sure to follow the
[Getting Starting instructions](getting_started.md#installation) for using React
Native Elements.
