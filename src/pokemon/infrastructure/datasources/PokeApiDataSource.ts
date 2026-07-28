import type { HttpClient } from '../../../shared/http/HttpClient';
import type { PokemonDataSource } from './PokemonDataSource';
import type { PageDto } from '../dtos/PageDto';
import type { PokemonDto } from '../dtos/PokemonDto';
import type { PokemonSpeciesDto } from '../dtos/PokemonSpeciesDto';

export class PokeApiDataSource implements PokemonDataSource {
  constructor(private readonly httpClient: HttpClient) {}

  async getPokemonList(offset: number, limit: number): Promise<PageDto> {
    return this.httpClient.get<PageDto>(
      `/pokemon?offset=${offset}&limit=${limit}`,
    );
  }

  async getPokemonById(pokemonId: number): Promise<PokemonDto> {
    return this.httpClient.get<PokemonDto>(`/pokemon/${pokemonId}`);
  }

  async getPokemonSpeciesById(pokemonId: number): Promise<PokemonSpeciesDto> {
    return this.httpClient.get<PokemonSpeciesDto>(
      `/pokemon-species/${pokemonId}`,
    );
  }
}
