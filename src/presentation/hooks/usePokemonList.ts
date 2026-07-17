import { useCallback, useEffect, useState } from 'react';
import { dependencies } from '../../app/container/dependencies';
import type {
  PokemonListItem,
  PokemonListPage,
  UsePokemonListState,
} from './usePokemonList.types';
import { POKEMON_IMAGE_BASE_URL } from './constants';

const usePokemonList = (): UsePokemonListState => {
  const [page, setPage] = useState<PokemonListPage>({
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

      const pageResult = await dependencies.getPokemonList.execute();
      const results = pageResult.results.map(toPokemonListItem);

      setPage({ ...pageResult, results });
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

function toPokemonListItem(result: {
  pokemonName: string;
  url: string;
}): PokemonListItem {
  const pokemonId = extractPokemonId(result.url);

  return {
    imageLarge: `${POKEMON_IMAGE_BASE_URL}/${pokemonId}.png`,
    pokemonId,
    pokemonName: result.pokemonName,
  };
}

function extractPokemonId(url: string): number {
  const match = url.match(/\/(\d+)\/?$/);

  if (!match) {
    throw new Error(`Unable to extract the Pokémon ID from URL: ${url}`);
  }

  return Number(match[1]);
}

export { usePokemonList };
