import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { dependencies } from '../../app/container/dependencies';
import type {
  PokemonListPage,
  UsePokemonListState,
} from './usePokemonList.types';
import { toPokemonListItem } from './utils';

const usePokemonList = (): UsePokemonListState => {
  const [page, setPage] = useState<PokemonListPage>({
    total: 0,
    nextPage: '',
    previousPage: '',
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPage = () => loadPokemonList(setPage, setLoading, setError);

  useEffect(() => {
    loadPage();
  }, []);

  return {
    page,
    loading,
    error,
    reload: loadPage,
  };
};

const loadPokemonList = async (
  setPage: Dispatch<SetStateAction<PokemonListPage>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,
): Promise<void> => {
  try {
    setLoading(true);
    setError(null);

    const pageResult = await dependencies.getPokemonList.execute();
    const results = pageResult.results.map(toPokemonListItem);

    setPage({ ...pageResult, results });
  } catch {
    setError('No fue posible cargar los pokémon');
  } finally {
    setLoading(false);
  }
};

export { usePokemonList };
