import type { PageApiModel } from '../models/PageApiModel';

export interface PokemonRemoteDataSource {
  getPokemonList(): Promise<PageApiModel>;
}
