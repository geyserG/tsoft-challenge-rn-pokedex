# ProgressBar

A progress bar composed of an accessible root, a visual track, and an indicator. The percentage is calculated by `ProgressBar` and shared internally with its subcomponents.

## Import

```tsx
import { ProgressBar } from './presentation/components';
```

## Anatomy

```tsx
<ProgressBar value={value} max={max}>
  <ProgressBar.Track>
    <ProgressBar.Indicator />
  </ProgressBar.Track>
</ProgressBar>
```

`ProgressBar.Track` and `ProgressBar.Indicator` must be used inside `ProgressBar`.

## Example

```tsx
<ProgressBar accessibilityLabel="Health points" value={pokemon.hp} max={255}>
  <ProgressBar.Track>
    <ProgressBar.Indicator style={{ backgroundColor: '#22C55E' }} />
  </ProgressBar.Track>
</ProgressBar>
```

Values below `0` or above `max` are automatically clamped to the valid range. If `max` is not positive, `100` is used.

## API

### `ProgressBar`

Extends the native `View` properties.

| Property             | Type     | Default  | Description                                      |
| -------------------- | -------- | -------- | ------------------------------------------------ |
| `value`              | `number` | Required | Current progress value.                          |
| `max`                | `number` | `100`    | Value that represents 100%.                      |
| `accessibilityLabel` | `string` | —        | Accessible description of the represented value. |

### `ProgressBar.Track`

Extends the native `View` properties. It represents the background and contains the indicator.

### `ProgressBar.Indicator`

Extends the native `View` properties. Its width is calculated automatically, while its other styles can be overridden.

## Accessibility

The root uses `accessibilityRole="progressbar"` and exposes `min`, `max`, and `now` through `accessibilityValue`.
