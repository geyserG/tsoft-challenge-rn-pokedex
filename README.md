# Pokédex

A React Native Pokédex built with TypeScript, React 19, and the native PokéAPI.

## Getting started

Requirements:

- Node.js 22.11 or later
- Yarn 1.22
- The native React Native environment for iOS or Android

Install dependencies and iOS pods:

```sh
yarn install
cd ios && bundle exec pod install && cd ..
```

Run the application:

```sh
yarn ios
# or
yarn android
```

Useful commands:

```sh
yarn lint
yarn format:check
yarn typecheck
yarn test
yarn validate
```

Husky runs `yarn lint` before every commit. A commit is rejected when linting fails.

## Architecture and technical decisions

The project follows Clean Architecture to keep business rules independent from React Native and the UI. API models and data sources belong to the data layer, repositories and use cases expose domain operations, and hooks adapt those operations for presentation.

Reusable UI components follow Atomic Design and are grouped into atoms and molecules under `src/presentation/components`. Components such as `Text`, `Button`, `Skeleton`, `ProgressBar`, and `CardItem` use TypeScript, Compound Components where appropriate, and individual style, type, and documentation files.

[React Navigation](https://reactnavigation.org/) with Native Stack provides typed routes, native transitions, headers, and platform gestures while keeping navigation outside business logic.

[React Compiler](https://react.dev/learn/react-compiler) is the default memoization strategy. Components remain pure without adding `React.memo`, `useMemo`, or `useCallback` preemptively. Redux and Zustand were not added because the current state is local, navigation-owned, or accessed through use cases and repositories; a global client store would add another source of truth without solving a current requirement.

[AsyncStorage](https://github.com/react-native-async-storage/async-storage) was selected over MMKV for future small, asynchronous, non-sensitive persisted values. The project does not currently require synchronous, high-frequency storage or MMKV's additional native integration. Offline data support is still pending.

## Completed work

1. Applied Clean Architecture to separate business logic, data access, and presentation.
2. Built the home screen with a Pokémon list, Skeleton loading state, and infinite scrolling. PokéAPI results are requested and appended in pages of 20 Pokémon.
3. Built the Pokémon details screen with general information, description, statistics, progress bars, and a Skeleton loading state.

## Pending work

1. Implement offline data storage, caching, and synchronization behavior.
2. Complete the empty-state screens for both the home list and Pokémon details.

## Image-loading trade-off

The Pokémon list endpoint returns names and detail URLs but not the artwork needed by the home cards. Requesting the documented detail endpoint for every item would add up to 20 extra requests per page, making a simple list unnecessarily expensive and slower to display.

For that reason, list artwork URLs are constructed directly from the Pokémon ID using the public sprite endpoint. This reduces each page to one list request while preserving detail endpoint requests for the details screen, where the additional data is actually required. The trade-off is that the presentation mapping depends on the sprite URL convention and must be updated if that external path changes.
