import type { Page } from '../../domain/entities/Page';
import type { PageApiModel } from '../models/PageApiModel';
import { PokemonMapper } from './PokemonMapper';

export class PageMapper {
  static parseToDomain(model: PageApiModel): Page {
    return {
      count: model.count,
      next: model.next,
      previous: model.previous,
      results: model.results.map(PokemonMapper.parseToDomain),
    };
  }
}
