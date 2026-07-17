# Text

A typography component based on the Compound Component pattern. It centralizes text variants and allows individual fragments to be emphasized without losing the native React Native properties.

## Import

```tsx
import { Text } from './presentation/components';
```

## Anatomy

```tsx
<Text>
  Normal text <Text.Emphasis>emphasized text</Text.Emphasis>
</Text>
```

## Examples

```tsx
<Text variant="title">Pokédex</Text>

<Text variant="body" color="#6B7280">
  Explore all available Pokémon.
</Text>

<Text>
  Type: <Text.Emphasis>Electric</Text.Emphasis>
</Text>
```

## Variants

| Variant     | Size | Default weight | Line height |
| ----------- | ---- | -------------- | ----------- |
| `body`      | 16   | Normal         | 24          |
| `caption`   | 12   | Normal         | 16          |
| `label`     | 14   | 600            | 20          |
| `subtitle`  | 18   | 600            | 24          |
| `title`     | 24   | 700            | 32          |
| `titlepage` | 48   | 800            | 44          |

## API

### `Text`

Extends the native `Text` component properties.

| Property  | Type                                                                     | Default              | Description                      |
| --------- | ------------------------------------------------------------------------ | -------------------- | -------------------------------- |
| `variant` | `'body' \| 'caption' \| 'label' \| 'subtitle' \| 'title' \| 'titlepage'` | `'body'`             | Typography style.                |
| `color`   | `TextStyle['color']`                                                     | `'#1F2937'`          | Text color.                      |
| `weight`  | `TextStyle['fontWeight']`                                                | Based on the variant | Overrides the font weight.       |
| `style`   | `StyleProp<TextStyle>`                                                   | —                    | Overrides or extends the styles. |

### `Text.Emphasis`

Accepts the same properties as `Text` and uses `fontWeight: '700'` by default.

```tsx
<Text.Emphasis color="#DC2626" weight="800">
  Legendary
</Text.Emphasis>
```

Styles passed through `style` take precedence over the default values.
