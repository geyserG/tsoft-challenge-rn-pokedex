import type { Pokemon } from '../../domain/entities/Pokemon';

export interface UsePokemonByIdState {
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
}
