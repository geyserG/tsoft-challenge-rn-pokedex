import type { HttpClient } from '../../infrastructure/http/HttpClient';
import type { PageApiModel } from '../models/PageApiModel';
import type { PokemonRemoteDataSource } from './PokemonRemoteDataSource';

export class PokemonRemoteDataSourceImpl implements PokemonRemoteDataSource {
  constructor(private readonly httpClient: HttpClient) {}

  async getPokemonList(): Promise<PageApiModel> {
    return this.httpClient.get<PageApiModel>('/pokemon');
  }
}
