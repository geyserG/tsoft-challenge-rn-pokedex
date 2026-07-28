import { Dispatch, SetStateAction } from 'react';
import type { Page } from '../../domain/entities/Page';
import type { GetPokemonListUseCase } from '../../domain/use-cases/GetPokemonListUseCase';

export interface PokemonListItem {
  pokemonId: number;
  pokemonName: string;
  imageLarge: string;
}

export interface PokemonListPage extends Omit<Page, 'results'> {
  results: PokemonListItem[];
}

export interface UsePokemonListState {
  page: PokemonListPage | null;
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  error: string | null;
  loadMore: () => Promise<void>;
  reload: () => Promise<void>;
}

interface RequestLock {
  current: boolean;
}

export interface LoadPokemonListParams {
  append: boolean;
  offset: number;
  requestLock: RequestLock;
  setPage: Dispatch<SetStateAction<PokemonListPage>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setLoadingMore: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
  getPokemonList: GetPokemonListUseCase;
}
