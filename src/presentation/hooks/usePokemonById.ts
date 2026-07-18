import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { dependencies } from '../../app/container/dependencies';
import type { Pokemon } from '../../domain/entities/Pokemon';
import type { UsePokemonByIdState } from './usePokemonById.types';
import { capitalizeFirstLetter } from './utils';
import { pokemonTypes } from '../screens/constants';

const usePokemonById = (pokemonId: number): UsePokemonByIdState => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPokemon = () =>
    loadPokemonById(pokemonId, setPokemon, setLoading, setError);

  useEffect(() => {
    loadPokemonById(pokemonId, setPokemon, setLoading, setError);
  }, [pokemonId]);

  return {
    pokemon,
    loading,
    error,
    reload: loadPokemon,
  };
};

const loadPokemonById = async (
  pokemonId: number,
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,
): Promise<void> => {
  try {
    setLoading(true);
    setError(null);

    const result = await dependencies.getPokemonById.execute(pokemonId);

    setPokemon({
      ...result,
      pokemonName: capitalizeFirstLetter(result.pokemonName),
      type: pokemonTypes[result.type] || capitalizeFirstLetter(result.type),
    });
  } catch {
    setError('No fue posible cargar el pokémon');
  } finally {
    setLoading(false);
  }
};

export { usePokemonById };
