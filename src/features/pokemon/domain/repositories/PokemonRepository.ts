import type { Pokemon } from '../entities/Pokemon';

export type PokemonValueType = number | string;

export interface PokemonRepository {
  fetchPokemon(value: PokemonValueType): Promise<Pokemon>;
}
