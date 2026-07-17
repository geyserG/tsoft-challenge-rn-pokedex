import type { PokemonApiModel } from './PokemonApiModel';

export interface PageApiModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonApiModel[];
}
