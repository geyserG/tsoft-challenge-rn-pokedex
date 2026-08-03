import { PokemonLikeList } from '../../domain/entities/PokemonLikeList';
import { PokemonLikeListItem } from '../../domain/entities/PokemonLikeListItem';
import { PokemonLikeListRepository } from '../../domain/repositories/PokemonLikeListRepository';
import { PokemonLikeListDataSource } from '../datasources/PokemonLikeListDataSource';

export class PokemonLikeListRepositoryImpl
  implements PokemonLikeListRepository
{
  constructor(
    private readonly PokemonLikeListDataSource: PokemonLikeListDataSource,
  ) {}

  async getLikePokemon(): Promise<PokemonLikeList> {
    return this.PokemonLikeListDataSource.getPokemonLikeList();
  }

  async setPokemonLikeListItem(pokemon: PokemonLikeListItem): Promise<void> {
    return this.PokemonLikeListDataSource.setPokemonLikeListItem(pokemon);
  }
}
