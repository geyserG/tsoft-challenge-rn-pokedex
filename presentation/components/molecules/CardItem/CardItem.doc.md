# CardItem

A horizontal card that displays only a label on the left and an image on the right. It preserves the Compound Component pattern through `CardItem.Label` and `CardItem.Image`.

## Import

```tsx
import { CardItem } from './presentation/components';
```

## Anatomy

```tsx
<CardItem>
  <CardItem.Label>Label</CardItem.Label>
  <CardItem.Image source={imageSource} />
</CardItem>
```

The card requires exactly two elements: one `CardItem.Label` and one `CardItem.Image`. The layout always places the label on the left and the image on the right.

## Basic example

```tsx
<CardItem>
  <CardItem.Label>Pikachu</CardItem.Label>
  <CardItem.Image
    accessibilityLabel="Image of Pikachu"
    source={{ uri: pokemon.image }}
  />
</CardItem>
```

## Pressable card

When `onPress` is provided, the card is rendered inside a `Pressable`, receives the accessible `button` role, and displays a shadow to communicate that it is interactive.

```tsx
<CardItem onPress={() => openPokemon(pokemon.id)}>
  <CardItem.Label>{pokemon.name}</CardItem.Label>
  <CardItem.Image
    accessibilityLabel={`Image of ${pokemon.name}`}
    source={{ uri: pokemon.image }}
  />
</CardItem>
```

The shadow is only applied when `onPress` is present. When pressed, the card slightly reduces its opacity and scale.

## Background color

The `backgroundColor` property accepts any valid React Native color.

```tsx
<CardItem backgroundColor="#FEF3C7" onPress={handlePress}>
  <CardItem.Label>Electric Pokémon</CardItem.Label>
  <CardItem.Image source={electricPokemonImage} />
</CardItem>
```

## API

### `CardItem`

Extends the native `View` properties.

| Property          | Type                           | Default     | Description                                                                                                                |
| ----------------- | ------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| `children`        | Two-element tuple              | Required    | One `CardItem.Label` and one `CardItem.Image`.                                                                             |
| `backgroundColor` | `ViewStyle['backgroundColor']` | `'#FFFFFF'` | Card background color.                                                                                                     |
| `onPress`         | `PressableProps['onPress']`    | —           | Enables interaction and the shadow.                                                                                        |
| `pressableProps`  | `Pressable` properties         | —           | Configures the accessibility and behavior of the interactive container. Does not accept `children`, `onPress`, or `style`. |
| `style`           | `StyleProp<ViewStyle>`         | —           | Customizes the card's visual container.                                                                                    |

### `CardItem.Label`

Accepts the `Text` properties, requires content, and uses the `title` variant. It occupies the available space on the left and displays up to two lines by default.

```tsx
<CardItem.Label numberOfLines={1} color="#92400E">
  Charmander
</CardItem.Label>
```

### `CardItem.Image`

Extends the native `Image` properties. It has a default size of `70 × 70` and uses `resizeMode="contain"`.

```tsx
<CardItem.Image
  accessibilityLabel="Image of Charmander"
  source={{ uri: imageUrl }}
  style={{ height: 80, width: 80 }}
/>
```

`CardItem.Label` and `CardItem.Image` must be used inside `CardItem`.
