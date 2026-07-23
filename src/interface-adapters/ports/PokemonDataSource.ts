import type { PageApiModel } from '../data/models/PageApiModel';
import type { PokemonApiModel } from '../data/models/PokemonApiModel';
import type { PokemonSpeciesApiModel } from '../data/models/PokemonSpeciesApiModel';

export interface PokemonDataSource {
  getPokemonList(offset: number, limit: number): Promise<PageApiModel>;
  getPokemonById(pokemonId: number): Promise<PokemonApiModel>;
  getPokemonSpeciesById(pokemonId: number): Promise<PokemonSpeciesApiModel>;
}
