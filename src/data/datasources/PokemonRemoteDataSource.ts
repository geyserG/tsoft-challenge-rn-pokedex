import type { PageApiModel } from '../models/PageApiModel';
import { PokemonApiModel } from '../models/PokemonApiModel';

export interface PokemonRemoteDataSource {
  getPokemonList(): Promise<PageApiModel>;
  getPokemonById(pokemonId: string): Promise<PokemonApiModel>;
}
