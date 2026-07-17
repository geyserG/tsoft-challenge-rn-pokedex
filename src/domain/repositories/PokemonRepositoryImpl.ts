import type { Page } from '../entities/Page';
import type { Pokemon } from '../entities/Pokemon';
import type { PokemonRepository } from './PokemonRepository';
import type { PokemonRemoteDataSource } from '../../data/datasources/PokemonRemoteDataSource';
import { PageMapper } from '../../data/mappers/PageMapper';
import { PokemonMapper } from '../../data/mappers/PokemonMapper';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private readonly remoteDataSource: PokemonRemoteDataSource) {}

  async fetchPokemonList(): Promise<Page> {
    const pageApiModel = await this.remoteDataSource.getPokemonList();

    return PageMapper.parseToDomain(pageApiModel);
  }

  async fetchPokemonById(pokemonId: string): Promise<Pokemon> {
    const pokemonApiModel = await this.remoteDataSource.getPokemonById(
      pokemonId,
    );

    return PokemonMapper.parseToDomain(pokemonApiModel);
  }
}
