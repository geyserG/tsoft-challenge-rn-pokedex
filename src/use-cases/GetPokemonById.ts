import type { Pokemon } from '../entities/Pokemon';
import type { GetPokemonByIdUseCase } from './ports/GetPokemonByIdUseCase';
import type { PokemonRepository } from './repositories/PokemonRepository';

export class GetPokemonById implements GetPokemonByIdUseCase {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  execute(pokemonId: number): Promise<Pokemon> {
    return this.pokemonRepository.fetchPokemonById(pokemonId);
  }
}
