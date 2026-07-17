export interface Pokemon {
  pokemonId: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  location_area_encounters: string;
  abilities: any[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  moves: any[];
  species: any[];
  sprites: any[];
  cries: any[];
  stats: any[];
  types: any[];
  past_types: any[];
  past_abilities: any[];
}
