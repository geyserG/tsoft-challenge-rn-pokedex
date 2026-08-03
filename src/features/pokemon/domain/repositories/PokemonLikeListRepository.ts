import { PokemonLikeList } from '../entities/PokemonLikeList';
import { PokemonLikeListItem } from '../entities/PokemonLikeListItem';

export interface PokemonLikeListRepository {
  getLikePokemon(): Promise<PokemonLikeList>;
  setPokemonLikeListItem(pokemon: PokemonLikeListItem): Promise<void>;
}
