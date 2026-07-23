import type { Page } from '../../../entities/Page';
import type { Pokemon } from '../../../entities/Pokemon';
import type { PokemonRepository } from '../../../use-cases/repositories/PokemonRepository';
import type { PokemonDataSource } from '../../ports/PokemonDataSource';
import { PageMapper } from '../mappers/PageMapper';
import { PokemonMapper } from '../mappers/PokemonMapper';

export class PokemonRepositoryImpl implements PokemonRepository {
  constructor(private readonly pokemonDataSource: PokemonDataSource) {}

  async fetchPokemonList(offset: number, limit: number): Promise<Page> {
    const pageApiModel = await this.pokemonDataSource.getPokemonList(
      offset,
      limit,
    );

    return PageMapper.parseToDomain(pageApiModel);
  }

  async fetchPokemonById(pokemonId: number): Promise<Pokemon> {
    const [pokemonApiModel, pokemonSpeciesApiModel] = await Promise.all([
      this.pokemonDataSource.getPokemonById(pokemonId),
      this.pokemonDataSource.getPokemonSpeciesById(pokemonId),
    ]);

    return PokemonMapper.parseToDomain(pokemonApiModel, pokemonSpeciesApiModel);
  }
}
