import { PokemonFavoriteList } from '../../domain/entities/PokemonFavoriteList';
import { PokemonFavoriteListItem } from '../../domain/entities/PokemonFavoriteListItem';
import { PokemonFavoriteListRepository } from '../../domain/repositories/PokemonFavoriteListRepository';
import { PokemonFavoriteListDataSource } from '../datasources/PokemonFavoriteListDataSource';

export class PokemonFavoriteListRepositoryImpl
  implements PokemonFavoriteListRepository
{
  constructor(
    private readonly pokemonFavoriteListDataSource: PokemonFavoriteListDataSource,
  ) {}

  async getPokemonFavoriteList(): Promise<PokemonFavoriteList> {
    return this.pokemonFavoriteListDataSource.getPokemonFavoriteList();
  }

  async setPokemonFavoriteListItem(
    pokemon: PokemonFavoriteListItem,
  ): Promise<void> {
    return this.pokemonFavoriteListDataSource.setPokemonFavoriteListItem(
      pokemon,
    );
  }
}
