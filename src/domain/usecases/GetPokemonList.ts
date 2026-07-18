import type { Page } from '../entities/Page';
import type { PokemonRepository } from '../repositories/PokemonRepository';

export class GetPokemonList {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  execute(offset: number, limit: number): Promise<Page> {
    return this.pokemonRepository.fetchPokemonList(offset, limit);
  }
}
