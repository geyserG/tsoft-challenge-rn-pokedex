import type { PageApiModel } from '../models/PageApiModel';
import type { PokemonApiModel } from '../models/PokemonApiModel';
import type { PokemonSpeciesApiModel } from '../models/PokemonSpeciesApiModel';

export interface PokemonRemoteDataSource {
  getPokemonList(): Promise<PageApiModel>;
  getPokemonById(pokemonId: string): Promise<PokemonApiModel>;
  getPokemonSpeciesById(pokemonId: string): Promise<PokemonSpeciesApiModel>;
}
