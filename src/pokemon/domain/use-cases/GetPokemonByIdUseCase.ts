import type { Pokemon } from '../entities/Pokemon';

export interface GetPokemonByIdUseCase {
  execute(pokemonId: number): Promise<Pokemon>;
}
