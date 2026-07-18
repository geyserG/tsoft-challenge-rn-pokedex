import type { Pokemon } from '../../domain/entities/Pokemon';
import type { PokemonApiModel } from '../models/PokemonApiModel';

export class PokemonMapper {
  static parseToDomain(model: PokemonApiModel): Pokemon {
    return {
      pokemonId: model.id,
      pokemonName: model.name,
      imageLarge: model.sprites.other['official-artwork'].front_default,
      type: model.types[0].type.name,
      heightInMeters: model.height / 10,
      weightInKilograms: model.weight / 10,
    };
  }
}
