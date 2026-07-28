import { ResultItemDto } from './ResultItemDto';

export interface PageDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultItemDto[];
}
