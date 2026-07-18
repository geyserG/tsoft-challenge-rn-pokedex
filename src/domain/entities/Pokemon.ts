export interface Pokemon {
  pokemonId: number;
  pokemonName: string;
  imageLarge: string;
  type: string;
  heightInMeters: number;
  weightInKilograms: number;
  species: string;
  abilities: string[];
  description: string;
  stats: PokemonStat[];
}

export interface PokemonStat {
  name: string;
  value: number;
}
