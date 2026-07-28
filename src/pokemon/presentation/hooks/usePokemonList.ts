import { useEffect, useRef, useState } from 'react';
import type {
  PokemonListPage,
  UsePokemonListState,
} from './usePokemonList.types';
import { toPokemonListItem } from './utils';
import { POKEMON_PAGE_SIZE } from './constants';
import { LoadPokemonListParams } from './usePokemonList.types';
import type { GetPokemonListUseCase } from '../../domain/use-cases/GetPokemonListUseCase';

const usePokemonList = ({
  getPokemonList,
}: {
  getPokemonList: GetPokemonListUseCase;
}): UsePokemonListState => {
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
      getPokemonList,
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
      getPokemonList,
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
      getPokemonList,
    });
  }, [getPokemonList]);

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
  getPokemonList,
}: LoadPokemonListParams): Promise<void> => {
  if (requestLock.current) {
    return;
  }

  try {
    requestLock.current = true;
    append ? setLoadingMore(true) : setLoading(true);
    setError(null);

    const pageResult = await getPokemonList.execute(offset, POKEMON_PAGE_SIZE);
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
