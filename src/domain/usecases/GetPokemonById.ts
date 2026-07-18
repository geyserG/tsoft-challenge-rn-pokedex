import type { Pokemon } from '../entities/Pokemon';
import type { PokemonRepository } from '../repositories/PokemonRepository';

export class GetPokemonById {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  execute(pokemonId: number): Promise<Pokemon> {
    return this.pokemonRepository.fetchPokemonById(pokemonId);
  }
}
