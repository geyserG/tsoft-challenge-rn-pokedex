import { setPokemonFavoriteListItemUseCase } from './SetPokemonFavoriteListItemUseCase';
import { PokemonFavoriteListRepository } from '../repositories/PokemonFavoriteListRepository';
import { PokemonFavoriteListItem } from '../entities/PokemonFavoriteListItem';

export class SetPokemonFavoriteListItem
  implements setPokemonFavoriteListItemUseCase
{
  constructor(
    private readonly pokemonFavoriteListRepository: PokemonFavoriteListRepository,
  ) {}

  execute(pokemon: PokemonFavoriteListItem): Promise<void> {
    return this.pokemonFavoriteListRepository.setPokemonFavoriteListItem(
      pokemon,
    );
  }
}
