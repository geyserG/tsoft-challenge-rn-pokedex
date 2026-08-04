import { LocalStorageImpl } from '../../../shared/storage/LocalStorageImpl';
import { GetPokemonFavoriteList } from '../domain/use-cases/GetPokemonFavoriteList';
import { PokemonFavoriteListDataSourceImpl } from '../infrastructure/datasources/PokemonFavoriteListDataSourceImpl';
import { PokemonFavoriteListRepositoryImpl } from '../infrastructure/repositories/PokemonFavoriteListRepositoryImpl';
import { AddPokemonToFavoriteList } from '../domain/use-cases/AddPokemonToFavoriteList';

const localStorage = new LocalStorageImpl();

const PokemonFavoriteListDataSource = new PokemonFavoriteListDataSourceImpl(
  localStorage,
);

const pokemonFavoriteListRepositoryImpl = new PokemonFavoriteListRepositoryImpl(
  PokemonFavoriteListDataSource,
);

const getPokemonFavoriteList = new GetPokemonFavoriteList(
  pokemonFavoriteListRepositoryImpl,
);

const addPokemonToFavoriteList = new AddPokemonToFavoriteList(
  pokemonFavoriteListRepositoryImpl,
);

export const pokemonFavoriteListContainer = {
  getPokemonFavoriteList,
  addPokemonToFavoriteList,
};
