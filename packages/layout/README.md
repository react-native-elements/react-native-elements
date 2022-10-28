# @rneui/layout

> This Component is experimental and may change, **do not use** in production until stable release

## Installation

```bash
npm i @rneui/layout
```

```bash
yarn add @rneui/layout
```

## Stack

### Stack Usage

```tsx
<Stack row>
  <Button>Hey</Button>
  <Button>Hello</Button>
</Stack>
```

### Stack Props

| Name      | Type                                                                                          | Default      | Description |
| --------- | --------------------------------------------------------------------------------------------- | ------------ | ----------- |
| `align`   | FlexAlignType                                                                                 | `flex-start` |             |
| `justify` | `center` or `flex-start` or `flex-end` or `space-between` or `space-around` or `space-evenly` | `flex-start` |             |
| `reverse` | boolean                                                                                       | `false`      |             |
| `row`     | boolean                                                                                       | `false`      |             |
| `spacing` | number                                                                                        | `0`          |             |

## Box

### Box Usage

```tsx live
<Box m={3}>
  <Button>Hey</Button>
</Box>
```

### Box Props

| Name                | Type                 | Default | Description |
| ------------------- | -------------------- | ------- | ----------- |
| `m`                 | `string` or `number` |         |             |
| `margin`            | `string` or `number` |         |             |
| `marginBottom`      | `string` or `number` |         |             |
| `marginHorizontal`  | `string` or `number` |         |             |
| `marginLeft`        | `string` or `number` |         |             |
| `marginRight`       | `string` or `number` |         |             |
| `marginTop`         | `string` or `number` |         |             |
| `marginVertical`    | `string` or `number` |         |             |
| `mb`                | `string` or `number` |         |             |
| `ml`                | `string` or `number` |         |             |
| `mr`                | `string` or `number` |         |             |
| `mt`                | `string` or `number` |         |             |
| `mx`                | `string` or `number` |         |             |
| `my`                | `string` or `number` |         |             |
| `p`                 | `string` or `number` |         |             |
| `padding`           | `string` or `number` |         |             |
| `paddingBottom`     | `string` or `number` |         |             |
| `paddingHorizontal` | `string` or `number` |         |             |
| `paddingLeft`       | `string` or `number` |         |             |
| `paddingRight`      | `string` or `number` |         |             |
| `paddingTop`        | `string` or `number` |         |             |
| `paddingVertical`   | `string` or `number` |         |             |
| `pb`                | `string` or `number` |         |             |
| `pl`                | `string` or `number` |         |             |
| `pr`                | `string` or `number` |         |             |
| `pt`                | `string` or `number` |         |             |
| `px`                | `string` or `number` |         |             |
| `py`                | `string` or `number` |         |             |

## Contribution

Made by [Arpit Bhalla](https://github.com/arpitbhalla)
