# Skeleton

A visual placeholder used to represent content while it is loading. It uses the Compound Component pattern to group multiple elements under a single accessible region.

## Import

```tsx
import { Skeleton } from './src/frameworks-drivers/ui/components';
```

## Anatomy

```tsx
<Skeleton>
  <Skeleton.Item />
  <Skeleton.Item />
</Skeleton>
```

## Card example

```tsx
<Skeleton accessibilityLabel="Loading Pokémon" style={{ gap: 12, padding: 16 }}>
  <Skeleton.Item height={160} borderRadius={16} />
  <Skeleton.Item width="60%" height={24} />
  <Skeleton.Item width="90%" height={16} />
</Skeleton>
```

## Item without animation

```tsx
<Skeleton.Item animated={false} width={120} height={20} />
```

## API

### `Skeleton`

Extends the native `View` properties.

| Property             | Type     | Default     | Description                              |
| -------------------- | -------- | ----------- | ---------------------------------------- |
| `accessibilityLabel` | `string` | `'Loading'` | Description of the content being loaded. |

### `Skeleton.Item`

Extends the `Animated.View` properties.

| Property       | Type                  | Default  | Description                |
| -------------- | --------------------- | -------- | -------------------------- |
| `animated`     | `boolean`             | `true`   | Enables the opacity pulse. |
| `width`        | `DimensionValue`      | `'100%'` | Placeholder width.         |
| `height`       | `DimensionValue`      | `16`     | Placeholder height.        |
| `borderRadius` | `number`              | `8`      | Corner radius.             |
| `style`        | `Animated.View` style | —        | Customizes the item.       |

## Accessibility

`Skeleton` uses `accessibilityRole="progressbar"`. Provide a specific label that identifies the content being loaded.
