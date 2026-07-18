import type { Page } from '../entities/Page';
import type { PokemonRepository } from '../repositories/PokemonRepository';

export class GetPokemonList {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  execute(): Promise<Page> {
    return this.pokemonRepository.fetchPokemonList();
  }
}
