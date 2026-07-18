export interface PokemonApiModel {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  location_area_encounters: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  forms: any[];
  game_indices: any[];
  held_items: any[];
  moves: any[];
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  cries: any[];
  stats: any[];
  types: any[];
  past_types: any[];
  past_abilities: any[];
}
