import type { HttpClient } from '../../infrastructure/http/HttpClient';
import type { PageApiModel } from '../models/PageApiModel';
import type { PokemonApiModel } from '../models/PokemonApiModel';
import type { PokemonSpeciesApiModel } from '../models/PokemonSpeciesApiModel';
import type { PokemonRemoteDataSource } from './PokemonRemoteDataSource';

export class PokemonRemoteDataSourceImpl implements PokemonRemoteDataSource {
  constructor(private readonly httpClient: HttpClient) {}

  async getPokemonList(): Promise<PageApiModel> {
    return this.httpClient.get<PageApiModel>('/pokemon');
  }

  async getPokemonById(pokemonId: number): Promise<PokemonApiModel> {
    return this.httpClient.get<PokemonApiModel>(`/pokemon/${pokemonId}`);
  }

  async getPokemonSpeciesById(
    pokemonId: number,
  ): Promise<PokemonSpeciesApiModel> {
    return this.httpClient.get<PokemonSpeciesApiModel>(
      `/pokemon-species/${pokemonId}`,
    );
  }
}
