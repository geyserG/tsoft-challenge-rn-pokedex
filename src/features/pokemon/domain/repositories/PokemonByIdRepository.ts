import type { Pokemon } from '../entities/Pokemon';

export interface PokemonByIdRepository {
  fetchPokemonById(pokemonId: number): Promise<Pokemon>;
}
