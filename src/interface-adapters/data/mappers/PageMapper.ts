import type { Page } from '../../../entities/Page';
import type { PageApiModel } from '../models/PageApiModel';
import { ResultMapper } from './ResultMapper';

export class PageMapper {
  static parseToDomain(model: PageApiModel): Page {
    return {
      total: model.count,
      nextPage: model.next,
      previousPage: model.previous,
      results: model.results.map(ResultMapper.parseToDomain),
    };
  }
}
