import { LocalStorage } from '../../../../shared/storage/localStorage';
import { PokemonLikeList } from '../../domain/entities/PokemonLikeList';
import { PokemonLikeListItem } from '../../domain/entities/PokemonLikeListItem';
import { PokemonLikeListMapper } from '../mappers/PokemonLikeListMapper';
import { PokemonLikeListDataSource } from './PokemonLikeListDataSource';

export class PokemonLikeListDataSourceImpl
  implements PokemonLikeListDataSource
{
  constructor(private readonly localStorage: LocalStorage) {}
  async getPokemonLikeList(): Promise<PokemonLikeList> {
    const resultDto = await this.localStorage.getItem('favoritos');

    return PokemonLikeListMapper.toDomain(resultDto ?? '');
  }

  async setPokemonLikeListItem(pokemon: PokemonLikeListItem): Promise<void> {
    const result = (await this.localStorage.getItem('favoritos')) ?? '';
    const resultDto = PokemonLikeListMapper.toDomain(result);
    resultDto.list.push(pokemon);
    this.localStorage.setItem('favoritos', JSON.stringify(resultDto));
  }
}
