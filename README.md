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
