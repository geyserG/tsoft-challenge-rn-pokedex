import type { PageDto } from '../dtos/PageDto';
import type { PokemonDto } from '../dtos/PokemonDto';
import type { PokemonSpeciesDto } from '../dtos/PokemonSpeciesDto';

export interface PokemonDataSource {
  getPokemonList(offset: number, limit: number): Promise<PageDto>;
  getPokemonById(pokemonId: number): Promise<PokemonDto>;
  getPokemonSpeciesById(pokemonId: number): Promise<PokemonSpeciesDto>;
}
