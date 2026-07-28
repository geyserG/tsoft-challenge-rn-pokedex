import { GetPokemonList } from '../domain/use-cases/GetPokemonList';
import { GetPokemonById } from '../domain/use-cases/GetPokemonById';
import { FetchHttpClient } from '../../../shared/http/FetchHttpClient';
import { PokemonDataSourceImpl } from '../infrastructure/datasources/PokemonDataSourceImpl';
import { PokemonRepositoryImpl } from '../infrastructure/repositories/PokemonRepositoryImpl';

const fetchHttpClient = new FetchHttpClient('https://pokeapi.co/api/v2');

const pokemonDataSource = new PokemonDataSourceImpl(fetchHttpClient);

const pokemonRepository = new PokemonRepositoryImpl(pokemonDataSource);

const getPokemonById = new GetPokemonById(pokemonRepository);
const getPokemonList = new GetPokemonList(pokemonRepository);

export const pokemonContainer = { getPokemonById, getPokemonList };
