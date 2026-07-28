import { Pokemon } from '../entities/Pokemon';

export interface PokemonSearchRepository {
  searchPokemon(name: string): Promise<Pokemon>;
}
