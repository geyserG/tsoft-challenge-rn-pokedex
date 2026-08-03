import { SetPokemonLikeListItemUseCase } from './SetPokemonLikeListItemUseCase';
import { PokemonLikeListRepository } from '../repositories/PokemonLikeListRepository';
import { PokemonLikeListItem } from '../entities/PokemonLikeListItem';

export class SetPokemonLikeListItem implements SetPokemonLikeListItemUseCase {
  constructor(
    private readonly pokemonLikeListRepository: PokemonLikeListRepository,
  ) {}

  execute(pokemon: PokemonLikeListItem): Promise<void> {
    return this.pokemonLikeListRepository.setPokemonLikeListItem(pokemon);
  }
}
