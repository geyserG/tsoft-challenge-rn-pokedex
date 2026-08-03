import { PokemonLikeList } from '../../domain/entities/PokemonLikeList';

export class PokemonLikeListMapper {
  static toDomain(model: string | null): PokemonLikeList {
    return model ? JSON.parse(model) : { list: [] };
  }
}
