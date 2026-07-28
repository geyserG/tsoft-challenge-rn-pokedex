import type { Page } from '../../domain/entities/Page';
import type { PageDto } from '../dtos/PageDto';
import { ResultMapper } from './ResultMapper';

export class PageMapper {
  static parseToDomain(model: PageDto): Page {
    return {
      total: model.count,
      nextPage: model.next,
      previousPage: model.previous,
      results: model.results.map(ResultMapper.parseToDomain),
    };
  }
}
