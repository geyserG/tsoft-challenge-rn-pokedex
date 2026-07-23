import type { Page } from '../entities/Page';
import type { GetPokemonListUseCase } from './ports/GetPokemonListUseCase';
import type { PokemonRepository } from './repositories/PokemonRepository';

export class GetPokemonList implements GetPokemonListUseCase {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  execute(offset: number, limit: number): Promise<Page> {
    return this.pokemonRepository.fetchPokemonList(offset, limit);
  }
}
