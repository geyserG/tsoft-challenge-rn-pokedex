import type { Page } from '../entities/Page';
import type { PokemonRepository } from './PokemonRepository';
import type { PokemonRemoteDataSource } from '../../data/datasources/PokemonRemoteDataSource';
import { PageMapper } from '../../data/mappers/PageMapper';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private readonly remoteDataSource: PokemonRemoteDataSource) {}

  async fetchPokemonList(): Promise<Page> {
    const pageApiModel = await this.remoteDataSource.getPokemonList();

    return PageMapper.parseToDomain(pageApiModel);
  }
}
