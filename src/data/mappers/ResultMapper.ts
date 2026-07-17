import type { ResultItem } from '../../domain/entities/ResultItem';
import { ResultItemApiModel } from '../models/ResultItemApiModel';

export class ResultMapper {
  static parseToDomain(model: ResultItemApiModel): ResultItem {
    return {
      pokemonName: model.name,
      url: model.url,
    };
  }
}
