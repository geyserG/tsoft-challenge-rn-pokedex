import type { Pokemon } from '../../domain/entities/Pokemon';
import type { PokemonDto } from '../dtos/PokemonDto';
import type { PokemonSpeciesDto } from '../dtos/PokemonSpeciesDto';

export class PokemonMapper {
  static parseToDomain(
    model: PokemonDto,
    speciesModel: PokemonSpeciesDto,
  ): Pokemon {
    return {
      pokemonId: model.id,
      pokemonName: model.name,
      imageLarge: model.sprites.other['official-artwork'].front_default,
      type: model.types[0].type.name,
      heightInMeters: model.height / 10,
      weightInKilograms: model.weight / 10,
      species: model.species.name,
      abilities: model.abilities.map(item => item.ability.name),
      description: this.getDescription(speciesModel),
      stats: model.stats.map(item => ({
        name: item.stat.name,
        value: item.base_stat,
      })),
    };
  }

  private static getDescription(model: PokemonSpeciesDto): string {
    const entries = model.flavor_text_entries;
    const entry =
      entries.find(item => item.language.name === 'es') ??
      entries.find(item => item.language.name === 'en') ??
      entries[0];

    return entry?.flavor_text.replace(/[\n\f\r]+/g, ' ').trim() ?? '';
  }
}
