import type { Pokemon } from '../../../entities/Pokemon';
import { capitalizeFirstLetter } from '../utils';

export const toPokemonDetailsViewModel = (pokemon: Pokemon): Pokemon => ({
  ...pokemon,
  pokemonName: capitalizeFirstLetter(pokemon.pokemonName),
  type: capitalizeFirstLetter(pokemon.type),
});
