import { PokemonFavoriteList } from '../../domain/entities/PokemonFavoriteList';
import { PokemonFavoriteListItem } from '../../domain/entities/PokemonFavoriteListItem';
import {
  PokemonFavoriteListReader,
  PokemonFavoriteListWriter,
} from '../../domain/repositories/PokemonFavoriteListRepository';
import { PokemonFavoriteListDataSource } from '../datasources/PokemonFavoriteListDataSource';

export class PokemonFavoriteListRepositoryImpl
  implements PokemonFavoriteListReader, PokemonFavoriteListWriter
{
  constructor(
    private readonly pokemonFavoriteListDataSource: PokemonFavoriteListDataSource,
  ) {}

  async getPokemonFavoriteList(): Promise<PokemonFavoriteList> {
    return this.pokemonFavoriteListDataSource.getPokemonFavoriteList();
  }

  async addPokemonToFavoriteList(
    pokemon: PokemonFavoriteListItem,
  ): Promise<void> {
    return this.pokemonFavoriteListDataSource.addPokemonToFavoriteList(pokemon);
  }
}
