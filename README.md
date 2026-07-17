# Pokédex

A React Native application built with TypeScript.

## Navigation

This project uses [React Navigation](https://reactnavigation.org/docs/getting-started/) with the [Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator/).

### Why React Navigation

The Pokédex requires predictable transitions between screens such as the Pokémon list and Pokémon details. React Navigation centralizes this routing behavior instead of coupling navigation state to individual screens.

Native Stack is used because it delegates transitions and gestures to `UINavigationController` on iOS and native fragments on Android. This provides platform-consistent behavior and better performance than a JavaScript-only stack.

It also provides a scalable foundation for:

- Type-safe route names and parameters with TypeScript.
- Native headers, transitions, gestures, and back navigation.
- Deep linking and nested navigators as the application grows.
- A clear separation between screen composition and navigation state.

### Installed packages

| Package                          | Purpose                                                       |
| -------------------------------- | ------------------------------------------------------------- |
| `@react-navigation/native`       | Provides the navigation container and core routing behavior.  |
| `@react-navigation/native-stack` | Provides a stack navigator backed by native platform APIs.    |
| `react-native-screens`           | Exposes the native screen primitives used by Native Stack.    |
| `react-native-safe-area-context` | Keeps navigation UI and screen content outside system insets. |

### Installation

Install the navigation core, Native Stack, and their native dependencies:

```sh
yarn add @react-navigation/native @react-navigation/native-stack
yarn add react-native-screens react-native-safe-area-context
```

Install the iOS native dependencies after adding or updating these packages:

```sh
cd ios
bundle exec pod install
cd ..
```

Rebuild the native application after installation:

```sh
yarn ios
# or
yarn android
```

### Android configuration

`react-native-screens` requires its fragment factory to be configured before the activity restores its state. This project already includes the following setup in `android/app/src/main/java/com/pokedex/MainActivity.kt`:

```kt
import android.os.Bundle
import com.swmansion.rnscreens.fragment.restoration.RNScreensFragmentFactory

override fun onCreate(savedInstanceState: Bundle?) {
  supportFragmentManager.fragmentFactory = RNScreensFragmentFactory()
  super.onCreate(savedInstanceState)
}
```

React Navigation does not currently support Android's predictive back gesture. The project therefore sets the following property on the application in `android/app/src/main/AndroidManifest.xml`:

```xml
<application android:enableOnBackInvokedCallback="false">
```

### Minimal setup

Wrap the root navigator with `NavigationContainer` and define the available screens with a typed native stack:

```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  PokemonList: undefined;
  PokemonDetails: { pokemonId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen name="PokemonList" component={PokemonListScreen} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

The route parameter list ensures that screen names and navigation parameters are checked at compile time. For example, navigating to `PokemonDetails` requires a numeric `pokemonId`.

## Local storage

This project uses [AsyncStorage](https://github.com/react-native-async-storage/async-storage) for persistent, non-sensitive key-value data.

### Why AsyncStorage

The current storage requirements are limited to favorites, user preferences, synchronization metadata, and a small API cache. These values are read and written occasionally and do not require synchronous access or high-frequency updates. AsyncStorage provides a simple asynchronous API that keeps storage operations away from the rendering path and is sufficient for these use cases.

Storage access should remain behind an application-level abstraction. This prevents screens and business rules from depending directly on a specific storage library and allows AsyncStorage to be replaced with SQLite or another implementation if the offline data model becomes more complex.

AsyncStorage is not encrypted. Authentication tokens, passwords, and other secrets must be stored with a Keychain or Keystore-based solution instead.

### Why not MMKV

[MMKV](https://github.com/mrousavy/react-native-mmkv) provides very fast synchronous access through native C++ bindings. That performance is useful when an application performs frequent key-value reads, needs values synchronously during startup, or persists a highly active client-side store.

Those requirements do not currently apply to this project. MMKV v4 would also add `react-native-nitro-modules` and additional native integration without improving the user experience for the small and infrequent values stored by the Pokédex.

| Consideration              | AsyncStorage                                             | MMKV                                     |
| -------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| Access model               | Asynchronous                                             | Synchronous                              |
| Current project needs      | Sufficient for favorites, preferences, and a small cache | More performance than currently required |
| Native dependencies        | One package                                              | MMKV and Nitro Modules                   |
| Querying and relationships | Not supported                                            | Not supported                            |
| Selected for this project  | Yes                                                      | No                                       |

Neither option is a relational database. If the application later stores the complete Pokédex offline and requires indexed searches, filters, relationships, or transactional updates, the storage layer should migrate to SQLite rather than placing the entire dataset in a key-value store.

### Installation

Install the package with Yarn:

```sh
yarn add @react-native-async-storage/async-storage
```

Install the native iOS dependency after adding or updating the package:

```sh
cd ios
bundle exec pod install
cd ..
```

Rebuild the application after installing a native dependency:

```sh
yarn ios
# or
yarn android
```

### Basic usage

AsyncStorage stores strings, so structured values must be serialized when written and parsed when read:

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@pokedex:favorites';

export async function saveFavorites(ids: number[]): Promise<void> {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

export async function getFavorites(): Promise<number[]> {
  const value = await AsyncStorage.getItem(FAVORITES_KEY);

  return value ? JSON.parse(value) : [];
}
```
