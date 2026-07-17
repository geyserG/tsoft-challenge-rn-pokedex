import { useCallback, useEffect, useState } from 'react';
import { dependencies } from '../../app/container/dependencies';
import type { Page } from '../../domain/entities/Page';

interface UsePokemonListState {
  page: Page | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
}

const usePokemonList = (): UsePokemonListState => {
  const [page, setPage] = useState<Page>({
    total: 0,
    nextPage: '',
    previousPage: '',
    results: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPage = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const list = await dependencies.getPokemonList.execute();

      setPage(list);
    } catch {
      setError('No fue posible cargar los pokémon');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  return {
    page,
    loading,
    error,
    reload: loadPage,
  };
};

export { usePokemonList };
