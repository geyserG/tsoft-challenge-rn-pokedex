import { PokemonLikeList } from '../../domain/entities/PokemonLikeList';
import { PokemonLikeListItem } from '../../domain/entities/PokemonLikeListItem';

export interface PokemonLikeListDataSource {
  getPokemonLikeList(): Promise<PokemonLikeList>;
  setPokemonLikeListItem(pokemon: PokemonLikeListItem): Promise<void>;
}
