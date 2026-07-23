import type { HttpClient } from '../../ports/HttpClient';
import type { PokemonDataSource } from '../../ports/PokemonDataSource';
import type { PageApiModel } from '../models/PageApiModel';
import type { PokemonApiModel } from '../models/PokemonApiModel';
import type { PokemonSpeciesApiModel } from '../models/PokemonSpeciesApiModel';

export class PokeApiDataSource implements PokemonDataSource {
  constructor(private readonly httpClient: HttpClient) {}

  async getPokemonList(offset: number, limit: number): Promise<PageApiModel> {
    return this.httpClient.get<PageApiModel>(
      `/pokemon?offset=${offset}&limit=${limit}`,
    );
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
