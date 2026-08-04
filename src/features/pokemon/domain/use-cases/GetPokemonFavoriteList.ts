import { GetPokemonFavoriteListUseCase } from './GetPokemonFavoriteListUseCase';
import { PokemonFavoriteListReader } from '../repositories/PokemonFavoriteListRepository';
import { PokemonFavoriteList } from '../entities/PokemonFavoriteList';

export class GetPokemonFavoriteList implements GetPokemonFavoriteListUseCase {
  constructor(
    private readonly pokemonFavoriteListReader: PokemonFavoriteListReader,
  ) {}

  execute(): Promise<PokemonFavoriteList> {
    return this.pokemonFavoriteListReader.getPokemonFavoriteList();
  }
}
