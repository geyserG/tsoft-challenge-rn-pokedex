import type { Pokemon } from '../../../entities/Pokemon';

export interface UsePokemonByIdState {
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
}
