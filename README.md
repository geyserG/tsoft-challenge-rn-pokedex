# Pokédex

A React Native Pokédex built with TypeScript, React 19, and the native PokéAPI.

## Demo

[Watch the application demo](./demo.mov).

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

The project uses layers inspired by Clean Architecture to separate React Native UI, presentation hooks, use cases, repositories, and remote access. Repository contracts remain in `domain`, while their concrete implementations and API-to-domain mapping live in `data`. Application dependencies are created in the composition root at `src/app/container/dependencies.ts` and supplied to the presentation layer through `DependenciesProvider`.

### SOLID principles

SOLID is used as design guidance rather than claimed as fully implemented or formally verified. The current assessment is:

- **Single Responsibility Principle — mostly applied.** Screens focus on rendering and navigation, hooks coordinate presentation state and requests, view-model functions prepare domain data for display, use cases represent application operations, mappers translate API responses, repositories coordinate data retrieval, and data sources handle API endpoints. Some modules still have more than one reason to change: hooks contain both React state orchestration and request-flow logic, while `FetchHttpClient` combines request execution, URL construction, timeout handling, response parsing, and HTTP error creation. These responsibilities are cohesive at the current size, but may need separation if their behavior grows.
- **Open/Closed Principle — partially applied.** `PokemonRepository`, `PokemonRemoteDataSource`, `HttpClient`, and the presentation use-case contracts provide extension points. A compatible HTTP client, repository, data source, or test double can be added without changing its direct consumer. The application is not completely closed to modification: adding new capabilities still requires composition changes and may require extending the existing repository or data-source interfaces.
- **Liskov Substitution Principle — supported by design, not yet verified.** TypeScript contracts define compatible method signatures, so `FetchHttpClient` and the real use cases can theoretically be replaced with conforming implementations. However, the project currently has no alternative production implementations or contract tests proving that replacements preserve expected behavior, error semantics, and return values. LSP should therefore not yet be considered demonstrated.
- **Interface Segregation Principle — partially applied.** `HttpClient` exposes only the `get` operation currently required, and presentation hooks receive small, operation-specific `GetPokemonListUseCase` and `GetPokemonByIdUseCase` contracts. In contrast, both domain use cases depend on the broader `PokemonRepository` interface, and `PokemonRemoteDataSource` groups list, detail, and species operations. These interfaces are still small, but consumers know about contracts containing methods they do not use directly.
- **Dependency Inversion Principle — largely applied.** Domain use cases depend on the `PokemonRepository` abstraction; `PokemonRepositoryImpl` depends on `PokemonRemoteDataSource`; and `PokemonRemoteDataSourceImpl` depends on `HttpClient`. Concrete objects are assembled in `src/app/container/dependencies.ts` and distributed through `DependenciesProvider`. Presentation hooks receive use-case abstractions instead of importing the global container. One remaining architectural limitation is that the use-case contracts consumed by the hooks live under `presentation`; moving those input contracts to the domain or application boundary would make their ownership and dependency direction clearer.

The design creates useful seams for isolated testing, but testability should not be confused with tested behavior. Fakes and stubs can be injected without real network requests; automated unit and contract tests are still pending.

Reusable UI components follow Atomic Design and are grouped into atoms and molecules under `src/presentation/components`. Components such as `Text`, `Button`, `Skeleton`, `ProgressBar`, and `CardItem` use TypeScript, Compound Components where appropriate, and individual style, type, and documentation files.

[React Navigation](https://reactnavigation.org/) with Native Stack provides typed routes, native transitions, headers, and platform gestures while keeping navigation outside business logic.

[React Compiler](https://react.dev/learn/react-compiler) is the default memoization strategy. Components remain pure without adding `React.memo`, `useMemo`, or `useCallback` preemptively. Redux and Zustand were not added because the current state is local, navigation-owned, or accessed through use cases and repositories; a global client store would add another source of truth without solving a current requirement.

[AsyncStorage](https://github.com/react-native-async-storage/async-storage) was selected over MMKV for future small, asynchronous, non-sensitive persisted values. The project does not currently require synchronous, high-frequency storage or MMKV's additional native integration. Offline data support is still pending.

## Completed work

1. Added Clean Architecture-inspired layers to separate business logic, data access, and presentation. Repository abstractions remain in the domain layer, concrete implementations live in the data layer, and presentation dependencies are injected through React context.
2. Built the home screen with a Pokémon list, Skeleton loading state, and infinite scrolling. PokéAPI results are requested and appended in pages of 20 Pokémon.
3. Built the Pokémon details screen with general information, description, statistics, progress bars, and a Skeleton loading state.

## Pending work

1. Implement offline data storage, caching, and synchronization behavior.
2. Complete the empty-state screens for both the home list and Pokémon details.
3. Add automated tests, including unit tests for use cases and mappers, contract tests for repository and data-source implementations, and integration or component tests for the main user flows.

## Image-loading trade-off

The Pokémon list endpoint returns names and detail URLs but not the artwork needed by the home cards. Requesting the documented detail endpoint for every item would add up to 20 extra requests per page, making a simple list unnecessarily expensive and slower to display.

For that reason, list artwork URLs are constructed directly from the Pokémon ID using the public sprite endpoint. This reduces each page to one list request while preserving detail endpoint requests for the details screen, where the additional data is actually required. The trade-off is that the presentation mapping depends on the sprite URL convention and must be updated if that external path changes.
