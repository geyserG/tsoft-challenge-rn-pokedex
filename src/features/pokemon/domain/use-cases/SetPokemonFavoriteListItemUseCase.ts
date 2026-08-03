import { PokemonFavoriteListItem } from '../entities/PokemonFavoriteListItem';
export interface setPokemonFavoriteListItemUseCase {
  execute(pokemon: PokemonFavoriteListItem): Promise<void>;
}
