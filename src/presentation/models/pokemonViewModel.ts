import { Pokemon } from '../../domain/entities/Pokemon';
import { capitalizeFirstLetter } from '../utils';

export const toPokemonDetailsViewModel = (pokemon: Pokemon): Pokemon => ({
  ...pokemon,
  pokemonName: capitalizeFirstLetter(pokemon.pokemonName),
  type: capitalizeFirstLetter(pokemon.type),
});
