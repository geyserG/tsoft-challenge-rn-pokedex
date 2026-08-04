import { AddPokemonFavoriteListUseCase } from './AddPokemonToFavoriteListUseCase';
import { PokemonFavoriteListWriter } from '../repositories/PokemonFavoriteListRepository';
import { PokemonFavoriteListItem } from '../entities/PokemonFavoriteListItem';

export class AddPokemonToFavoriteList implements AddPokemonFavoriteListUseCase {
  constructor(
    private readonly pokemonFavoriteListWriter: PokemonFavoriteListWriter,
  ) {}

  execute(pokemon: PokemonFavoriteListItem): Promise<void> {
    return this.pokemonFavoriteListWriter.addPokemonToFavoriteList(pokemon);
  }
}
