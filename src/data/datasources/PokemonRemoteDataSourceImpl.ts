import type { HttpClient } from '../../infrastructure/http/HttpClient';
import type { PageApiModel } from '../models/PageApiModel';
import { PokemonApiModel } from '../models/PokemonApiModel';
import type { PokemonRemoteDataSource } from './PokemonRemoteDataSource';

export class PokemonRemoteDataSourceImpl implements PokemonRemoteDataSource {
  constructor(private readonly httpClient: HttpClient) {}

  async getPokemonList(): Promise<PageApiModel> {
    return this.httpClient.get<PageApiModel>('/pokemon');
  }

  async getPokemonById(pokemonId: string): Promise<PokemonApiModel> {
    return this.httpClient.get<PokemonApiModel>(`/pokemon/${pokemonId}`);
  }
}
