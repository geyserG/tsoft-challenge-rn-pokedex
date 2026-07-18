export interface PokemonSpeciesApiModel {
  flavor_text_entries: FlavorTextEntryApiModel[];
}

interface FlavorTextEntryApiModel {
  flavor_text: string;
  language: {
    name: string;
  };
}
