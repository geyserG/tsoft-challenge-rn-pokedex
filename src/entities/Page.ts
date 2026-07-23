import { ResultItem } from './ResultItem';

export interface Page {
  total: number;
  nextPage: string | null;
  previousPage: string | null;
  results: ResultItem[];
}
