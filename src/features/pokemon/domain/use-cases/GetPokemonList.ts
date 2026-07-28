import type { Page } from '../entities/Page';
import { PokemonListRepository } from '../repositories/PokemonListRepository';
import type { GetPokemonListUseCase } from './GetPokemonListUseCase';

export class GetPokemonList implements GetPokemonListUseCase {
  constructor(private readonly pokemonRepository: PokemonListRepository) {}

  execute(offset: number, limit: number): Promise<Page> {
    return this.pokemonRepository.fetchPokemonList(offset, limit);
  }
}
