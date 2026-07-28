import type { Page } from '../../domain/entities/Page';
import type { Pokemon } from '../../domain/entities/Pokemon';
import { PokemonByIdRepository } from '../../domain/repositories/PokemonByIdRepository';
import type { PokemonListRepository } from '../../domain/repositories/PokemonListRepository';
import type { PokemonDataSource } from '../datasources/PokemonDataSource';
import { PageMapper } from '../mappers/PageMapper';
import { PokemonMapper } from '../mappers/PokemonMapper';

export class PokemonRepositoryImpl
  implements PokemonListRepository, PokemonByIdRepository
{
  constructor(private readonly pokemonDataSource: PokemonDataSource) {}

  async fetchPokemonList(offset: number, limit: number): Promise<Page> {
    const pageDto = await this.pokemonDataSource.getPokemonList(offset, limit);

    return PageMapper.parseToDomain(pageDto);
  }

  async fetchPokemonById(pokemonId: number): Promise<Pokemon> {
    const [pokemonDto, pokemonSpeciesDto] = await Promise.all([
      this.pokemonDataSource.getPokemonById(pokemonId),
      this.pokemonDataSource.getPokemonSpeciesById(pokemonId),
    ]);

    return PokemonMapper.parseToDomain(pokemonDto, pokemonSpeciesDto);
  }
}
