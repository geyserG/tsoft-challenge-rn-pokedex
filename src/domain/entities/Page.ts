import type { Pokemon } from './Pokemon';

export interface Page {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
