import { PokemonLikeList } from '../entities/PokemonLikeList';

export interface GetPokemonLikeListUseCase {
  execute(): Promise<PokemonLikeList>;
}
