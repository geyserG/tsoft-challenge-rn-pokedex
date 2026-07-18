import type { PageApiModel } from '../models/PageApiModel';
import type { PokemonApiModel } from '../models/PokemonApiModel';
import type { PokemonSpeciesApiModel } from '../models/PokemonSpeciesApiModel';

export interface PokemonRemoteDataSource {
  getPokemonList(offset: number, limit: number): Promise<PageApiModel>;
  getPokemonById(pokemonId: number): Promise<PokemonApiModel>;
  getPokemonSpeciesById(pokemonId: number): Promise<PokemonSpeciesApiModel>;
}
