import { capitalizeFirstLetter } from '../utils';
import { POKEMON_IMAGE_BASE_URL } from './constants';
import type { PokemonListItem } from './usePokemonList.types';

export const toPokemonListItem = (result: {
  pokemonName: string;
  url: string;
}): PokemonListItem => {
  const pokemonId = extractPokemonId(result.url);

  return {
    imageLarge: `${POKEMON_IMAGE_BASE_URL}/${pokemonId}.png`,
    pokemonId,
    pokemonName: capitalizeFirstLetter(result.pokemonName),
  };
};

export const extractPokemonId = (url: string): number => {
  const match = url.match(/\/(\d+)\/?$/);

  if (!match) {
    throw new Error(`Unable to extract the Pokémon ID from URL: ${url}`);
  }

  return Number(match[1]);
};
