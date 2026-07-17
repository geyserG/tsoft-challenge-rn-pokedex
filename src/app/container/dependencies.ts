import { GetPokemonList } from '../../domain/usecases/GetPokemonList';
import { FetchHttpClient } from '../../infrastructure/http/FetchHttpClient';
import { PokemonRemoteDataSourceImpl } from '../../data/datasources/PokemonRemoteDataSourceImpl';
import { PokemonRepositoryImpl } from '../../domain/repositories/PokemonRepositoryImpl';

const httpClient = new FetchHttpClient('https://pokeapi.co/api/v2');

const pokemonRemoteDataSource = new PokemonRemoteDataSourceImpl(httpClient);

const pokemonRepository = new PokemonRepositoryImpl(pokemonRemoteDataSource);

export const dependencies = {
  getPokemonList: new GetPokemonList(pokemonRepository),
};
