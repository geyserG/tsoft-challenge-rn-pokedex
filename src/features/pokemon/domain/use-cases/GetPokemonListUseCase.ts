import type { Page } from '../entities/Page';

export interface GetPokemonListUseCase {
  execute(offset: number, limit: number): Promise<Page>;
}
