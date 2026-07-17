import type { Pokemon } from '../../domain/entities/Pokemon';
import type { PokemonApiModel } from '../models/PokemonApiModel';

export class PokemonMapper {
  static parseToDomain(model: PokemonApiModel): Pokemon {
    return {
      pokemonId: model.id,
      name: model.name,
      base_experience: model.base_experience,
      height: model.height,
      is_default: model.is_default,
      order: model.order,
      weight: model.weight,
      location_area_encounters: model.location_area_encounters,
      abilities: model.abilities,
      forms: model.forms,
      game_indices: model.game_indices,
      held_items: model.held_items,
      moves: model.moves,
      species: model.species,
      sprites: model.sprites,
      cries: model.cries,
      stats: model.stats,
      types: model.types,
      past_types: model.past_types,
      past_abilities: model.past_abilities,
    };
  }
}
