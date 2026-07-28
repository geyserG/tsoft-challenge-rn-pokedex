import { Pokemon } from '../entities/Pokemon';

export interface SearchPokemonUseCase {
  execute(name: string): Promise<Pokemon>;
}
