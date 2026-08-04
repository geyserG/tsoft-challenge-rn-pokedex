import { PokemonFavoriteList } from '../entities/PokemonFavoriteList';
import { PokemonFavoriteListItem } from '../entities/PokemonFavoriteListItem';

export interface PokemonFavoriteListReader {
  getPokemonFavoriteList(): Promise<PokemonFavoriteList>;
}

export interface PokemonFavoriteListWriter {
  addPokemonToFavoriteList(pokemon: PokemonFavoriteListItem): Promise<void>;
}
