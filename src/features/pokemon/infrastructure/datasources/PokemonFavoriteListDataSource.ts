import { PokemonFavoriteList } from '../../domain/entities/PokemonFavoriteList';
import { PokemonFavoriteListItem } from '../../domain/entities/PokemonFavoriteListItem';

export interface PokemonFavoriteListDataSource {
  getPokemonFavoriteList(): Promise<PokemonFavoriteList>;
  setPokemonFavoriteListItem(pokemon: PokemonFavoriteListItem): Promise<void>;
}
