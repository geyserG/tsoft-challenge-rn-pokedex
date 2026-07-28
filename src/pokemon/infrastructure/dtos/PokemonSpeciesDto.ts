export interface PokemonSpeciesDto {
  flavor_text_entries: FlavorTextEntryDto[];
}

interface FlavorTextEntryDto {
  flavor_text: string;
  language: {
    name: string;
  };
}
