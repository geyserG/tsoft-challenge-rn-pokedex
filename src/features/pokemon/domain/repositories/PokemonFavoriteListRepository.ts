import { PokemonFavoriteList } from '../entities/PokemonFavoriteList';
import { PokemonFavoriteListItem } from '../entities/PokemonFavoriteListItem';

export interface PokemonFavoriteListRepository {
  getPokemonFavoriteList(): Promise<PokemonFavoriteList>;
  setPokemonFavoriteListItem(pokemon: PokemonFavoriteListItem): Promise<void>;
}
