# Pokédex

Aplicación móvil desarrollada con React Native y TypeScript que consume [PokéAPI](https://pokeapi.co/).

## Funcionalidades

- Lista paginada de Pokémon con scroll infinito.
- Pantallas de carga con skeletons.
- Detalle, descripción y estadísticas de cada Pokémon.
- Navegación nativa entre la lista y el detalle.

## Demo

[Ver demo de la aplicación](./demo.mov).

## Ejecutar el proyecto

Requisitos:

- Node.js 22.11 o superior.
- Yarn 1.22.
- Entorno de React Native configurado para iOS o Android.

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

El código se organiza según las cuatro capas de Clean Architecture:

```text
frameworks-drivers
        ↓
interface-adapters
        ↓
use-cases
        ↓
entities
```

| Carpeta                  | Responsabilidad                                                |
| ------------------------ | -------------------------------------------------------------- |
| `src/entities`           | Entidades y estructuras centrales del negocio.                 |
| `src/use-cases`          | Operaciones de la aplicación y sus contratos.                  |
| `src/interface-adapters` | Puertos, repositorios, data sources, modelos de API y mappers. |
| `src/frameworks-drivers` | Interfaz de React Native y cliente HTTP concreto.              |
| `src/main`               | Construcción e inyección de dependencias.                      |

Las dependencias del código apuntan hacia las capas internas. Por ejemplo, los casos de uso dependen de `PokemonRepository`, no de su implementación concreta.

El flujo de una petición es:

```text
Pantalla → Hook → Caso de uso → Repositorio → Data source → HTTP → PokéAPI
```

La UI utiliza Atomic Design para organizar sus componentes en átomos y moléculas.

## Comandos

```sh
yarn lint          # Analiza el código
yarn format:check  # Verifica el formato
yarn typecheck     # Verifica los tipos
yarn test          # Ejecuta las pruebas
yarn validate      # Ejecuta todas las validaciones
```

Husky ejecuta `yarn lint` antes de cada commit.

## Pendientes

- Agregar almacenamiento local y funcionamiento offline.
- Completar los estados vacíos.
- Ampliar las pruebas unitarias, de integración y de contratos.

## Decisión sobre las imágenes

El endpoint de listado no incluye las ilustraciones. Para evitar una petición adicional por cada Pokémon, la aplicación construye la URL de su sprite a partir del ID. Así, cada página necesita una sola petición de listado.
