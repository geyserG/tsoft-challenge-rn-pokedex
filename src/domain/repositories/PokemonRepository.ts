import type { Page } from '../entities/Page';

export interface PokemonRepository {
  fetchPokemonList(): Promise<Page>;
}
