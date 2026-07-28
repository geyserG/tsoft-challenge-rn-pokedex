# Button

A reusable button built with the Compound Component pattern. It separates the interactive container, label, and decorative elements to support different compositions without duplicating behavior.

## Import

```tsx
import { Button } from './src/frameworks-drivers/ui/components';
```

## Anatomy

```tsx
<Button>
  <Button.Icon />
  <Button.Label>Button text</Button.Label>
</Button>
```

`Button.Label` and `Button.Icon` must be used inside `Button`.

## Basic example

```tsx
<Button onPress={() => console.log('Pressed')}>
  <Button.Label>View Pokémon</Button.Label>
</Button>
```

## Variants

The `variant` property accepts `filled`, `outline`, and `ghost`.

```tsx
<Button variant="outline" onPress={handlePress}>
  <Button.Label>Add to favorites</Button.Label>
</Button>
```

## Button with an icon

`Button.Icon` can contain any visual element. The `position` property controls the margin applied to the icon.

```tsx
<Button onPress={handlePress}>
  <Button.Icon position="left">
    <FavoriteIcon />
  </Button.Icon>
  <Button.Label>Favorite</Button.Label>
</Button>
```

## Loading state

When `loading` is `true`, the content is replaced by an activity indicator and the button is disabled.

```tsx
<Button loading={isLoading} onPress={handlePress}>
  <Button.Label>Save</Button.Label>
</Button>
```

## API

### `Button`

Extends the native `Pressable` properties, except for `children` and `style`.

| Property   | Type                               | Default    | Description                                               |
| ---------- | ---------------------------------- | ---------- | --------------------------------------------------------- |
| `children` | `ReactNode`                        | Required   | Button content.                                           |
| `variant`  | `'filled' \| 'outline' \| 'ghost'` | `'filled'` | Visual appearance.                                        |
| `loading`  | `boolean`                          | `false`    | Displays an indicator and disables interaction.           |
| `disabled` | `boolean`                          | `false`    | Disables the button.                                      |
| `style`    | `StyleProp<ViewStyle> \| callback` | —          | A static style or a style based on the `Pressable` state. |

### `Button.Label`

Accepts the same properties as `Text`. It uses the `label` typography variant and automatically adapts its color to the button variant.

### `Button.Icon`

Extends the native `View` properties.

| Property   | Type                | Default  | Description                          |
| ---------- | ------------------- | -------- | ------------------------------------ |
| `position` | `'left' \| 'right'` | `'left'` | Defines the spacing beside the icon. |

## Accessibility

`Button` sets `accessibilityRole="button"` and communicates the `disabled` and `busy` states. `Button.Label` should clearly describe the action being performed.
