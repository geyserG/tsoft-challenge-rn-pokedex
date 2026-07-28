import { GetPokemonList } from '../domain/use-cases/GetPokemonList';
import { GetPokemonById } from '../domain/use-cases/GetPokemonById';
import { FetchHttpClient } from '../../shared/http/FetchHttpClient';
import { PokeApiDataSource } from '../infrastructure/datasources/PokeApiDataSource';
import { PokemonRepositoryImpl } from '../infrastructure/repositories/PokemonRepositoryImpl';

const fetchHttpClient = new FetchHttpClient('https://pokeapi.co/api/v2');

const pokemonDataSource = new PokeApiDataSource(fetchHttpClient);

const pokemonRepository = new PokemonRepositoryImpl(pokemonDataSource);

export const dependencies = {
  getPokemonById: new GetPokemonById(pokemonRepository),
  getPokemonList: new GetPokemonList(pokemonRepository),
};
