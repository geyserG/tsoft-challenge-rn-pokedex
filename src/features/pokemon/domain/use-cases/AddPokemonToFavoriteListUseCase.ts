import { PokemonFavoriteListItem } from '../entities/PokemonFavoriteListItem';
export interface AddPokemonFavoriteListUseCase {
  execute(pokemon: PokemonFavoriteListItem): Promise<void>;
}
