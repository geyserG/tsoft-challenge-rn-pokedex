import { PokemonFavoriteList } from '../../domain/entities/PokemonFavoriteList';
import { PokemonFavoriteListItem } from '../../domain/entities/PokemonFavoriteListItem';

export interface PokemonFavoriteListDataSource {
  getPokemonFavoriteList(): Promise<PokemonFavoriteList>;
  addPokemonToFavoriteList(pokemon: PokemonFavoriteListItem): Promise<void>;
}
