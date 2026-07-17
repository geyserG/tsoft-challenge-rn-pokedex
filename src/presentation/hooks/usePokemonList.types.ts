import type { Page } from '../../domain/entities/Page';

export interface PokemonListItem {
  pokemonId: number;
  pokemonName: string;
  imageLarge: string;
}

export interface PokemonListPage extends Omit<Page, 'results'> {
  results: PokemonListItem[];
}

export interface UsePokemonListState {
  page: PokemonListPage | null;
  loading: boolean;
  error: string | null;
  reload: () => Promise<void>;
}
