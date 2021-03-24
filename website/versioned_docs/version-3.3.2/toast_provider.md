---
id: toast_provider
title: ToastProvider
---

import Props from './props/toast_provider.md'

The toast component is a non-disruptive message that appears
at the bottom/top of the screen to provide quick, at-a-glance
feedback on the outcome of an action.

There're some pre-defined typed of toast messages:

<div class="component-preview component-preview--grid">
  <figure>
    <img src="/img/toast/toast--info.png" alt="info" />
    <figcaption>Info (Default)</figcaption>
  </figure>
  <figure>
    <img src="/img/toast/toast--error.png" alt="error" />
    <figcaption>Error</figcaption>
  </figure>
  <figure>
    <img src="/img/avatar/toast--warning.jpg" alt="warning" />
    <figcaption>Warning</figcaption>
  </figure>
  <figure>
    <img src="/img/avatar/toast--success.jpg" alt="success" />
    <figcaption>Success</figcaption>
  </figure>
</div>

## Usage

#### Common usage

1. Wrap components in which you want to use **_toast_** in **_ToastProvider_** component.
   The better way will be to add this wrapper in your main **App.js** or **index.js** file:

App.js

```js
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-elements';

const App = () => {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <TheRestOfMyApplicationHere />
      </ToastProvider>
    </SafeAreaProvider>
  );
};
```

_Useful tip_: use **_ToastProvider_** inside of **_SafeAreaProvider_** for better experience.
The top/bottom position of toast component will be automatically configured based on SafeAreaView component.

2. Import **_useToast_** hook from the library and define toast instance or right after destructure **_showMessage_** function:

componentWhereIWantToUseToast.js

```js
import React from 'react';
import { Button } from 'react-native';
import { useToast } from 'react-native-elements';

const ComponentWhereIWantToUseToast = () => {
  const { showMesssage } = useToast();
  // or
  // const toast = useToast();
  // const {showMessage} = toast;

  return (
    <Button
      title="Press me to show message!"
      onPress={() => showMessage("Congratulations! I'm here!")}
    />
  );
};
```

And that's all! The configuration above is enough for common usage of component.

#### useToast() and showMessage()

The hook **_useToast()_** returns return object with only one key - **_showMessage()_** function.

```js
const { showMessage } = useToast();
```

You could see similar code above.

**_showMessage_** function takes 2 parameters:

- text of the message type of _String_
- type of toast one of _"info" | "error" | "warning" | "success"_ (type _info_ is default type)

```js
showMessage('Ooops, something went wrong!', 'error');
showMessage("I'm just info text"); // type 'info'
showMessage("I'm info text too", 'any-non-existent-type'); // type 'info'
```

#### Configure ToastProvider

You can pass the props to **_ToastProvider_** component directly for certain provider:

```js
<ToastProvider
  duration={10000}
  containerToastStyle={{
    borderRadius: 0,
  }}
  containerMessageStyle={{
    padding: 5,
  }}
>
  <TheRestOfMyApp />
</ToastProvider>
```

## Usage with ThemeProvider

#### How theme colors tied with toast messages

By default, background color of toast message pre-configured by colors from **_theme_** in **_ThemeProvider_** and therefore depend on colors from theme.

So changing the colors in theme, you'll changing the background colors of toast message:

```js
<ThemeProvider
  theme={{
    colors: {
      primary: 'black', // primary === info type
      error: 'red', // error === error type
      warning: 'yellow', // warning === warning type
      success: 'success', // success === success type
    },
  }}
>
  <ToastProvider>
    <TheRestOfMyApplication />
  </ToastProvider>
</ThemeProvider>
```

#### Advanced stylization

There's one more way to customize the view of your toast - **_via props!_**

As in the rest of the library's components you're able to provide props in theme variable for **_GLOBAL configuration:_**

```js
<ThemeProvider
  theme={{
    ToastProvider: {
      // here're the same props as for separate ToastProvider
      duration: 1000,
      containerToastStyle: {
        borderRadius: 0,
      },
      containerMessageStyle: {
        padding: 5,
      },
      textMessageStyle: {
        fontSize: 20,
        color: '#ccc',
      },
    },
  }}
>
  <ToastProvider>
    <TheRestOfMyApplication />
  </ToastProvider>
</ThemeProvider>
```

Also _containerMessageStyle_ and _textMessageStyle_ are extended with keys-types of toast messages.
So you have an ability to style particular type of message if you need:

```js
<ThemeProvider
  theme={{
    ToastProvider: {
      // here're the same props as for separate ToastProvider
      duration: 1000,
      containerMessageStyle: {
        padding: 5, // apply for all types
        info: {
          // apply only for info type message
          padding: 10,
          backgroundColor: '#ccc',
        },
        error: {
          // apply only for error type message nad misinformate you ;)
          padding: 0,
          backgroundColor: 'green',
        },
      },
      textMessageStyle: {
        fontSize: 20,
        color: '#ccc',
      },
    },
  }}
>
  <ToastProvider>
    <TheRestOfMyApplication />
  </ToastProvider>
</ThemeProvider>
```

---

<Props />

---
