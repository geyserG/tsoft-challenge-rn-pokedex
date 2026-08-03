import { PokemonFavoriteList } from '../../domain/entities/PokemonFavoriteList';

export class PokemonFavoriteListMapper {
  static toDomain(model: string | null): PokemonFavoriteList {
    return model ? JSON.parse(model) : { list: [] };
  }
}
