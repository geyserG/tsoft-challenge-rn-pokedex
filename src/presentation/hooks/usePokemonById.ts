import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import type { Pokemon } from '../../domain/entities/Pokemon';
import type { UsePokemonByIdState } from './usePokemonById.types';
import { toPokemonDetailsViewModel } from '../models/pokemonViewModel';
import type { GetPokemonByIdUseCase } from './PokemonUseCase';

const usePokemonById = (
  pokemonId: number,
  getPokemonById: GetPokemonByIdUseCase,
): UsePokemonByIdState => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPokemon = () =>
    loadPokemonById(
      pokemonId,
      getPokemonById,
      setPokemon,
      setLoading,
      setError,
    );

  useEffect(() => {
    loadPokemonById(
      pokemonId,
      getPokemonById,
      setPokemon,
      setLoading,
      setError,
    );
  }, [pokemonId, getPokemonById]);

  return {
    pokemon,
    loading,
    error,
    reload: loadPokemon,
  };
};

const loadPokemonById = async (
  pokemonId: number,
  getPokemonById: GetPokemonByIdUseCase,
  setPokemon: Dispatch<SetStateAction<Pokemon | null>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string | null>>,
): Promise<void> => {
  try {
    setLoading(true);
    setError(null);

    const result = await getPokemonById.execute(pokemonId);

    setPokemon(toPokemonDetailsViewModel(result));
  } catch {
    setError('No fue posible cargar el pokémon');
  } finally {
    setLoading(false);
  }
};

export { usePokemonById };
