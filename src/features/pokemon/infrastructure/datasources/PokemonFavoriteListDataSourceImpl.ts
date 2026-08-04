import { LocalStorage } from '../../../../shared/storage/localStorage';
import { PokemonFavoriteList } from '../../domain/entities/PokemonFavoriteList';
import { PokemonFavoriteListItem } from '../../domain/entities/PokemonFavoriteListItem';
import { PokemonFavoriteListMapper } from '../mappers/PokemonFavoriteListMapper';
import { PokemonFavoriteListDataSource } from './PokemonFavoriteListDataSource';

export class PokemonFavoriteListDataSourceImpl
  implements PokemonFavoriteListDataSource
{
  constructor(private readonly localStorage: LocalStorage) {}
  async getPokemonFavoriteList(): Promise<PokemonFavoriteList> {
    const resultDto = await this.localStorage.getItem('favoritos');

    return PokemonFavoriteListMapper.toDomain(resultDto ?? '');
  }

  async addPokemonToFavoriteList(
    pokemon: PokemonFavoriteListItem,
  ): Promise<void> {
    const result = (await this.localStorage.getItem('favoritos')) ?? '';
    const resultDto = PokemonFavoriteListMapper.toDomain(result);
    resultDto.list.push(pokemon);
    await this.localStorage.setItem('favoritos', JSON.stringify(resultDto));
  }
}
