# Pokédex

Aplicación móvil desarrollada con React Native y TypeScript que consume
[PokéAPI](https://pokeapi.co/).

## Funcionalidades

- Lista paginada de Pokémon con desplazamiento infinito.
- Estados de carga mediante esqueletos.
- Detalles, descripción y estadísticas de cada Pokémon.
- Navegación nativa entre las pantallas de lista y detalle.

## Demostración

[Ver la demostración de la aplicación](./demo.mov).

## Ejecutar el proyecto

Requisitos:

- Node.js 22.13 o posterior.
- Yarn 1.22.
- Un entorno de React Native configurado para iOS o Android.

Instala las dependencias:

```sh
yarn install
cd ios && bundle exec pod install && cd ..
```

Inicia la aplicación:

```sh
yarn ios
# o
yarn android
```

## Arquitectura

El código combina una organización por funcionalidad con los principios de
Clean Architecture. La funcionalidad de Pokémon contiene sus propias capas:

```text
src/
├── app/
│   ├── navigation/       # Navegación principal
│   └── providers/        # Inyección de dependencias mediante React Context
├── features/
│   └── pokemon/
│       ├── domain/       # Entidades, contratos y casos de uso
│       ├── infrastructure/ # Acceso a datos, DTO, mappers y repositorios
│       ├── presentation/ # Hooks y pantallas
│       └── di/           # Construcción de las dependencias de la funcionalidad
└── shared/
    ├── components/       # Componentes reutilizables
    └── http/             # Contrato y cliente HTTP compartidos
```

| Directorio                                         | Responsabilidad                                         |
| -------------------------------------------------- | ------------------------------------------------------- |
| `src/features/pokemon/domain/entities`             | Modelos de negocio utilizados por la aplicación.        |
| `src/features/pokemon/domain/repositories`         | Contratos para acceder a la información de Pokémon.     |
| `src/features/pokemon/domain/use-cases`            | Operaciones disponibles para obtener listas y detalles. |
| `src/features/pokemon/infrastructure/datasources`  | Peticiones concretas a PokéAPI.                         |
| `src/features/pokemon/infrastructure/dtos`         | Estructuras que representan las respuestas de la API.   |
| `src/features/pokemon/infrastructure/mappers`      | Conversión de los DTO a entidades del dominio.          |
| `src/features/pokemon/infrastructure/repositories` | Implementación de los repositorios del dominio.         |
| `src/features/pokemon/presentation`                | Hooks y pantallas de React Native.                      |
| `src/features/pokemon/di`                          | Creación y conexión de las dependencias de Pokémon.     |
| `src/app`                                          | Navegación y proveedores generales de la aplicación.    |
| `src/shared`                                       | Componentes e infraestructura reutilizables.            |

Las dependencias apuntan hacia el dominio. Por ejemplo, los casos de uso
conocen el contrato `PokemonRepository`, pero no su implementación concreta.
La infraestructura implementa ese contrato y convierte las respuestas
externas en entidades antes de entregarlas al dominio.

El flujo principal de una solicitud es:

```text
Pantalla → Hook → Caso de uso → Repositorio → Fuente de datos → Cliente HTTP → PokéAPI
```

Las implementaciones concretas se conectan en
`src/features/pokemon/di/pokemonContainer.ts`. Después se proporcionan a la
interfaz mediante `DependenciesProvider`, evitando que las pantallas creen o
conozcan directamente los servicios de infraestructura.

La interfaz utiliza Atomic Design para organizar los componentes compartidos
en átomos y moléculas. `Button`, `Text`, `ProgressBar`, `Skeleton` y `CardItem`
siguen el patrón Compound Components: exponen subcomponentes relacionados
mediante una API declarativa y mantienen internamente el estado o
comportamiento compartido.

## Principios SOLID

Solo se consideran aplicados los principios que pueden observarse directamente
en el código:

- **Responsabilidad única (SRP):** `GetPokemonList` y `GetPokemonById`
  representan una sola operación cada uno. Los mappers convierten datos,
  `PokemonDataSourceImpl` realiza las peticiones a PokéAPI y
  `PokemonRepositoryImpl` coordina la obtención y transformación de los datos.
- **Abierto/cerrado (OCP):** los consumidores dependen de contratos como
  `PokemonRepository`, `PokemonDataSource` y `HttpClient`. Es posible añadir
  otras implementaciones y seleccionarlas en `pokemonContainer.ts` sin
  modificar los casos de uso.
- **Segregación de interfaces (ISP):** cada contrato de caso de uso expone
  únicamente su propia operación y `HttpClient` contiene solo el método `get`
  que necesita la aplicación.
- **Inversión de dependencias (DIP):** los casos de uso dependen de
  `PokemonRepository`, el repositorio concreto depende de `PokemonDataSource`
  y la fuente de datos concreta depende de `HttpClient`.

El proyecto no afirma cumplir SOLID por completo. La sustitución de Liskov no
se ha demostrado porque actualmente existe una sola implementación por
contrato y no hay pruebas de contrato que validen posibles sustituciones.
Además, `PokemonRepository` reúne las operaciones de lista y detalle, por lo
que la segregación de interfaces todavía puede mejorar.

## Comandos

```sh
yarn lint          # Analiza el código
yarn lint:fix      # Corrige automáticamente los problemas compatibles
yarn format        # Aplica el formato
yarn format:check  # Comprueba el formato
yarn typecheck     # Comprueba los tipos
yarn test          # Ejecuta las pruebas
yarn validate      # Ejecuta todas las validaciones
```

Husky ejecuta `yarn lint` antes de cada commit.

## Trabajo pendiente

- Añadir almacenamiento local y funcionamiento sin conexión.
- Completar los estados vacíos.
- Ampliar las pruebas unitarias, de integración y de contrato.

## Decisión sobre la carga de imágenes

El endpoint de la lista no incluye las ilustraciones. Para evitar una petición
adicional por cada Pokémon, la aplicación construye la URL del sprite a partir
de su identificador. De esta forma, cada página necesita una sola petición para
obtener la lista.
