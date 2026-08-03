import { PokemonLikeListItem } from '../entities/PokemonLikeListItem';
export interface SetPokemonLikeListItemUseCase {
  execute(pokemon: PokemonLikeListItem): Promise<void>;
}
