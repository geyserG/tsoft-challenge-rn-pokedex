export interface PokemonLikeRepository {
  setLikePokemon(pokemonId: number): Promise<boolean>;
}
