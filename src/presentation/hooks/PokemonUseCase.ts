import { Page } from '../../domain/entities/Page';
import { Pokemon } from '../../domain/entities/Pokemon';

export interface GetPokemonListUseCase {
  execute(offset: number, limit: number): Promise<Page>;
}

export interface GetPokemonByIdUseCase {
  execute(pokemonId: number): Promise<Pokemon>;
}
