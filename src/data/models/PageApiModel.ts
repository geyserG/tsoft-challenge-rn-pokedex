import { ResultItemApiModel } from './ResultItemApiModel';

export interface PageApiModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultItemApiModel[];
}
