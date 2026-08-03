import { PokemonFavoriteList } from '../entities/PokemonFavoriteList';

export interface GetPokemonFavoriteListUseCase {
  execute(): Promise<PokemonFavoriteList>;
}
