import type { Page } from '../entities/Page';
import type { Pokemon } from '../entities/Pokemon';

export interface PokemonRepository {
  fetchPokemonList(): Promise<Page>;
  fetchPokemonById(pokemonId: number): Promise<Pokemon>;
}
