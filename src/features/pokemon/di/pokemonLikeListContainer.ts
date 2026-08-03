import { LocalStorageImpl } from '../../../shared/storage/LocalStorageImpl';
import { GetPokemonLikeList } from '../domain/use-cases/GetPokemonLikeList';
import { PokemonLikeListDataSourceImpl } from '../infrastructure/datasources/PokemonLikeListDataSourceImpl';
import { PokemonLikeListRepositoryImpl } from '../infrastructure/repositories/PokemonLikeListRepositoryImpl';
import { SetPokemonLikeListItem } from '../domain/use-cases/SetPokemonLikeListItem';

const localStorage = new LocalStorageImpl();

const pokemonLikeListDataSource = new PokemonLikeListDataSourceImpl(
  localStorage,
);

const pokemonLikeListRepositoryImpl = new PokemonLikeListRepositoryImpl(
  pokemonLikeListDataSource,
);

const getPokemonLikeList = new GetPokemonLikeList(
  pokemonLikeListRepositoryImpl,
);

const setPokemonLikeListItem = new SetPokemonLikeListItem(
  pokemonLikeListRepositoryImpl,
);

export const pokemonLikeListContainer = {
  getPokemonLikeList,
  setPokemonLikeListItem,
};
