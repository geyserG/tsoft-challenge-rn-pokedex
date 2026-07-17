import type { Pokemon } from '../../domain/entities/Pokemon';
import type { PokemonApiModel } from '../models/PokemonApiModel';

export class PokemonMapper {
  static parseToDomain(model: PokemonApiModel): Pokemon {
    return {
      pokemonId: model.id,
      pokemonName: model.name,
      imageLarge: model.sprites.other['official-artwork'].front_default,
    };
  }
}
