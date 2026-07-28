import type { Pokemon } from '../entities/Pokemon';
import type { GetPokemonByIdUseCase } from './GetPokemonByIdUseCase';
import { PokemonByIdRepository } from '../repositories/PokemonByIdRepository';

export class GetPokemonById implements GetPokemonByIdUseCase {
  constructor(private readonly pokemonRepository: PokemonByIdRepository) {}

  execute(pokemonId: number): Promise<Pokemon> {
    return this.pokemonRepository.fetchPokemonById(pokemonId);
  }
}
