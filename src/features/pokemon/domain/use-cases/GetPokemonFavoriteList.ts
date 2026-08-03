import { GetPokemonFavoriteListUseCase } from './GetPokemonFavoriteListUseCase';
import { PokemonFavoriteListRepository } from '../repositories/PokemonFavoriteListRepository';
import { PokemonFavoriteList } from '../entities/PokemonFavoriteList';

export class GetPokemonFavoriteList implements GetPokemonFavoriteListUseCase {
  constructor(
    private readonly pokemonFavoriteListRepository: PokemonFavoriteListRepository,
  ) {}

  execute(): Promise<PokemonFavoriteList> {
    return this.pokemonFavoriteListRepository.getPokemonFavoriteList();
  }
}
