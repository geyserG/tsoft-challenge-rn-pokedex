import { View, Text } from 'react-native';
import React from 'react';
import type { StaticScreenProps } from '@react-navigation/native';
import type { PokemonDetailsParams } from '../navigation/types';
import { usePokemonById } from '../hooks/usePokemonById';

type Props = StaticScreenProps<PokemonDetailsParams>;

const PokemonDetails = ({ route }: Props) => {
  const { pokemonId } = route.params;
  const { pokemon, loading } = usePokemonById(pokemonId);
  console.log(pokemon);

  return (
    <View>
      <Text>Tipo: {pokemon?.type}</Text>
      <Text>Altura: {pokemon?.heightInMeters} m</Text>
      <Text>Peso: {pokemon?.weightInKilograms} kg</Text>
    </View>
  );
};

export default PokemonDetails;
