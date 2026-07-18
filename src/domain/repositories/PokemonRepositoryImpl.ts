import type { Page } from '../entities/Page';
import type { Pokemon } from '../entities/Pokemon';
import type { PokemonRepository } from './PokemonRepository';
import type { PokemonRemoteDataSource } from '../../data/datasources/PokemonRemoteDataSource';
import { PageMapper } from '../../data/mappers/PageMapper';
import { PokemonMapper } from '../../data/mappers/PokemonMapper';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private readonly remoteDataSource: PokemonRemoteDataSource) {}

  async fetchPokemonList(offset: number, limit: number): Promise<Page> {
    const pageApiModel = await this.remoteDataSource.getPokemonList(
      offset,
      limit,
    );

    return PageMapper.parseToDomain(pageApiModel);
  }

  async fetchPokemonById(pokemonId: number): Promise<Pokemon> {
    const [pokemonApiModel, pokemonSpeciesApiModel] = await Promise.all([
      this.remoteDataSource.getPokemonById(pokemonId),
      this.remoteDataSource.getPokemonSpeciesById(pokemonId),
    ]);

    return PokemonMapper.parseToDomain(pokemonApiModel, pokemonSpeciesApiModel);
  }
}
