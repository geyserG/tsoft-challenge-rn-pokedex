import { type Dispatch, type SetStateAction } from 'react';

import type { Pokemon } from '../../domain/entities/Pokemon';
import { PokemonListPage } from './usePokemonList.types';

export interface UsePokemonByIdState {
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
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
}
