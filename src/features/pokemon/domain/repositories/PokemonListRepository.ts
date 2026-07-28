import type { Page } from '../entities/Page';

export interface PokemonListRepository {
  fetchPokemonList(offset: number, limit: number): Promise<Page>;
}
