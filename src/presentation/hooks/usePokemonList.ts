import { useEffect, useRef, useState } from 'react';
import { dependencies } from '../../app/container/dependencies';
import type {
  PokemonListPage,
  UsePokemonListState,
} from './usePokemonList.types';
import { toPokemonListItem } from './utils';
import { POKEMON_PAGE_SIZE } from './constants';
import { LoadPokemonListParams } from './usePokemonById.types';

const usePokemonList = (): UsePokemonListState => {
  const [page, setPage] = useState<PokemonListPage>({
    total: 0,
    nextPage: '',
    previousPage: '',
    results: [],
  });
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const requestLock = useRef(false);

  const reload = () =>
    loadPokemonList({
      append: false,
      offset: 0,
      requestLock,
      setError,
      setLoading,
      setLoadingMore,
      setPage,
    });

  const loadMore = () => {
    if (!page.nextPage) {
      return Promise.resolve();
    }

    return loadPokemonList({
      append: true,
      offset: page.results.length,
      requestLock,
      setError,
      setLoading,
      setLoadingMore,
      setPage,
    });
  };

  useEffect(() => {
    loadPokemonList({
      append: false,
      offset: 0,
      requestLock,
      setError,
      setLoading,
      setLoadingMore,
      setPage,
    });
  }, []);

  return {
    page,
    loading,
    loadingMore,
    hasMore: page.nextPage !== null,
    error,
    loadMore,
    reload,
  };
};

const loadPokemonList = async ({
  append,
  offset,
  requestLock,
  setPage,
  setLoading,
  setLoadingMore,
  setError,
}: LoadPokemonListParams): Promise<void> => {
  if (requestLock.current) {
    return;
  }

  try {
    requestLock.current = true;
    append ? setLoadingMore(true) : setLoading(true);
    setError(null);

    const pageResult = await dependencies.getPokemonList.execute(
      offset,
      POKEMON_PAGE_SIZE,
    );
    const results = pageResult.results.map(toPokemonListItem);

    setPage(currentPage => ({
      ...pageResult,
      results: append ? [...currentPage.results, ...results] : results,
    }));
  } catch {
    setError('No fue posible cargar los pokémon');
  } finally {
    requestLock.current = false;
    setLoading(false);
    setLoadingMore(false);
  }
};

export { usePokemonList };
