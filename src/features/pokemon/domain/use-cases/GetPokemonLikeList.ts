import { GetPokemonLikeListUseCase } from './GetPokemonLikeListUseCase';
import { PokemonLikeListRepository } from '../repositories/PokemonLikeListRepository';
import { PokemonLikeList } from '../entities/PokemonLikeList';

export class GetPokemonLikeList implements GetPokemonLikeListUseCase {
  constructor(
    private readonly pokemonLikeListRepository: PokemonLikeListRepository,
  ) {}

  execute(): Promise<PokemonLikeList> {
    return this.pokemonLikeListRepository.getLikePokemon();
  }
}
