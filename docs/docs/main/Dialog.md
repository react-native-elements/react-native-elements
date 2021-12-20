---
id: dialog

title: Dialog

slug: /dialog
---

import Usage from './usage/Dialog/Dialog.md'

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

You can wrap any component with a simple Dialog component to display quick information to the user.

Also receives all [Overlay](https://reactnativeelements.com/docs/overlay#props) props except `fullscreen`.

## Components

- [Dialog.Actions](#dialogactions)
  Define Dialog Actions using this component.
- [Dialog.Button](#dialogbutton)
  This is used to add a button to the Dialog.
  Receives all [Button](button#props) props.
- [Dialog.Loading](#dialogloading)
  `DialogLoader` allows adding loader to the Dialog. Loader is simply ActivityIndicator.
- [Dialog.Title](#dialogtitle)
  `DialogTitle` allows you to add title to the Dialog.

## Usage

<Usage />

---

## Props

### Dialog

- [children](#children)
- [isVisible](#isvisible)
- [overlayStyle](#overlaystyle)

### Dialog.Actions

- [children](#children)

### Dialog.Button

None

### Dialog.Loading

- [loadingProps](#loadingprops)
- [loadingStyle](#loadingstyle)

### Dialog.Title

- [title](#title)
- [titleProps](#titleprops)
- [titleStyle](#titlestyle)

## Reference

### Dialog

#### children

Add Enclosed components.

| Type      | Default |
| --------- | ------- |
| ReactNode | None    |

---

#### isVisible

If true, the overlay is visible.

If true, the dialog is visible.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### overlayStyle

Style of the actual overlay.

Add additional styling to the internal Overlay component.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

### Dialog.Actions

#### children

Add Enclosed components as an action to the dialog.

| Type      | Default |
| --------- | ------- |
| ReactNode | None    |

---

### Dialog.Button

None

### Dialog.Loading

#### loadingProps

Add additional props for ActivityIndicator component

| Type                   | Default           |
| ---------------------- | ----------------- |
| ActivityIndicatorProps | { size: 'large' } |

---

#### loadingStyle

Add additional styling for loading component.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

### Dialog.Title

#### title

Add Dialog title.

| Type   | Default |
| ------ | ------- |
| string | None    |

---

#### titleProps

Add additional props for Text component.

| Type      | Default |
| --------- | ------- |
| TextProps | None    |

---

#### titleStyle

Add additional styling for title component.

| Type               | Default |
| ------------------ | ------- |
| Text Style(Object) | None    |

---
