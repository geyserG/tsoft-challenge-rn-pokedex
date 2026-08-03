import { LocalStorageImpl } from '../../../shared/storage/LocalStorageImpl';
import { GetPokemonFavoriteList } from '../domain/use-cases/GetPokemonFavoriteList';
import { PokemonFavoriteListDataSourceImpl } from '../infrastructure/datasources/PokemonFavoriteListDataSourceImpl';
import { PokemonFavoriteListRepositoryImpl } from '../infrastructure/repositories/PokemonFavoriteListRepositoryImpl';
import { SetPokemonFavoriteListItem } from '../domain/use-cases/SetPokemonFavoriteListItem';

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

const setPokemonFavoriteListItem = new SetPokemonFavoriteListItem(
  pokemonFavoriteListRepositoryImpl,
);

export const pokemonFavoriteListContainer = {
  getPokemonFavoriteList,
  setPokemonFavoriteListItem,
};
