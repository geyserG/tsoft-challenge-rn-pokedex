import { GetPokemonList } from '../use-cases/GetPokemonList';
import { GetPokemonById } from '../use-cases/GetPokemonById';
import { FetchHttpClient } from '../frameworks-drivers/http/FetchHttpClient';
import { PokeApiDataSource } from '../interface-adapters/data/datasources/PokeApiDataSource';
import { PokemonRepositoryImpl } from '../interface-adapters/data/repositories/PokemonRepositoryImpl';

const httpClient = new FetchHttpClient('https://pokeapi.co/api/v2');

const pokemonDataSource = new PokeApiDataSource(httpClient);

const pokemonRepository = new PokemonRepositoryImpl(pokemonDataSource);

export const dependencies = {
  getPokemonById: new GetPokemonById(pokemonRepository),
  getPokemonList: new GetPokemonList(pokemonRepository),
};
