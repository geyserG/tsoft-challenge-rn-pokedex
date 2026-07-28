import type { ResultItem } from '../../domain/entities/ResultItem';
import type { ResultItemDto } from '../dtos/ResultItemDto';

export class ResultMapper {
  static parseToDomain(model: ResultItemDto): ResultItem {
    return {
      pokemonName: model.name,
      url: model.url,
    };
  }
}
