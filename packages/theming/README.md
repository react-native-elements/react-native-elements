# @rneui/theming

Your components with our theme provider

## Installation

```bash
npm install @rneui/theming
```

```bash
yarn add @rneui/theming
```

## Usage

```tsx
const theme = createTheme({
  darkColors: {
    text: {
      main: '#fff',
    },
  },
  lightColors: {
    text: {
      main: '#000',
    },
  },
  spacing: {
    sm: 10,
    md: 20,
    lg: 30,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Button title="Hello" />
  </ThemeProvider>
);
```

## Using Typescript

```ts
declare module '@rneui/theming' {
  export interface ComponentTheme {
    Button: ButtonProps;
  }
  export interface Colors {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    error: {
      main: string;
    };
    text?: {
      main: string;
    };
  }
  export interface Theme {
    spacing?: {
      sm: number;
      md: number;
      lg: number;
    };
    breakpoints?: {
      sm: number;
      md: number;
      lg: number;
    };
  }
}
```
