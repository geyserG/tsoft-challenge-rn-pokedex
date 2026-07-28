# Pokédex

A mobile application built with React Native and TypeScript that consumes [PokéAPI](https://pokeapi.co/).

## Features

- Paginated Pokémon list with infinite scrolling.
- Skeleton loading states.
- Details, description, and statistics for each Pokémon.
- Native navigation between the list and details screens.

## Demo

[Watch the application demo](./demo.mov).

## Running the project

Requirements:

- Node.js 22.11 or later.
- Yarn 1.22.
- A React Native environment configured for iOS or Android.

Install the dependencies:

```sh
yarn install
cd ios && bundle exec pod install && cd ..
```

Start the application:

```sh
yarn ios
# or
yarn android
```

## Architecture

The code is organized according to the four Clean Architecture layers:

```text
frameworks-drivers
        ↓
interface-adapters
        ↓
use-cases
        ↓
entities
```

| Directory                | Responsibility                                              |
| ------------------------ | ----------------------------------------------------------- |
| `src/entities`           | Core business entities and data structures.                 |
| `src/use-cases`          | Application operations and their contracts.                 |
| `src/interface-adapters` | Ports, repositories, data sources, API models, and mappers. |
| `src/frameworks-drivers` | React Native UI and the concrete HTTP client.               |
| `src/main`               | Dependency construction and injection.                      |

Code dependencies point toward the inner layers. For example, use cases depend on `PokemonRepository`, not on its concrete implementation.

The request flow is:

```text
Screen → Hook → Use case → Repository → Data source → HTTP → PokéAPI
```

The UI uses Atomic Design to organize components into atoms and molecules. The reusable `Button`, `Text`, `ProgressBar`, `Skeleton`, and `CardItem` components follow the Compound Components pattern, exposing related subcomponents through a declarative API while keeping shared state and behavior internal.

## SOLID principles

Only cases directly visible in the code are considered applied:

- **Single Responsibility Principle (SRP):** `GetPokemonList` and `GetPokemonById` each represent one operation. Mappers only transform API models into entities, `PokemonDataSourceImpl` defines PokéAPI requests, and `PokemonRepositoryImpl` coordinates data retrieval and transformation.
- **Open/Closed Principle (OCP):** consumers receive contracts such as `PokemonRepository`, `PokemonDataSource`, and `HttpClient`. Another implementation can be added and selected in `src/main/dependencies.ts` without modifying its consumer.
- **Interface Segregation Principle (ISP):** each use-case contract exposes only its own operation, and `HttpClient` contains only the `get` method required by the application.
- **Dependency Inversion Principle (DIP):** use cases depend on `PokemonRepository`, the concrete repository depends on `PokemonDataSource`, and `PokemonDataSourceImpl` depends on `HttpClient`. Implementations are connected only in `src/main/dependencies.ts`.

The project does not claim complete SOLID compliance. In particular, Liskov Substitution has not been demonstrated because there is currently only one implementation per contract and no contract tests validating substitutions. In addition, each use case depends on `PokemonRepository`, which contains both list and detail operations, so interface segregation can still be improved.

## Commands

```sh
yarn lint          # Analyze the code
yarn format:check  # Check formatting
yarn typecheck     # Check types
yarn test          # Run tests
yarn validate      # Run all validations
```

Husky runs `yarn lint` before every commit.

## Pending work

- Add local storage and offline support.
- Complete the empty states.
- Expand unit, integration, and contract tests.

## Image-loading decision

The list endpoint does not include artwork. To avoid an additional request for every Pokémon, the application builds the sprite URL from its ID. This means each page requires only one list request.
